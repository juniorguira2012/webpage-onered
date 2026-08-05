import { useState, useEffect, useRef } from "react";
import { User, ShieldCheck, FileUp, Search, ExternalLink, Menu, CreditCard, X } from "lucide-react"; 
import logo from "/public/assets/logos/logo-onered.png";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "./LanguageSelector";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirección

export default function Navbar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    { name: t('nav_inicio', 'Inicio'), href: '#' },
    { name: t('nav_nosotros', 'Nosotros'), href: '#nosotros' },
    { name: t('nav_cobertura', 'Cobertura'), href: '#cobertura' },
    { name: t('nav_planes', 'Planes'), href: '#planes' },
    { name: t('nav_contacto', 'Contacto'), href: '#contacto' },
  ];

  const [menuPagoOpen, setMenuPagoOpen] = useState(false);
  const [menuCuentaOpen, setMenuCuentaOpen] = useState(false);
  const [menuMovilOpen, setMenuMovilOpen] = useState(false);

  // Estados para el Modal de Pago e Integración con Azul
  const [modalPagoOpen, setModalPagoOpen] = useState(false);
  const [identificacion, setIdentificacion] = useState('');
  const [monto, setMonto] = useState('');
  const [cargando, setCargando] = useState(false);

  const menuRef = useRef(null);
  const cuentaRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setMenuPagoOpen(false);
      if (cuentaRef.current && !cuentaRef.current.contains(event.target)) setMenuCuentaOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAbrirModalPago = (e) => {
    e.preventDefault();
    setMenuPagoOpen(false);
    setMenuMovilOpen(false);
    setModalPagoOpen(true);
  };

  // Función para procesar el envío e ir a la Pasarela de Azul
  const handleProcesarPagoAzul = async (e) => {
    e.preventDefault();

    if (!identificacion.trim() || !monto || parseFloat(monto) <= 0) {
      alert(t('val_campos_requeridos', 'Por favor completa la cédula/contrato y el monto a pagar.'));
      return;
    }

    setCargando(true);

    try {
      // 1. Solicitar los datos firmados a tu servidor
      const res = await fetch('/api/pagos/crear-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monto: parseFloat(monto),
          clienteId: identificacion,
          planNombre: "Pago Factura OneRed"
        })
      });

      const data = await res.json();

      if (!data.exito) {
        alert(data.mensaje || 'Error preparando la pasarela de pago.');
        setCargando(false);
        return;
      }

      // 2. Crear un formulario HTML dinámico para hacer POST hacia la URL de Azul
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.targetUrl;

      // Inyectar inputs hidden con los valores devueltos por el backend
      Object.keys(data.formData).forEach((key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = data.formData[key];
        form.appendChild(input);
      });

      // 3. Adjuntar al body y hacer submit directo
      document.body.appendChild(form);
      form.submit();

    } catch (error) {
      console.error("Error al redirigir a Azul:", error);
      alert('Ocurrió un error al conectar con la pasarela de Azul.');
      setCargando(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 h-16 md:h-20 transition-all">
      <div className="flex justify-between items-center px-4 md:px-12 h-full max-w-[1400px] mx-auto"> 
        
        {/* Lado Izquierdo: Menú + Logo */}
        <div className="flex items-center gap-1 md:gap-2 relative h-full">
          <button 
            onClick={() => setMenuMovilOpen(!menuMovilOpen)}
            className="lg:hidden p-1.5 text-slate-600 hover:text-blue-600 transition z-10"
          >
            {menuMovilOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <a href="#" className="relative block group h-full flex items-center">
            <img
              src={logo} 
              alt="OneRedRD Logo" 
              className="h-16 md:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
              style={{ maxWidth: 'none' }} 
            />
          </a>
        </div>
        
        {/* Menú Central (Desktop) */}
        <div className="hidden lg:flex gap-8 font-bold text-xs uppercase tracking-widest text-slate-500">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-blue-600 transition">
              {item.name}
            </a>
          ))}
          <a href="https://chatone.oneredrd.com/hc/onered/es_DO" rel="noreferrer" className="hover:text-blue-600 transition flex items-center gap-1">
            {t('nav_novedades', 'Novedades')} <ExternalLink size={12} className="opacity-50" />
          </a>
        </div>

        {/* Lado Derecho */}
        <div className="flex items-center gap-1 md:gap-4">
          <LanguageSelector />

          {/* Botón Mi Cuenta */}
          <div className="relative" ref={cuentaRef}>
            <button 
              onClick={() => setMenuCuentaOpen(!menuCuentaOpen)}
              className="flex items-center gap-1 text-xs md:text-sm font-bold text-slate-700 hover:text-blue-600 transition p-1.5"
            >
              <div className="w-7 h-7 md:w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center transition-colors">
                 <User size={14} className="md:size-[16px]" />
              </div>
              <span className="hidden sm:inline">{t('nav_mi_cuenta', 'Mi Cuenta')}</span>
            </button>
            
            <div className={`absolute right-0 mt-2 w-48 transition-all duration-300 origin-top-right ${menuCuentaOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2">
                <a href="https://mikrowisp.oneredrd.com/cliente/login" className="flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-slate-600 hover:bg-blue-50 rounded-xl transition">
                  <User size={18}/>
                  {t('nav_portal_clientes', 'Portal Clientes')}
                </a>
                <a href="https://mikrowisp.oneredrd.com/admin/login" className="flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-slate-600 hover:bg-blue-50 rounded-xl transition">
                  <ShieldCheck size={18}/>
                  {t('nav_acceso_empleados', 'Acceso Empleados')}
                </a>
              </div>
            </div>
          </div>

          {/* Botón Pagar Factura */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setMenuPagoOpen(!menuPagoOpen)}
              className="flex items-center gap-1 text-xs md:text-sm font-bold text-slate-700 hover:text-blue-600 transition p-1.5"
            >
              <CreditCard size={14} className="md:size-[16px]" />
              {t('nav_pagar_ahora', 'PAGAR')}
            </button>
            
            <div className={`absolute right-0 mt-2 w-52 transition-all duration-300 origin-top-right ${menuPagoOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2">
                <a href="https://bot.oneredrd.com/aplicar-pago-shortcut" className="flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-slate-600 hover:bg-blue-50 rounded-xl transition">
                  <FileUp size={18}/>
                  {t('nav_aplicar_comprobantes', 'Aplicar Comprobantes')}
                </a>
                <a href="https://bot.oneredrd.com/consultafactura-shortcut" className="flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-slate-600 hover:bg-blue-50 rounded-xl transition">
                  <Search size={18}/>
                  {t('nav_verificar_factura', 'Verificar Factura')}
                </a>
                
                {/* Opción Pagar Ahora -> Abre Modal de Azul */}
                <button 
                  onClick={() => {
                    setMenuPagoOpen(false);
                    navigate('/consulta-factura'); // Redirige a la ruta
                  }}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-slate-600 hover:bg-blue-50 rounded-xl transition"
                >
                  <CreditCard size={18}/>
                  {t('nav_pagar_ahora', 'Pagar Con Tarjeta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      <div className={`lg:hidden absolute top-16 w-full bg-white border-b shadow-xl transition-all duration-300 ease-in-out ${menuMovilOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col p-6 gap-4 font-bold text-sm uppercase tracking-widest text-slate-600">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setMenuMovilOpen(false)} 
              className="py-2 border-b border-slate-50 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
          <a href="https://chatone.oneredrd.com/hc/onered/es_DO" className="py-2 flex items-center justify-between hover:text-blue-600">
            {t('nav_novedades', 'Novedades')} <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Modal que prepara la Redirección a la Pasarela de Pago Azul */}
      {modalPagoOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-sm w-full p-6 relative animate-in fade-in zoom-in-95 duration-200">
            
            <button 
              onClick={() => setModalPagoOpen(false)}
              disabled={cargando}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 transition"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-3">
                <CreditCard size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">{t('modal_pago_titulo', 'Pasarela de Pago Azul')}</h3>
              <p className="text-xs text-slate-500 mt-1">
                {t('modal_pago_desc', 'Ingresa tus datos para continuar al checkout seguro de Azul.')}
              </p>
            </div>

            <form onSubmit={handleProcesarPagoAzul} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                  {t('modal_cedula_label', 'Cédula / RNC / Contrato')}
                </label>
                <input 
                  type="text" 
                  required
                  value={identificacion}
                  onChange={(e) => setIdentificacion(e.target.value)}
                  placeholder="Ej: 00100000000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                  {t('modal_monto_label', 'Monto a Pagar (DOP)')}
                </label>
                <input 
                  type="number" 
                  required
                  step="0.01"
                  min="1"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  placeholder="Ej: 1500.00"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                />
              </div>

              <button 
                type="submit"
                disabled={cargando}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                {cargando ? t('modal_btn_cargando', 'Conectando con Azul...') : t('modal_btn_continuar', 'Ir a Pagar en Azul')}
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}