import React, { useState } from 'react';
import { ArrowLeft, CreditCard, ShieldCheck } from 'lucide-react';

export default function CheckoutAzul({ factura, cliente, datosComercio, onVolver, onProcederPago, cargando }) {
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false);

  // Valores por defecto en caso de no recibir objeto de comercio por props
  const comercioInfo = datosComercio || {
    nombre: 'OneRedRD SRL',
    rnc: '132-03376-2',
    direccion: 'Km 17 autopista Duarte, Los Alcarrizos, Santo Domingo Oeste, República Dominicana',
    telefono: '+1 (829) 974-7020',
    email: 'administracion@onered.com.do'
  };

  const handlePagar = () => {
    if (!aceptaPoliticas) return;
    onProcederPago(factura);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center p-4 py-10 font-sans">
      
      {/* Contenedor Principal */}
      <div className="w-full max-w-md space-y-4">
        
        {/* Encabezado Checkout */}
        <div className="text-center space-y-1 mb-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Checkout</h2>
          <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1">
            <ShieldCheck size={14} className="text-blue-600" />
            Pago seguro de factura con autenticación 3D Secure
          </p>
        </div>

        {/* 1. SECCIÓN: Resumen de pago */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Resumen de pago</h3>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Cliente</span>
              <span className="font-bold text-slate-900">{cliente?.nombre || 'Cliente'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">ID Cliente</span>
              <span className="font-bold text-slate-900">#{cliente?.id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Factura</span>
              <span className="font-bold text-slate-900">#{factura?.idFactura}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Emitida</span>
              <span className="font-semibold text-slate-700">{factura?.fechaEmision}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Vence</span>
              <span className="font-semibold text-slate-700">{factura?.fechaVencimiento}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
            <span className="text-xs font-bold text-slate-800">Total a pagar</span>
            <span className="text-xl font-black text-blue-600">
              RD$ {(factura?.monto || 0).toLocaleString('es-DO', { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-400">
            <span>Moneda</span>
            <span>Pesos dominicanos (RD$ / DOP$)</span>
          </div>
        </div>

        {/* 2. SECCIÓN: Datos del comercio */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-2 text-xs">
          <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
            DATOS DEL COMERCIO
          </h4>
          <p className="font-bold text-slate-800">{comercioInfo.nombre}</p>
          <p className="text-slate-500">RNC {comercioInfo.rnc}</p>
          <p className="text-slate-500 leading-relaxed">{comercioInfo.direccion}</p>
          <p className="text-slate-500">{comercioInfo.telefono}</p>
          <p className="text-slate-500">{comercioInfo.email}</p>
        </div>

        {/* 3. SECCIÓN: Medios de pago aceptados */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400">
            MEDIOS DE PAGO ACEPTADOS
          </h4>
          <div className="flex justify-center items-center gap-4 py-1">
            {/* Logos representativos Visa y Mastercard */}
            <span className="text-xs font-black italic tracking-tighter text-blue-800 border px-2 py-1 rounded border-slate-200">
              VISA
            </span>
            <span className="text-xs font-black text-slate-800 border px-2 py-1 rounded border-slate-200 flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block"></span>
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block -ml-1.5 opacity-80"></span>
              Mastercard
            </span>
          </div>
        </div>

        {/* 4. SECCIÓN: Políticas y Términos */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={aceptaPoliticas}
              onChange={(e) => setAceptaPoliticas(e.target.checked)}
              className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
            />
            <span className="text-[11px] text-slate-600 leading-relaxed">
              He leído y acepto las{' '}
              <a href="#politicas" className="text-blue-600 font-bold hover:underline">
                Políticas de Devolución, Cancelación y Reembolso
              </a>, la{' '}
              <a href="#privacidad" className="text-blue-600 font-bold hover:underline">
                Política de Privacidad
              </a> y la{' '}
              <a href="#seguridad" className="text-blue-600 font-bold hover:underline">
                Política de Seguridad para Datos de Tarjetas
              </a>. Entiendo que no se realizan devoluciones en efectivo y que los montos se procesan en Pesos dominicanos (RD$ / DOP$).
            </span>
          </label>
        </div>

        {/* Enlace opcional a modelo de recibo */}
        <p className="text-[10px] text-center text-slate-400">
          Comprobante de ejemplo para cumplimiento:{' '}
          <a href="#recibo" className="text-blue-600 underline font-medium">ver modelo de recibo</a>
        </p>

        {/* 5. SECCIÓN: Botón Principal Redirección a Azul */}
        <button
          onClick={handlePagar}
          disabled={!aceptaPoliticas || cargando}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
        >
          <CreditCard size={16} />
          {cargando ? 'Redirigiendo a Azul...' : 'Pagar con Azul'}
        </button>

        {/* Botón Volver */}
        <div className="text-center pt-1">
          <button
            onClick={onVolver}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition inline-flex items-center gap-1"
          >
            <ArrowLeft size={14} /> Volver a facturas
          </button>
        </div>

      </div>
    </div>
  );
}