import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { XCircle, RefreshCw, ArrowLeft } from 'lucide-react';

export default function PagoDeclinado() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const orderNumber = searchParams.get('OrderNumber');
  const errorDescription = searchParams.get('ErrorDescription');
  const responseFriendlyMessage = searchParams.get('ResponseFriendlyMessage');
  const azulOrderId = searchParams.get('AzulOrderId');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 py-20 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 text-center space-y-6">
        
        {/* Icono Estado */}
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto border border-red-100">
          <XCircle size={36} />
        </div>

        {/* Mensaje Principal */}
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Pago No Procesado
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            {responseFriendlyMessage || errorDescription || 'La transacción fue rechazada por la pasarela de pago o el banco emisor.'}
          </p>
        </div>

        {/* Detalles de la Transacción */}
        {(orderNumber || azulOrderId) && (
          <div className="bg-slate-50 rounded-2xl p-4 text-xs space-y-2 border border-slate-100 text-left">
            {orderNumber && (
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">No. Orden</span>
                <span className="font-bold text-slate-800">{orderNumber}</span>
              </div>
            )}
            {azulOrderId && (
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">ID Azul</span>
                <span className="font-bold text-slate-800">{azulOrderId}</span>
              </div>
            )}
          </div>
        )}

        {/* Botones de Acción */}
        <div className="space-y-3 pt-2">
          <button
            onClick={() => navigate('/consulta-factura')}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <RefreshCw size={16} /> Reintentar Pago
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} /> Volver al Inicio
          </button>
        </div>

      </div>
    </div>
  );
}