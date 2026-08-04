import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================
// CONFIGURACIÓN DE MIKROWISP
// ==========================================
const MIKROWISP_CONFIG = {
  url: process.env.MIKROWISP_URL || "https://mikrowisp.oneredrd.com/api/v1",
  apiKey: process.env.MIKROWISP_API_KEY || "tu_api_key_aqui"
};

// ==========================================
// CONFIGURACIÓN DE AZUL (Pruebas / Producción)
// ==========================================
const IS_PRODUCTION = process.env.AZUL_ENV === 'production';

const AZUL_CONFIG = {
  // En ambiente de prueba Azul suele pedir MerchantId de prueba como APPROVED_MERCHANT si no tienes uno asignado
  merchantId: process.env.AZUL_MERCHANT_ID || (IS_PRODUCTION ? "39038540035" : "APPROVED_MERCHANT"), 
  merchantName: process.env.AZUL_MERCHANT_NAME || "OneRedRD",
  merchantType: process.env.AZUL_MERCHANT_TYPE || "Telecommunications",
  currencyCode: process.env.AZUL_CURRENCY_CODE || "$", 
  authKey: process.env.AZUL_AUTH_KEY || (IS_PRODUCTION ? "tu_clave_secreta_prod" : "APPROVED_AUTH_KEY"), 
  
  urlPruebas: "https://pruebas.azul.com.do/PaymentPage/",
  urlProduccionPrimary: "https://pagos.azul.com.do/PaymentPage/Default.aspx",
  urlProduccionSecondary: "https://contpagos.azul.com.do/PaymentPage/Default.aspx",

  approvedUrl: process.env.AZUL_APPROVED_URL || "https://oneredrd.com/pago-exitoso",
  declinedUrl: process.env.AZUL_DECLINED_URL || "https://oneredrd.com/pago-declinado",
  cancelUrl: process.env.AZUL_CANCEL_URL || "https://oneredrd.com/pago-cancelado"
};

function generarAuthHashPaymentPage(params, authKey) {
  const plainText = 
    `${params.MerchantId}` +
    `${params.MerchantName}` +
    `${params.MerchantType}` +
    `${params.CurrencyCode}` +
    `${params.OrderNumber}` +
    `${params.Amount}` +
    `${params.ITBIS}` +
    `${params.ApprovedUrl}` +
    `${params.DeclinedUrl}` +
    `${params.CancelUrl}` +
    `${params.UseCustomField1}` +
    `${params.CustomField1Label || ''}` +
    `${params.CustomField1Value || ''}` +
    `${params.UseCustomField2}` +
    `${params.CustomField2Label || ''}` +
    `${params.CustomField2Value || ''}` +
    `${authKey}`;

  return crypto.createHash('sha512').update(plainText, 'utf8').digest('hex');
}

// ==========================================
// ENDPOINT UNIFICADO: Datos Completos + Facturas (Pendientes y Pagadas)
// ==========================================
app.post('/api/facturas/consultar', async (req, res) => {
  try {
    const { tipo, valor } = req.body;

    if (!valor || !valor.toString().trim()) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: "Ingresa un término de búsqueda válido." 
      });
    }

    let baseUrl = MIKROWISP_CONFIG.url || "https://mikrowisp.oneredrd.com";
    baseUrl = baseUrl.replace(/\/api\/v1\/?$/, '').replace(/\/$/, '');
    const tokenVal = MIKROWISP_CONFIG.apiKey;
    const valorLimpio = valor.toString().trim();

    const payloadMikrowisp = { token: tokenVal };
    if (tipo === 'id' || tipo === 'idcliente') {
      payloadMikrowisp.idcliente = valorLimpio.replace(/\D/g, '');
    } else {
      payloadMikrowisp.cedula = valorLimpio;
    }

    const respCliente = await fetch(`${baseUrl}/api/v1/GetClientsDetails`, {
      method: 'POST',
      headers: { 'accept': 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify(payloadMikrowisp)
    });

    const dataCliente = await respCliente.json();

    if (!dataCliente || dataCliente.estado !== "exito" || !dataCliente.datos || dataCliente.datos.length === 0) {
      return res.json({
        exito: false,
        mensaje: (tipo === 'id' || tipo === 'idcliente')
          ? `No se encontró ningún cliente con el ID #${valorLimpio}.` 
          : `No se encontró ningún cliente con la cédula ${valorLimpio}.`
      });
    }

    const cliente = dataCliente.datos[0];
    const clienteId = cliente.id;
    const clienteNombre = cliente.nombre || `Cliente #${clienteId}`;
    const facturacion = cliente.facturacion || {};

    // Helper para formatear facturas desde Mikrowisp
    const MapearFactura = (item, estadoTexto) => ({
      idFactura: item.id || item.idfactura || item.IDFactura || 'N/A',
      monto: parseFloat(item.total || item.monto || item.valor || 0),
      concepto: item.descripcion || item.detalle || 'Servicio de Internet',
      fechaEmision: item.fechagestion || item.fecha || 'N/A',
      fechaVencimiento: item.fechavencimiento || item.vencimiento || 'N/A',
      estado: item.estado_texto || estadoTexto
    });

    // 2. Obtener Facturas Pendientes (estado: 1)
    let facturasPendientes = [];
    try {
      const respPendientes = await fetch(`${baseUrl}/api/v1/GetInvoices`, {
        method: 'POST',
        headers: { 'accept': 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify({ token: tokenVal, idcliente: clienteId, estado: '1' })
      });
      const dataPendientes = await respPendientes.json();
      const lista = Array.isArray(dataPendientes) ? dataPendientes : (dataPendientes.facturas || []);
      facturasPendientes = lista.map(f => MapearFactura(f, 'no pagado'));
    } catch (e) {
      console.error("Error obteniendo facturas pendientes:", e);
    }

    // 3. Obtener Facturas Pagadas (estado: 2)
    let facturasPagadas = [];
    try {
      const respPagadas = await fetch(`${baseUrl}/api/v1/GetInvoices`, {
        method: 'POST',
        headers: { 'accept': 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify({ token: tokenVal, idcliente: clienteId, estado: '2' })
      });
      const dataPagadas = await respPagadas.json();
      const listaP = Array.isArray(dataPagadas) ? dataPagadas : (dataPagadas.facturas || []);
      facturasPagadas = listaP.map(f => MapearFactura(f, 'pagado'));
    } catch (e) {
      console.error("Error obteniendo facturas pagadas:", e);
    }

    // 4. Responder objeto completo al Frontend
    return res.json({
      exito: true,
      cliente: {
        id: clienteId,
        nombre: clienteNombre,
        estado: cliente.estado || 'ACTIVO',
        cedula: (cliente.cedula && cliente.cedula.trim() !== "") ? cliente.cedula : 'Sin documento registrado',
        cantSinPagar: parseInt(facturacion.facturas_nopagadas || facturasPendientes.length, 10),
        totalPendiente: parseFloat(facturacion.total_facturas || 0)
      },
      facturasPendientes,
      facturasPagadas
    });

  } catch (error) {
    console.error("❌ Error en servidor:", error);
    return res.status(500).json({ exito: false, mensaje: "Error procesando la consulta." });
  }
});

// ==========================================
// ENDPOINT 2: Generar Checkout de AZUL
// ==========================================
app.post('/api/pagos/crear-checkout', (req, res) => {
  try {
    const { monto, planNombre, clienteId } = req.body;

    if (!monto || !clienteId) {
      return res.status(400).json({ exito: false, mensaje: "Faltan datos requeridos para el pago." });
    }

    const orderNumber = `ONERED-${Date.now()}`;
    const amount = Math.round(parseFloat(monto) * 100).toString(); 
    const itbis = "0"; 

    const params = {
      MerchantId: AZUL_CONFIG.merchantId,
      MerchantName: AZUL_CONFIG.merchantName,
      MerchantType: AZUL_CONFIG.merchantType,
      CurrencyCode: AZUL_CONFIG.currencyCode,
      OrderNumber: orderNumber,
      Amount: amount,
      ITBIS: itbis,
      ApprovedUrl: AZUL_CONFIG.approvedUrl,
      DeclinedUrl: AZUL_CONFIG.declinedUrl,
      CancelUrl: AZUL_CONFIG.cancelUrl,
      UseCustomField1: "1",
      CustomField1Label: "Cedula/Contrato",
      CustomField1Value: String(clienteId),
      UseCustomField2: "1",
      CustomField2Label: "Concepto",
      CustomField2Value: planNombre || "Pago de Servicio OneRed",
      ShowTransactionResult: "0",
      Locale: "ES"
    };

    const authHash = generarAuthHashPaymentPage(params, AZUL_CONFIG.authKey);

    // Seleccionar URLs según si estamos en Pruebas o Producción
    const targetUrl = IS_PRODUCTION ? AZUL_CONFIG.urlProduccionPrimary : AZUL_CONFIG.urlPruebas;
    const fallbackUrl = IS_PRODUCTION ? AZUL_CONFIG.urlProduccionSecondary : AZUL_CONFIG.urlPruebas;

    res.json({
      exito: true,
      targetUrl,
      fallbackUrl,
      formData: {
        ...params,
        AuthHash: authHash
      }
    });

  } catch (error) {
    console.error("Error generando Checkout de Azul:", error);
    res.status(500).json({ exito: false, mensaje: "Error preparando la pasarela de pago" });
  }
});

// ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'dist')));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`💳 Entorno Azul actual: ${IS_PRODUCTION ? 'PRODUCCIÓN' : 'PRUEBAS (SANDBOX)'}`);
});