import { useState } from 'react'; // Añadido useState
import { Facebook, Instagram, Linkedin, Music2, Mail, Phone, X } from 'lucide-react'; // Añadido X
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Estado para controlar el modal
  const [modal, setModal] = useState({ isOpen: false, title: "", content: "" });

  // Función para abrir modal de Privacidad
  const openPrivacy = (e) => {
    e.preventDefault();
    setModal({
      isOpen: true,
      title: t('footer_privacidad', 'Privacidad'),
      content: t(
        'footer_privacidad_text',
        'En ONEREDRD, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad describe cómo recopilamos, usamos y protegemos tu información cuando visitas nuestro sitio web o utilizas nuestros servicios. Recopilamos información como tu nombre, correo electrónico, número de teléfono y dirección para brindarte un servicio personalizado y mejorar tu experiencia. Utilizamos esta información para procesar tus solicitudes, responder a tus consultas y enviarte actualizaciones relevantes. No compartimos tu información con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos. Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados. Al utilizar nuestro sitio web, aceptas nuestra política de privacidad y el uso de tus datos según lo descrito aquí.'
      )
    });
  };

    // Función para abrir modal de Términos
    const openTerms = (e) => {
    e.preventDefault();
    setModal({
      isOpen: true,
      title: t('footer_terminos', 'Términos y Condiciones de Uso'),
      content: (
        <div className="space-y-4 text-justify">
          <p className="font-bold border-b pb-2 text-blue-600">CONDICIONES DE USO DE NUESTROS SERVICIOS</p>
          
          <ol className="list-decimal ml-5 space-y-3">
            <li>El usuario se compromete a pagar mes tras mes el servicio solicitado en fecha acordada por él mismo.</li>
            <li>El servicio tiene un costo de instalación que <strong>NO ES REEMBOLSABLE</strong> a la hora de retirarlo, tampoco avala el pago de ninguno de los equipos o materiales suministrados en la instalación, <strong>TAMPOCO ES UN PAGO DE MENSUALIDAD ADELANTADO.</strong></li>
            <li>Los equipos suministrados al momento de la instalación <strong>NO PERTENECEN AL CLIENTE</strong>, y este es responsable a daños, deterioro o pérdida de los mismos, dicho equipo tiene un valor de <strong>RD$ 4,000 PESOS DOMINICANOS.</strong></li>
            <li>Su fecha de pago siempre será la misma que usted eligió al momento de instalarle, los pagos realizados fuera de fecha no modifican la que haya escogido al momento de la instalación.</li>
            <li>A partir de su fecha de facturación el cliente tiene 8 días calendario para realizar el pago, luego de esos días el servicio se suspende y el usuario debe pagar un cargo por reconexión.</li>
            <li>Los pagos parciales no evitan suspensión del servicio, ni garantizan reconexión del mismo.</li>
          </ol>

          <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400 text-xs">
            <p className="mb-2"><strong>IMPORTANTE:</strong> El usuario es responsable de mantener su servicio activo, aun si el servicio se suspende por pago el sistema continuará facturando cargos adicionales.</p>
            <p><strong>IMPORTANTE:</strong> En caso de prescindir del servicio, debe tener su factura al día, devolver el equipo y solicitar su carta de devolución en oficina. De lo contrario, <strong>ONERED</strong> se reserva el derecho de reportar al buró crediticio la factura pendiente y el costo del equipo.</p>
          </div>

          <ol start="7" className="list-decimal ml-5 space-y-3">
            <li>El primer pago es prorrateado (días consumidos desde la instalación hasta el día seleccionado para pagar).</li>
            <li>Todos los equipos inalámbricos tienen un límite de alcance. No nos comprometemos a abarcar con señal WIFI todos los lugares de la casa o negocio; para ello se requiere un <strong>Repetidor WiFi</strong> (costo adicional).</li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-xl text-xs">
            <p><strong>NOTA SOBRE COBERTURA:</strong> No tenemos control sobre la cantidad de cobertura disponible dentro de su casa o negocio debido a limitaciones naturales de los equipos (paredes, interferencias). Colocamos el router en puntos intermedios para mitigar esto.</p>
          </div>

          <ol start="9" className="list-decimal ml-5 space-y-3">
            <li>El usuario es responsable de administrar la conexión y el cambio de contraseña. Los cambios de contraseña realizados por técnicos después de la instalación tienen un costo adicional. <strong>Asistencia técnica llega hasta el router WI-FI; NO manipulamos dispositivos internos (celulares, computadoras, TVs).</strong></li>
            <li><strong>Está prohibido comercializar, ceder, traspasar o revender el servicio</strong> sin autorización previa. El incumplimiento conlleva la suspensión o cancelación sin previo aviso.</li>
          </ol>
        </div>
      )
    });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca y Eslogan */}
          <div className="space-y-4">
            <div className="text-2xl font-black tracking-tighter text-blue-600">
              ONERED<span className="text-slate-800"></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('footer_eslogan', 'Llevando la mejor conectividad a cada rincón. Fibra óptica real para hogares y empresas dominicanas.')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Oneredrd-100080066528660/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer">
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a href="https://www.instagram.com/oneredrd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-[#E4405F] hover:border-[#E4405F] hover:shadow-lg hover:shadow-pink-100 transition-all duration-300 cursor-pointer">
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a href="https://www.tiktok.com/@oneredrd1?_r=1&_t=ZS-93S2Y9lyMHk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-black group transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-slate-200">
                <Music2 size={20} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">{t('footer_servicios', 'Servicios')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><a href="#planes" className="hover:text-blue-600 transition">{t('footer_residencial', 'Internet Residencial')}</a></li>
              <li><a href="#planes" className="hover:text-blue-600 transition">{t('footer_negocio', 'Planes de Negocio')}</a></li>
              <li><a href="#planes" className="hover:text-blue-600 transition">{t('footer_dedicada', 'Internet Dedicado')}</a></li>
              <li><a href="#cobertura" className="hover:text-blue-600 transition">{t('footer_consulta_cob', 'Consulta Cobertura')}</a></li>
            </ul>
          </div>

          {/* Columna 3: Soporte */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">{t('footer_soporte', 'Soporte')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li>
                <button onClick={() => window.$chatwoot?.toggle("open")} className="hover:text-blue-600 transition cursor-pointer font-medium bg-transparent border-none p-0 text-left">
                  {t('footer_centro_ayuda', 'Centro de Ayuda')}
                </button>
              </li>
              <li><a href="https://bot.oneredrd.com/aplicar-pago-shortcut" className="hover:text-blue-600 transition">{t('footer_pagar', 'Pagar Factura')}</a></li>
              <li>
                <button onClick={() => window.$chatwoot?.toggle("open")} className="hover:text-blue-600 transition cursor-pointer font-medium bg-transparent border-none p-0 text-left">
                  {t('footer_reportar', 'Reportar Avería')}
                </button>
              </li>
              <li>
                <button onClick={() => window.$chatwoot?.toggle("open")} className="hover:text-blue-600 transition cursor-pointer font-medium bg-transparent border-none p-0 text-left">
                  {t('footer_whatsapp', 'WhatsApp Directo')}
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">{t('footer_contacto', 'Contacto')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-2 group">
                <span className="mt-1">📍</span>
                <a href="https://maps.app.goo.gl/WjjXhKTFPsJiVMX69" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors cursor-pointer">
                  <span>{t('footer_direccion', 'Los Alcarrizos, Calle Lebrón #60, Santo Domingo')}</span>
                </a>
              </li>
              <div className="flex flex-row items-center gap-3 text-sm font-bold tracking-tight">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="tel:+18094225424" className="hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">(809) 422-5424</a>
                  <span className="text-slate-400 font-normal">/</span> 
                  <a href="tel:+18094474575" className="hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">(809) 447-4575</a>
                </div>
              </div>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href="mailto:info@oneredrd.com" className="hover:text-blue-600 transition-colors cursor-pointer text-sm font-medium">
                  <span>info@oneredrd.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea final y Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
          <p>© {currentYear} ONEREDRD - {t('footer_rights', 'Todos los derechos reservados.')}</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <button onClick={openPrivacy} className="hover:text-slate-600 transition-colors bg-transparent border-none p-0 font-bold uppercase tracking-widest cursor-pointer">
              {t('footer_privacidad', 'Privacidad')}
            </button>
            <button onClick={openTerms} className="hover:text-slate-600 transition-colors bg-transparent border-none p-0 font-bold uppercase tracking-widest cursor-pointer">
              {t('footer_terminos', 'Términos')}
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DE TEXTOS LEGALES */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">{modal.title}</h3>
              <button onClick={() => setModal({ ...modal, isOpen: false })} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed text-sm font-medium normal-case tracking-normal">
              {modal.content}
            </div>
            <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button onClick={() => setModal({ ...modal, isOpen: false })} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all uppercase text-[10px] tracking-widest">
                {t('footer_cerrar', 'Cerrar')}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}