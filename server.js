import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();

app.set('trust proxy', true);

app.use(helmet());
app.use(cors());
app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Limitador de tasa para las consultas
const limpiadorConsultas = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 15, // máximo 15 peticiones por ventana
  standardHeaders: true, // Devuelve info de rate limit en cabeceras `RateLimit-*`
  legacyHeaders: false, // Desactiva cabeceras `X-RateLimit-*`
  message: { 
    exito: false, 
    mensaje: "Demasiadas consultas desde esta IP. Por favor intente más tarde." 
  }
});

// Aplicar el limitador al endpoint de consultas
app.use('/api/facturas/consultar', limpiadorConsultas);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// CONFIGURACIÓN DE MIKROWISP
const MIKROWISP_CONFIG = {
  url: process.env.MIKROWISP_URL,
  apiKey: process.env.MIKROWISP_API_KEY
};

// CONFIGURACIÓN DE AZUL (Pruebas / Producción)
const IS_TESTING = process.env.AZUL_IS_TESTING === 'true';
const IS_PRODUCTION = !IS_TESTING && (
  process.env.AZUL_ENV === 'production' || 
  (process.env.AZUL_MERCHANT_ID_PROD && process.env.AZUL_AUTH_KEY_PROD)
);

const AZUL_MERCHANT_ID = 
  process.env.AZUL_MERCHANT_ID || 
  (IS_TESTING ? process.env.AZUL_MERCHANT_ID_TEST : process.env.AZUL_MERCHANT_ID_PROD) ||
  process.env.AZUL_MERCHANT_ID_TEST;

const AZUL_AUTH_KEY = 
  process.env.AZUL_AUTH_KEY || 
  (IS_TESTING ? process.env.AZUL_AUTH_KEY_TEST : process.env.AZUL_AUTH_KEY_PROD) ||
  process.env.AZUL_AUTH_KEY_TEST;

// Validar credenciales críticas
const missingVars = [];
if (!MIKROWISP_CONFIG.url) missingVars.push('MIKROWISP_URL');
if (!MIKROWISP_CONFIG.apiKey) missingVars.push('MIKROWISP_API_KEY');
if (!AZUL_MERCHANT_ID) missingVars.push('AZUL_MERCHANT_ID (o AZUL_MERCHANT_ID_TEST/PROD)');
if (!AZUL_AUTH_KEY) missingVars.push('AZUL_AUTH_KEY (o AZUL_AUTH_KEY_TEST/PROD)');

if (missingVars.length > 0) {
  console.error('❌ ERROR: Faltan las siguientes variables de entorno críticas:');
  missingVars.forEach(v => console.error(`   - ${v}`));
  console.error('Consulta el archivo .env.example para ver todas las variables requeridas.');
  process.exit(1);
}

const AZUL_CONFIG = {
  merchantId: String(AZUL_MERCHANT_ID || '').trim(),
  merchantName: process.env.AZUL_MERCHANT_NAME || "OneRedRD",
  merchantType: process.env.AZUL_MERCHANT_TYPE || "Telecommunications",
  currencyCode: process.env.AZUL_CURRENCY_CODE || "$",
  authKey: String(AZUL_AUTH_KEY || '').trim(),

  urlPruebas: process.env.AZUL_URL_PRUEBAS || "https://pruebas.azul.com.do/PaymentPage/",
  urlProduccionPrimary: process.env.AZUL_URL_PRODUCCION_PRIMARY || "https://pagos.azul.com.do/PaymentPage/Default.aspx",
  urlProduccionSecondary: process.env.AZUL_URL_PRODUCCION_SECONDARY || "https://contpagos.azul.com.do/PaymentPage/Default.aspx",

  approvedUrl: process.env.AZUL_APPROVED_URL || "https://oneredrd.com/pago-completado",
  declinedUrl: process.env.AZUL_DECLINED_URL || "https://oneredrd.com/pago-rechazado",
  cancelUrl: process.env.AZUL_CANCEL_URL || "https://oneredrd.com/pago-cancelado"
};

// ==========================================
// FUNCIÓN HASH AZUL (UTF-16LE + HMAC-SHA512)
// ==========================================
function generarAuthHashPaymentPage(params, authKey) {
  const key = authKey.trim();

  // Concatenación exacta de campos + AuthKey al final
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
    `${key}`;

  //console.log("🔍 Cadena a firmar en Azul:", plainText);

  // Convertir a buffer utf16le
  const textBuffer = Buffer.from(plainText, 'utf16le');

  // Generar HMAC-SHA512 con la clave secreta
  return crypto
    .createHmac('sha512', key)
    .update(textBuffer)
    .digest('hex');
}

// ==========================================
// ENDPOINT 1: Crear Checkout de AZUL
// ==========================================
app.post('/api/pagos/crear-checkout', (req, res) => {
  try {
    // Recibir idFactura desde la petición
    const { monto, planNombre, clienteId, idFactura } = req.body;

    if (!monto || !clienteId) {
      return res.status(400).json({ exito: false, mensaje: "Faltan datos requeridos para el pago." });
    }

    // Usamos el ID de la factura real en la orden o en CustomField2
    const orderNumber = `ONERED-${idFactura || Date.now()}`; 
    const amountFloat = parseFloat(monto) || 0;
    const amount = Math.round(amountFloat * 100).toString(); 
    const itbis = "000"; 

    const merchantId = String(AZUL_CONFIG.merchantId || '').trim();
    const authKey = String(AZUL_CONFIG.authKey || '').trim();

    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://oneredrd.com' 
      : 'http://localhost:5173';

    const params = {
      MerchantId: merchantId,
      MerchantName: String(AZUL_CONFIG.merchantName).trim(),
      MerchantType: String(AZUL_CONFIG.merchantType).trim(),
      CurrencyCode: "$",
      OrderNumber: String(orderNumber).trim(),
      Amount: String(amount).trim(),
      ITBIS: String(itbis).trim(),
      ApprovedUrl: process.env.AZUL_APPROVED_URL || `${baseUrl}/pago-completado`,
      DeclinedUrl: process.env.AZUL_DECLINED_URL || `${baseUrl}/pago-rechazado`,
      CancelUrl: process.env.AZUL_CANCEL_URL || `${baseUrl}/consulta-factura`,
      UseCustomField1: "1",
      CustomField1Label: "Cedula/Contrato",
      CustomField1Value: String(clienteId).trim(),
      UseCustomField2: "1",
      CustomField2Label: "Concepto",
      CustomField2Value: String(planNombre || "Pago de Servicio OneRed").trim(),
      ShowTransactionResult: "0",
      Locale: "ES"
    };

    // Calcular firma UTF-16LE + HMAC-SHA512
    const authHash = generarAuthHashPaymentPage(params, authKey);

    const targetUrl = IS_PRODUCTION ? AZUL_CONFIG.urlProduccionPrimary : AZUL_CONFIG.urlPruebas;
    const fallbackUrl = IS_PRODUCTION ? AZUL_CONFIG.urlProduccionSecondary : AZUL_CONFIG.urlPruebas;

    // console.log("🚀 FORMULARIO ENVIADO A AZUL:", {
    //   MerchantId: params.MerchantId,
    //   OrderNumber: params.OrderNumber,
    //   Amount: params.Amount,
    //   ApprovedUrl: params.ApprovedUrl,
    //   AuthHashLength: authHash.length
    // });

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

// ==========================================
// ENDPOINT 2: Confirmar Pago y Aplicar en Mikrowisp
// ==========================================
app.post('/api/pagos/confirmar-mikrowisp', async (req, res) => {
  try {
    const { idFactura, idCliente, monto, azulOrderId, authorizationCode } = req.body;

    // console.log("📥 [backend] Recibida solicitud para registrar pago:", req.body);

    if (!idFactura || !monto) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: "No se recibió el idFactura o el monto." 
      });
    }

    let baseUrl = process.env.MIKROWISP_URL || "https://mikrowisp.oneredrd.com";
    baseUrl = baseUrl.replace(/\/api\/v1\/?$/, '').replace(/\/$/, '');
    
    const mikrowispEndpoint = `${baseUrl}/api/v1/PaidInvoice`;

    // Objeto JSON esperado por Mikrowisp PaidInvoice
    const payloadMikrowisp = {
      token: process.env.MIKROWISP_API_KEY || MIKROWISP_CONFIG.apiKey,
      idfactura: String(idFactura).trim(),
      monto: parseFloat(monto),
      pasarela: 'azul', // Clave de la pasarela en Mikrowisp
      transaccion: azulOrderId || authorizationCode || 'AZUL-ONLINE'
    };

    //console.log("📡 Enviando a Mikrowisp PaidInvoice:", mikrowispEndpoint);

    const resMW = await fetch(mikrowispEndpoint, {
      method: 'POST',
      headers: { 
        'accept': 'application/json',
        'content-type': 'application/json' 
      },
      body: JSON.stringify(payloadMikrowisp)
    });

    const dataMW = await resMW.json();
    // console.log("📡 Respuesta de Mikrowisp:", dataMW);

    if (dataMW.estado === 'exito' || dataMW.estado === 'success') {
      return res.json({ 
        exito: true, 
        mensaje: "Pago registrado y servicio activado en Mikrowisp." 
      });
    } else {
      return res.status(400).json({ 
        exito: false, 
        mensaje: dataMW.mensaje || "Error al aplicar el pago en Mikrowisp." 
      });
    }

  } catch (error) {
    console.error("❌ Error confirmando en Mikrowisp:", error);
    res.status(500).json({ exito: false, mensaje: "Error conectando con el sistema de facturación." });
  }
});

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================
function enmascararCedula(cedula) {
  if (!cedula) return 'Sin documento';
  const limpia = String(cedula).trim();
  if (limpia.length < 5) return '***';
  return limpia.substring(0, 3) + '*****' + limpia.slice(-3);
}

// ==========================================
// ENDPOINT 3: Datos Completos + Facturas (Pendientes y Pagadas)
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

    // 1. Consultar Datos del Cliente
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

    const MapearFactura = (item, estadoTexto) => ({
      idFactura: item.id || item.idfactura || item.IDFactura || item.factura || 'N/A',
      monto: parseFloat(item.total || item.monto || item.valor || 0),
      concepto: item.descripcion || item.detalle || item.concepto || 'Servicio de Internet',
      fechaEmision: item.emitido || item.fecha_emision || item.fechagestion || item.fechaemision || item.fecha || 'N/A',
      fechaVencimiento: item.vencimiento || item.fechavencimiento || item.fecha_vencimiento || 'N/A',
      fechaPago: item.fechapago || item.fecha_pago || 'N/A',
      estado: item.estado_texto || estadoTexto
    });

    // 2. Consultar facturas con límite estricto desde Mikrowisp para máxima velocidad
    let facturasPendientes = [];
    let facturasPagadas = [];

    try {
      const respTodas = await fetch(`${baseUrl}/api/v1/GetInvoices`, {
        method: 'POST',
        headers: { 'accept': 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify({ token: tokenVal, idcliente: clienteId, limit: 10 })
      });

      const dataTodas = await respTodas.json();
      
      let listaFacturas = [];
      if (Array.isArray(dataTodas)) {
        listaFacturas = dataTodas;
      } else if (dataTodas && Array.isArray(dataTodas.facturas)) {
        listaFacturas = dataTodas.facturas;
      } else if (dataTodas && Array.isArray(dataTodas.datos)) {
        listaFacturas = dataTodas.datos;
      }

      //console.log(`📊 Facturas totales recuperadas de Mikrowisp para cliente #${clienteId}: ${listaFacturas.length}`);

      // Clasificar por estado
      listaFacturas.forEach(f => {
        const estadoFactura = String(f.estado || f.estado_num || '').toLowerCase();
        if (estadoFactura === '2' || estadoFactura === 'pagado' || estadoFactura === 'pagada') {
          facturasPagadas.push(MapearFactura(f, 'pagado'));
        } else {
          facturasPendientes.push(MapearFactura(f, 'no pagado'));
        }
      });

      // 🔹 ORDENAR Y LIMITAR A LAS ÚLTIMAS 5 FACTURAS PAGADAS
      facturasPagadas.sort((a, b) => parseInt(b.idFactura) - parseInt(a.idFactura));
      facturasPagadas = facturasPagadas.slice(0, 5);

      console.log(`✅ Enviando al frontend: ${facturasPendientes.length} pendientes y ${facturasPagadas.length} pagadas.`);

    } catch (e) {
      console.error("❌ Error obteniendo facturas del cliente:", e);
    }



    // 3. Responder al Frontend
    return res.json({
      exito: true,
      cliente: {
        id: clienteId,
        nombre: clienteNombre,
        estado: cliente.estado || 'ACTIVO',
        // 🔹 Enmascarar cédula antes de enviarla
        cedula: enmascararCedula(cliente.cedula),
        cantSinPagar: parseInt(facturacion.facturas_nopagadas || facturasPendientes.length, 10),
        totalPendiente: parseFloat(facturacion.total_facturas || 0)
      },
      facturasPendientes,
      facturasPagadas // <-- Contiene exactamente máximo 5 elementos
    });

  } catch (error) {
    console.error("❌ Error en servidor:", error);
    return res.status(500).json({ exito: false, mensaje: "Error procesando la consulta." });
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