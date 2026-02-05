import { useEffect } from "react";

const ChatWidget = () => {
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
      }
      .woot-widget-bubble.woot--close {
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg') !important;
        transform: rotate(0deg) !important;
      }
      .woot-widget-bubble svg { display: none !important; }
      .woot-widget-holder .woot-close-button { display: none !important; }
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

    const handleInteraction = (event) => {
      // Solo actuar si el SDK existe y el chat está abierto
      if (window.$chatwoot && typeof window.$chatwoot.isOpen === 'function' && window.$chatwoot.isOpen()) {
        const widgetHolder = document.querySelector('.woot-widget-holder');
        const widgetBubble = document.querySelector('.woot-widget-bubble');

        // 1. Detectar si el clic fue en la BURBUJA
        if (widgetBubble && widgetBubble.contains(event.target)) {
          // Bloqueamos el evento original de Chatwoot para mandar nosotros el cierre
          event.stopImmediatePropagation();
          event.preventDefault();
          window.$chatwoot.toggle("close");
          return; // Salimos para no ejecutar la lógica de "clic fuera"
        }

        // 2. Detectar si el clic fue FUERA del panel de mensajes (en cualquier parte de la web)
        if (widgetHolder && !widgetHolder.contains(event.target)) {
          // No bloqueamos aquí para que la web siga siendo interactiva, solo cerramos el chat
          window.$chatwoot.toggle("close");
        }
      }
    };

    // Usamos 'mousedown' en fase de captura (true) para interceptar el clic antes que el SDK
    document.addEventListener('mousedown', handleInteraction, true);
    
    return () => {
      document.removeEventListener('mousedown', handleInteraction, true);
    };
  }, []);

  return null;
};

export default ChatWidget;