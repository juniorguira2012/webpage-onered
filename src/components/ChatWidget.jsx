import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ChatWidget = () => {
  const { i18n, t } = useTranslation();

  // 1. Efecto para la carga inicial y estilos
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .woot-widget-bubble {
        background-color: #25D366 !important;
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg') !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: 30px !important;
        border: none !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        z-index: 9999 !important;
      }
      .woot-widget-bubble.woot--close {
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg') !important;
        transform: rotate(0deg) !important;
      }
      .woot-widget-bubble svg { display: none !important; }
      .woot-widget-holder .woot-close-button { display: none !important; }
      
      /* Animación para el letrero */
      @keyframes slide-in-chat {
        0% { opacity: 0; transform: translateX(20px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      .chat-label-animation {
        animation: slide-in-chat 0.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    (function(d, t) {
      var BASE_URL = "https://chatone.oneredrd.com";
      var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js"; g.defer = true; g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function() {
        window.chatwootSDK.run({
          websiteToken: 'coVW3GVVA4bpCSXrfLwGrJSo',
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");

    const handleBubbleClick = (event) => {
      if (window.$chatwoot && window.$chatwoot.isOpen()) {
        const widgetBubble = document.querySelector('.woot-widget-bubble');
        if (widgetBubble && widgetBubble.contains(event.target)) {
          event.stopImmediatePropagation();
          event.preventDefault();
          window.$chatwoot.toggle("close");
        }
      }
    };

    document.addEventListener('mousedown', handleBubbleClick, true);
    return () => document.removeEventListener('mousedown', handleBubbleClick, true);
  }, []);

  // 2. Efecto para cambiar el idioma del chat
  useEffect(() => {
    if (window.$chatwoot) {
      const lang = i18n.language.split('-')[0];
      window.$chatwoot.setLocale(lang);
    }
  }, [i18n.language]);

  return (
    <div className="fixed bottom-[22px] right-[90px] z-[9998] hidden md:flex items-center">
      {/* El letrero ahora está a 100px de la derecha, alejándose más del botón */}
      <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl shadow-xl chat-label-animation relative">
        <p className="text-[11px] font-black uppercase tracking-tighter text-slate-700 whitespace-nowrap">
          {t('chat_agente', 'Hablar con un agente')}
        </p>
        
        {/* Triangulito indicador */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent drop-shadow-sm"></div>
      </div>
      
      {/* Punto verde de 'Online' - Lo movemos un poco para que no choque */}
      <span className="absolute -top-1 right-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-white"></span>
      </span>
    </div>
  );
};

export default ChatWidget;