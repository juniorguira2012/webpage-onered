import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ArrowLeft, CreditCard, FileText, CheckCircle2 } from 'lucide-react';
import logo from '/assets/logos/logo-onered.png';
import CheckoutAzul from './CheckoutAzul'; // 1. IMPORTAMOS EL COMPONENTE CHECKOUT

export default function ConsultaFactura() {
  const navigate = useNavigate();

  const [tipoBusqueda, setTipoBusqueda] = useState('id'); // 'id' o 'cedula'
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [cargando, setCargando] = useState(false);
  
  // Estados de datos
  const [datosCliente, setDatosCliente] = useState(null);
  const [facturasPendientes, setFacturasPendientes] = useState([]);
  const [facturasPagadas, setFacturasPagadas] = useState([]);
  const [tabFacturas, setTabFacturas] = useState('pendientes');

  // 2. ESTADO PARA LA FACTURA SELECCIONADA
  const [facturaSeleccionada, setFacturaSeleccionada] = useState(null);

  // Consultar cliente y facturas
  const handleConsultar = async (e) => {
    e.preventDefault();
    if (!valorBusqueda.trim()) return;

    setCargando(true);
    setDatosCliente(null);
    setFacturaSeleccionada(null);

    try {
      const res = await fetch('/api/facturas/consultar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: tipoBusqueda, valor: valorBusqueda.trim() })
      });
      
      const data = await res.json();

      if (data.exito) {
        setDatosCliente(data.cliente);
        setFacturasPendientes(data.facturasPendientes || []);
        setFacturasPagadas(data.facturasPagadas || []);
      } else {
        alert(data.mensaje || 'No se encontraron registros con estos datos.');
      }
    } catch (error) {
      console.error('Error al consultar cliente:', error);
      alert('Ocurrió un error al consultar el sistema de facturación.');
    } finally {
      setCargando(false);
    }
  };

  // 3. ENVIAR FORMULARIO POST A LA PASARELA DE AZUL (Ejecutado desde CheckoutAzul)
  const handleProcederPagoAzul = async (factura) => {
    if (!factura || !datosCliente) return;

    setCargando(true);
    try {
      const res = await fetch('/api/pagos/crear-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monto: factura.monto,
          clienteId: datosCliente.id,
          planNombre: factura.concepto || `Pago Factura #${factura.idFactura}`
        })
      });

      const data = await res.json();

      if (!data.exito) {
        alert(data.mensaje || 'Error al conectar con Azul.');
        setCargando(false);
        return;
      }

      // Formulario dinámico POST hacia Azul
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.targetUrl;

      Object.keys(data.formData).forEach((key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = data.formData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error('Error al redirigir a Azul:', error);
      alert('Error de conexión con la pasarela de pago.');
      setCargando(false);
    }
  };

  // 4. SI HAY UNA FACTURA SELECCIONADA, MOSTRAR EL COMPONENTE CHECKOUTAZUL
  if (facturaSeleccionada) {
    return (
      <CheckoutAzul
        factura={facturaSeleccionada}
        cliente={datosCliente}
        cargando={cargando}
        onVolver={() => setFacturaSeleccionada(null)}
        onProcederPago={handleProcederPagoAzul}
      />
    );
  }

  // VISTA HABITUAL DE CONSULTA Y LISTADO DE FACTURAS
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-between p-4 pb-8 pt-24 sm:pt-28">
      
      {/* Botón Volver */}
      <button 
        onClick={() => datosCliente ? setDatosCliente(null) : navigate('/')}
        className="mb-3 flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/80 shadow-sm transition-all hover:shadow-md"
      >
        <ArrowLeft size={16} /> {datosCliente ? 'Volver a buscar' : 'Volver al inicio'}
      </button>

      {/* Tarjeta Principal */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 text-center space-y-6">
        
        <div className="flex items-center justify-center gap-4">
          <img src={logo} alt="OneRedRD" className="w-full h-auto object-contain max-w-[180px] mx-auto" />
        </div>

        {!datosCliente ? (
          /* FORMULARIO DE BÚSQUEDA */
          <>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Consultar Facturas</h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Consulta con tu ID de cliente o con la cédula que aparece en tu factura.
              </p>
            </div>

            <form onSubmit={handleConsultar} className="space-y-5 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Buscar por</label>
                <div className="bg-slate-100 p-1 rounded-xl flex gap-1">
                  <button
                    type="button"
                    onClick={() => { setTipoBusqueda('id'); setValorBusqueda(''); }}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                      tipoBusqueda === 'id' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    ID de cliente
                  </button>
                  <button
                    type="button"
                    onClick={() => { setTipoBusqueda('cedula'); setValorBusqueda(''); }}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                      tipoBusqueda === 'cedula' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Cédula
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {tipoBusqueda === 'id' ? 'ID de cliente' : 'Cédula / RNC'}
                </label>
                <input
                  type="text"
                  required
                  value={valorBusqueda}
                  onChange={(e) => setValorBusqueda(e.target.value)}
                  placeholder={tipoBusqueda === 'id' ? 'Ej: 250' : 'Ej: 00100000000'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={cargando}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {cargando ? 'Buscando...' : <><FileText size={16} /> Consultar mis facturas</>}
              </button>
            </form>
          </>
        ) : (
          /* RESULTADO PANEL CLIENTE */
          <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300 text-left">
            <div className="space-y-0.5">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">{datosCliente.nombre}</h3>
              <p className="text-xs font-medium text-slate-500">
                Cliente #{datosCliente.id} · <span className="uppercase text-emerald-600 font-bold">{datosCliente.estado}</span> · {datosCliente.cedula}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 text-center">
                <span className="block text-2xl font-black text-slate-800">{datosCliente.cantSinPagar}</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Sin pagar</span>
              </div>
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3.5 text-center">
                <span className="block text-xl font-black text-blue-700">
                  RD$ {datosCliente.totalPendiente.toLocaleString('es-DO', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-[11px] font-bold text-blue-600/90 uppercase tracking-wider">Total pendiente</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">Facturas</span>
              <div className="bg-slate-100 p-1 rounded-xl flex gap-1">
                <button
                  type="button"
                  onClick={() => setTabFacturas('pendientes')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition ${
                    tabFacturas === 'pendientes' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pendientes
                </button>
                <button
                  type="button"
                  onClick={() => setTabFacturas('pagadas')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition ${
                    tabFacturas === 'pagadas' ? 'bg-white text-slate-800 shadow-sm border border-slate-200/50' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pagadas
                </button>
              </div>
            </div>

            {/* PESTAÑA FACTURAS PENDIENTES */}
            {tabFacturas === 'pendientes' && (
              <div className="space-y-3">
                {facturasPendientes.length === 0 ? (
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center text-xs text-slate-500 font-medium">
                    No tienes facturas pendientes de pago.
                  </div>
                ) : (
                  facturasPendientes.map((fac) => (
                    <div key={fac.idFactura} className="border border-slate-200/80 rounded-2xl p-4 space-y-3 bg-white shadow-sm hover:border-blue-200 transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">Factura #{fac.idFactura}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Emitida: {fac.fechaEmision} · Vence: {fac.fechaVencimiento}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wider border border-blue-100">
                          {fac.estado}
                        </span>
                      </div>

                      <div className="text-xl font-black text-slate-900">
                        RD$ {fac.monto.toLocaleString('es-DO', { minimumFractionDigits: 2 })}
                      </div>

                      {/* 5. SELECCIONA LA FACTURA PARA PASAR AL CHECKOUT */}
                      <button
                        onClick={() => setFacturaSeleccionada(fac)}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-md shadow-blue-500/10 flex items-center justify-center gap-2"
                      >
                        <CreditCard size={15} /> Pagar con Azul
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* PESTAÑA FACTURAS PAGADAS */}
            {tabFacturas === 'pagadas' && (
              <div className="space-y-3">
                {facturasPagadas.length === 0 ? (
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center text-xs text-slate-500 font-medium">
                    No hay registro de facturas pagadas en el sistema.
                  </div>
                ) : (
                  facturasPagadas.map((fac) => (
                    <div key={fac.idFactura} className="border border-slate-100 bg-slate-50/60 rounded-2xl p-4 space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">Factura #{fac.idFactura}</h4>
                          <p className="text-[11px] text-slate-500">Emitida: {fac.fechaEmision}</p>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider border border-emerald-100 flex items-center gap-1">
                          <CheckCircle2 size={12} /> Pagada
                        </span>
                      </div>

                      <div className="text-base font-bold text-slate-700">
                        RD$ {fac.monto.toLocaleString('es-DO', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

          </div>
        )}

      </div>

      <div className="text-center mt-6 space-y-4">
        <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
          Powered by OneRedRD
        </p>
      </div>

    </div>
  );
}