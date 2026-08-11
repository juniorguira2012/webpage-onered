import { useState } from 'react'; // Añadido useState
import { Facebook, Instagram, Music2, Mail, Phone, X, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FooterColumn from './FooterColumn';

import PrivacyPolicyContent from '../legal/PrivacyPolicyContent';
import TermsOfServiceContent from '../legal/TermsOfServiceContent';
import ReturnsAndRefundsPolicyContent from '../legal/ReturnsAndRefundsPolicyContent';
import CardSecurityPolicyContent from '../legal/CardSecurityPolicyContent';
import DeliveryPolicyContent from '../legal/DeliveryPolicyContent';

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
    title: t('footer_privacidad', 'Política de Privacidad'),
    content: <PrivacyPolicyContent />
      });
    };

    // Función para abrir modal de Términos
   const openTerms = (e) => {
  e.preventDefault();
  setModal({
    isOpen: true,
    title: t('footer_terminos', 'Términos y Condiciones de Uso'),
    content: <TermsOfServiceContent
      openPrivacy={openPrivacy}
      openCardSecurity={openCardSecurity}
      openDeliveryPolicy={openDeliveryPolicy}
      openReturnsAndRefunds={openReturnsAndRefunds}
    />
  });
};

  // Función para abrir modal de Devoluciones y Reembolsos
 const openReturnsAndRefunds = (e) => {
  e.preventDefault();
  setModal({
    isOpen: true,
    title: t('footer_devoluciones', 'Política de Devoluciones y Reembolsos'),
    content: <ReturnsAndRefundsPolicyContent />
  });
};

  // Función para abrir modal de Seguridad de Tarjetas
  const openCardSecurity = (e) => {
  e.preventDefault();
  setModal({
    isOpen: true,
    title: t('footer_seguridad_tarjetas', 'Seguridad de Tarjetas'),
    content: <CardSecurityPolicyContent />
  });
};

  // Función para abrir modal de Política de Entrega
  const openDeliveryPolicy = (e) => {
    e.preventDefault();
    setModal({
      isOpen: true,
      title: t('footer_politica_entrega', 'Política de Entrega e Instalación'),
      content: <DeliveryPolicyContent />
    });
  };

  const serviceLinks = [
    { href: '#planes', label: t('footer_residencial', 'Internet Residencial') },
    { href: '#planes', label: t('footer_negocio', 'Planes de Negocio') },
    { href: '#planes', label: t('footer_dedicada', 'Internet Dedicado') },
    { href: '#cobertura', label: t('footer_consulta_cob', 'Consulta Cobertura') },
  ];

  const supportLinks = [
    { 
      onClick: () => window.$chatwoot?.toggle("open"), 
      label: t('footer_centro_ayuda', 'Centro de Ayuda') 
    },
    { 
      href: 'https://bot.oneredrd.com/aplicar-pago-shortcut', 
      label: t('footer_pagar', 'Pagar Factura') 
    },
    { 
      onClick: () => window.$chatwoot?.toggle("open"), 
      label: t('footer_reportar', 'Reportar Avería') 
    },
    { 
      onClick: () => window.$chatwoot?.toggle("open"), 
      label: t('footer_whatsapp', 'WhatsApp Directo') 
    },
  ];

  const legalLinks = [
    { onClick: openTerms, label: t('footer_terminos', 'Términos de Servicio') },
    { onClick: openPrivacy, label: t('footer_privacidad', 'Política de Privacidad') },
    { onClick: openReturnsAndRefunds, label: t('footer_devoluciones', 'Devoluciones y Reembolsos') },
    { onClick: openCardSecurity, label: t('footer_seguridad_tarjetas', 'Seguridad de Tarjetas') },
    { onClick: openDeliveryPolicy, label: t('footer_politica_entrega', 'Política de Entrega') },
  ];

return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">
          
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

          {/* Columnas Refactorizadas */}
          <FooterColumn title={t('footer_servicios', 'Servicios')} links={serviceLinks} />
          <FooterColumn title={t('footer_soporte', 'Soporte')} links={supportLinks} />
          <FooterColumn title={t('footer_legal', 'Legal')} links={legalLinks} />

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">{t('footer_contacto', 'Contacto')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-2 group">
                <span className="mt-1">📍</span>
                <a href="https://maps.app.goo.gl/WjjXhKTFPsJiVMX69" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors cursor-pointer">
                  <span>{t('footer_direccion', 'Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana')}</span>
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
              <li className="flex items-center gap-2">
                <FileText size={18} className="text-blue-600 shrink-0" />
                <span className="text-sm font-medium">
                  RNC: 131-93314-9
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BANNER REQUERIDO POR AZUL: PAGOS SEGUROS CON TARJETA Y LOGOS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 shadow-xs text-center space-y-4">
          <span className="text-xs font-black tracking-widest text-slate-400 uppercase block">
            {t('footer_pagos_seguros', 'Pagos Seguros con Tarjeta')}
          </span>
          
          <div className="flex flex-wrap items-center justify-center gap-8 py-1">
            {/* Fila superior: Marcas de Tarjetas */}
            <div className="flex items-center gap-6">
              <img src="/assets/images/visa.webp" alt="Visa Logo" className="h-10 md:h-10 object-contain" />
              <img src="/assets/images/mastercardlogo.webp" alt="Mastercard Logo" className="h-10 md:h-16 object-contain" />
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-200"></div>

            {/* Fila inferior / Autenticación: Logos 3D Secure */}
            <div className="flex items-center gap-6">
              {/* Logo Visa Secure */}
              <img src="/assets/images/visalogo.webp" alt="Visa Secure" className="h-12 md:h-13 object-contain" />

              {/* Logo Mastercard ID Check */}
              <img src="/assets/images/martercardcheck.webp" alt="Mastercard ID Check" className="h-12 md:h-11 object-contain" />
            </div>
          </div>

          <p className="text-[11px] text-slate-500 max-w-xl mx-auto font-medium">
            {t('footer_3ds_desc', 'Procesamiento en línea protegido bajo el estándar PCI-DSS y validación de identidad en tiempo real con (Verified by Visa y Mastercard ID Check).')}
          </p>
        </div>

        {/* Línea final y Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <p>© {currentYear} ONERED JWG532, S.R.L. Todos los derechos reservados.</p>
              {/* Mostramos la versión de la app si está disponible */}
              {import.meta.env.VITE_APP_VERSION && (
                <span className="bg-slate-200 text-slate-500 text-[9px] font-bold px-1.5 py-0.5 rounded-md normal-case">
                  v{import.meta.env.VITE_APP_VERSION}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <a href="#" onClick={openTerms} className="hover:text-blue-600 transition-colors cursor-pointer">{t('footer_terminos', 'Términos de Servicio')}</a>
            <span className="hidden md:block">|</span>
            <a href="#" onClick={openPrivacy} className="hover:text-blue-600 transition-colors cursor-pointer">{t('footer_privacidad', 'Política de Privacidad')}</a>
            <span className="hidden md:block">|</span>
            <a href="#" onClick={openReturnsAndRefunds} className="hover:text-blue-600 transition-colors cursor-pointer">{t('footer_devoluciones', 'Devoluciones y Reembolsos')}</a>
          </div>
        </div>
      </div>

      {/* Modal de Términos y Condiciones */}
      <div id="modal-legal" className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm ${modal.isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-content" tabIndex="-1">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
            <h3 id="modal-title" className="text-xl font-black text-slate-900 uppercase tracking-tighter">{modal.title}</h3>
            <button onClick={() => setModal({ ...modal, isOpen: false })} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500" aria-label={t('modal_close', 'Cerrar modal')}>
              <X size={24} /> 
            </button>
          </div> 
        </div>
      </div>

      {/* MODAL DE TEXTOS LEGALES */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div
            className="bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-content"
            tabIndex="-1"
          >
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <h3 id="modal-title" className="text-xl font-black text-slate-900 uppercase tracking-tighter">{modal.title}</h3>
              <button onClick={() => setModal({ ...modal, isOpen: false })} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500" aria-label={t('modal_close', 'Cerrar modal')}>
                <X size={24} />
              </button>
            </div>
            <div id="modal-content" className="p-8 overflow-y-auto text-slate-600 leading-relaxed text-sm font-medium normal-case tracking-normal">
              {modal.content}
            </div>
            <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button onClick={() => setModal({ ...modal, isOpen: false })} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all uppercase text-[10px] tracking-widest" aria-label={t('modal_close', 'Cerrar modal')}>
                {t('footer_cerrar', 'Cerrar')}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}