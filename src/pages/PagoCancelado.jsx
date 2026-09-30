import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function PagoCancelado() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 py-20 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 text-center space-y-6">
        
        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto border border-amber-100">
          <AlertCircle size={36} />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Pago Cancelado
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Has cancelado el proceso de pago en la pasarela. No se ha realizado ningún cargo a tu tarjeta.
          </p>
        </div>

        <button
          onClick={() => navigate('/consulta-factura')}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
        >
          <ArrowLeft size={16} /> Volver a Intentar
        </button>

      </div>
    </div>
  );
}