import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // 1. Estilos: WhatsApp siempre visible, sin X, sin rotación
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

    // 2. Carga del SDK
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

    // 3. Lógica de interruptor (Toggle) en el icono
    const handleBubbleClick = (event) => {
      if (window.$chatwoot && window.$chatwoot.isOpen()) {
        const widgetBubble = document.querySelector('.woot-widget-bubble');
        
        // Si el clic es en el icono mientras está abierto, forzamos el cierre
        if (widgetBubble && widgetBubble.contains(event.target)) {
          event.stopImmediatePropagation();
          event.preventDefault();
          window.$chatwoot.toggle("close");
        }
      }
    };

    document.addEventListener('mousedown', handleBubbleClick, true);
    
    return () => {
      document.removeEventListener('mousedown', handleBubbleClick, true);
    };
  }, []);

  return null;
};

export default ChatWidget;