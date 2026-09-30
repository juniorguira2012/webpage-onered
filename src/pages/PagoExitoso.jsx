import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Loader2 } from 'lucide-react';

export default function PagoExitoso() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [procesando, setProcesando] = useState(true);
  const [mensajeEstado, setMensajeEstado] = useState('Procesando pago en el sistema...');
  
  // Ref para evitar ejecuciones duplicadas (React StrictMode)
  const ejecutadoRef = useRef(false);

  const orderNumber = searchParams.get('OrderNumber');
  const amount = searchParams.get('Amount');
  const authorizationCode = searchParams.get('AuthorizationCode');
  const azulOrderId = searchParams.get('AzulOrderId');
  const customField1 = searchParams.get('CustomField1Value');

  useEffect(() => {
    // Si ya se ejecutó la confirmación en esta sesión del componente, omitir
    if (ejecutadoRef.current) return;

    const confirmarConMikrowisp = async () => {
      // Marcar como ejecutado inmediatamente
      ejecutadoRef.current = true;

      try {
        const idFacturaReal = localStorage.getItem('pago_idFactura');
        const idClienteReal = localStorage.getItem('pago_idCliente');
        const montoReal = localStorage.getItem('pago_monto');

        // Validar si realmente hay un pago pendiente por procesar
        if (!idFacturaReal && !orderNumber) {
          //console.warn("⚠️ No hay factura registrada para confirmar.");
          setMensajeEstado('El pago ya fue procesado o no se encontró la sesión activa.');
          setProcesando(false);
          return;
        }

        const idFacturaFinal = idFacturaReal || orderNumber?.replace('ONERED-', '');
        const montoFinal = montoReal || (amount ? parseFloat(amount) / 100 : 0);
        const idClienteFinal = idClienteReal || customField1;

        const response = await fetch('/api/pagos/confirmar-mikrowisp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            idCliente: idClienteFinal,
            idFactura: idFacturaFinal,
            monto: montoFinal,
            azulOrderId,
            authorizationCode
          })
        });

        const data = await response.json();
        if (data.exito) {
          setMensajeEstado('¡Pago registrado correctamente y servicio reactivado!');
        } else {
          setMensajeEstado('Pago recibido. Si el servicio no se activa en minutos, contacte soporte.');
        }
      } catch (err) {
        //console.error('Error enviando pago a Mikrowisp:', err);
        setMensajeEstado('Pago procesado por el banco. Actualizando sistema...');
      } finally {
        // Limpiar localStorage sólo al completar el ciclo
        localStorage.removeItem('pago_idFactura');
        localStorage.removeItem('pago_idCliente');
        localStorage.removeItem('pago_monto');
        setProcesando(false);
      }
    };

    confirmarConMikrowisp();
  }, []);

  const montoFormateado = amount 
    ? (parseFloat(amount) / 100).toLocaleString('es-DO', { minimumFractionDigits: 2 }) 
    : '0.00';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 py-20 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 text-center space-y-6">
        
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
          {procesando ? <Loader2 className="animate-spin" size={32} /> : <CheckCircle2 size={36} />}
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            ¡Pago Realizado con Éxito!
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            {mensajeEstado}
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 text-xs space-y-2.5 border border-slate-100 text-left">
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
            <span className="text-slate-500 font-medium">Monto Pagado</span>
            <span className="text-base font-black text-emerald-600">RD$ {montoFormateado}</span>
          </div>
          {orderNumber && (
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">No. Orden</span>
              <span className="font-bold text-slate-800">{orderNumber}</span>
            </div>
          )}
          {authorizationCode && (
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Código Autorización</span>
              <span className="font-bold text-slate-800">{authorizationCode}</span>
            </div>
          )}
        </div>

        <button
          onClick={() => navigate('/consulta-factura')}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
        >
          <ArrowLeft size={16} /> Volver a Facturas
        </button>

      </div>
    </div>
  );
}