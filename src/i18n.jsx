import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        
      es: {
        translation: {
        //--Nav-Esponol
        //   "nav_inicio": "Inicio",
        //   "nav_nosotros": "Nosotros",
        //   "nav_cobertura":"Cobertura",
        //   "nav_planes": "Planes",
        //   "nav_contacto": "Contacto",
        //   "nav_novedades": "Novedades",
        //   "nav_mi_cuenta": "Mi Cuenta",
          
        // //--clientes felices
        //   "nav_sin_limites": "sin límites.",
        //   "desc": "La fibra óptica más estable de RD llegó para quedarse. Conecta tu hogar hoy mismo con",
        //   "btn_solicitar": "Solicitar Ahora",
        //   "clientes": "+1,200 clientes felices en",
        //   "real_time": "Navega En Tiempo Real",
        //   "lugar": "Los Alcarrizos",
        //   // --- Ofertas ---
        //   "promo_texto": "Aumenta de 6 a 30 Mbps por solo",
        //   "promo_extra": "adicionales",
        //   "mes_0": "Enero Día de los Reyes Magos🤴🏽🚂:",
        //   "mes_1": "Febrero Mes de la Patria 🇩🇴:",
        //   "mes_2": "Batalla del 30 de Marzo ⚔️:",
        //   "mes_3": "Revolución del 24 de Abril ⚔️:",
        //   "mes_4": "Mayo Día de las Madres 🤰:",
        //   "mes_5": "Junio Día del Maestro 👨🏽‍🏫:",
        //   "mes_6": "Julio Día del Padre 👨🏽:",
        //   "mes_7": "Agosto Día de la Restauración:🗣️",
        //   "mes_8": "Septiembre Mes de la Biblia 📚:",
        //   "mes_9": "Octubre Día de la raza 🧑‍🧑‍🧒‍🧒:",
        //   "mes_10": "Noviembre Día de la Constitución:",
        //   "mes_11": "Feliz Navidad 🎄:"
        }
      },
      en: {
        translation: {
            //Navbar
          "nav_inicio": "Home",
          "nav_nosotros": "About Us",
          "nav_cobertura":"Coverage",
          "nav_planes": "Plans",
          "nav_contacto": "Contact",
          "nav_novedades": "News",

          //-My Account
            "nav_mi_cuenta": "MY ACCOUNT",
            "nav_portal_clientes": "Client Portal",
            "nav_acceso_empleados": "Employee Access",
            "nav_pagar": "PAYMENT",
            "nav_pagar_con_tarjeta": "CARD PAYMENT",
            "nav_factura": "Bill",
            "nav_aplicar_comprobantes": "Submit Receipt",
            "nav_verificar_factura": "Check Invoice",

            // --- Ofertas ---
            "promo_texto": "Upgrade from 6 to 30 Mbps for only",
            "promo_extra": "extra",
            "mes_0": "January Three Kings Day🤴🏽🚂:",
            "mes_1": "February Month of the Homeland 🇩🇴:",
            "mes_2": "Battle of March 30th ⚔️:",
            "mes_3": "April 24th Revolution ⚔️:",
            "mes_4": "May Mother's Day 🤰:",
            "mes_5": "June Teacher's Day 👨🏽‍🏫:",
            "mes_6": "July Father's Day 👨🏽:",
            "mes_7": "August Restoration Day:🗣️",
            "mes_8": "September Month of the Bible 📚:",
            "mes_9": "October Columbus Day 🧑‍🧑‍🧒‍🧒:",
            "mes_10": "November Constitution Day:",
            "mes_11": "Merry Christmas 🎄:",

            //--Hero en ingles
            "nav_navega": "Browse",
            "nav_sin_limites": "without limits",
            "desc": "The most stable fiber optic in DR is here to stay. Connect your home today with",
            "btn_solicitar": "Request Now",
            "clientes": "+1,200 happy customers in",
            "real_time": "Browse In Real Time",
            "lugar": "Los Alcarrizos",

            //--Feature
            "feat_fibra_title": "100% Fiber Optic",
            "feat_fibra_desc": "FTTH technology that guarantees your contracted speed.",
            "feat_seguridad_title": "Secure Connection",
            "feat_seguridad_desc": "Browse protected with our next-generation fiber optic network.",
            "feat_contrato_title": "No Contracts",
            "feat_contrato_desc": "We believe in freedom. No hidden penalties.",
            "feat_soporte_title": "Specialized Support",
            "feat_soporte_desc": "Effective Customer Service ready to assist you.",

            //--Nosotros
            "nosotros_quienes_somos": "Who are we?",
            "nosotros_p1": "is a telecommunications company dedicated to providing Internet access services to meet the needs of our customers, bringing connectivity through fiber optics and radio links of the highest market quality.",
            "nosotros_p2_1": "We are a company that works in a family environment, ensuring that our users and collaborators feel part of the family",
            "nosotros_mision_titulo": "Mission",
            "nosotros_mision_desc": "To provide innovative technological solutions focused on meeting our customers' needs through a specialized human team and the use of high-quality equipment that guarantees stability and trust at the highest standards.",
            "nosotros_vision_titulo": "Vision",
            "nosotros_vision_desc": "To be the highest quality and most stable internet service provider, ensuring trust for our network users so that our services fulfill all customer expectations.",
            "nosotros_valores_titulo": "Values",
            "nosotros_valores_desc": "Integrity (we act according to the law), Innovation (technological vanguard), Flexibility (adaptation to needs), and Commitment to our customers and collaborators.",

            //--Cobertura
            "cob_red": "Our Network",
            "cob_titulo": "Coverage",
            "cob_desc": "Click on your sector to view the fiber optic availability map.",
            "cob_mapa_de": "Map of",
            "cob_cargando": "Checking availability...",
            "cob_ayuda": "Don't see your sector? Contact us! We are expanding our network every day.",

            //--Planes
            "planes_titulo_1": "Our",
            "planes_titulo_2": "Internet Plans",
            "planes_subtitle": "The widest variety of speeds so you only pay for what you need, with 100% Fiber technology.",
            "plan_basico": "Basic Plan",
            "plan_express": "Express Plan",
            "plan_esencial": "Essential Plan",
            "plan_avanzado": "Advanced Plan",
            "plan_business": "Business Plan",
            "plan_ultra": "Ultra Plan",
            "planes_footer": "Guaranteed Connectivity • OneRed",

            //--PlanCard
            "plan_download": "Download",
            "plan_upload": "Upload",
            "plan_mes": "mo",
            "plan_boton": "Select Plan",

            //--Contacto
            "cont_titulo_1": "Have questions?",
            "cont_titulo_2": "Chat with us!",
            "cont_boton": "Talk to an Agent",
            "cont_estado": "Live Customer Support",

            //Map Locacion
            "map_visitanos": "Visit our main office",
            "map_horario_titulo": "Business hours:",
            "map_horario_semana": "Monday to Friday: 9:00 AM – 6:00 PM",
            "map_horario_sabado": "Saturdays: 9:00 AM – 1:00 PM",
            "map_como_llegar": "How to get there",
            
            //Chat Widget
            "chat_agente": "Talk to an agent",

            //--Footer
            "footer_eslogan": "Bringing the best connectivity to every corner. Real fiber optics for Dominican homes and businesses.",
            "footer_servicios": "Services",
            "footer_residencial": "Residential Internet",
            "footer_negocio": "Business Plans",
            "footer_dedicada": "Dedicated Fiber",
            "footer_consulta_cob": "Check Coverage",
            "footer_soporte": "Support",
            "footer_centro_ayuda": "Help Center",
            "footer_pagar": "Pay Bill",
            "footer_reportar": "Report an Issue",
            "footer_whatsapp": "Direct WhatsApp",
            "footer_contacto": "Contact",
            "footer_direccion": "Los Alcarrizos, Lebrón St. #60, Santo Domingo",
            "footer_rights": "All rights reserved.",
            "footer_privacidad": "Privacy",
            "footer_terminos": "Terms",

            //--Factura azul
            "btn_volver_buscar": "Back to search",
            "btn_volver_inicio": "Back to home",
            "consult_titulo": "Check Invoices",
            "consult_subtitulo": "Check with your Client ID or the ID number shown on your invoice.",
            "consult_buscar_por": "Search by",
            "consult_opt_id": "Client ID",
            "consult_opt_cedula": "ID / Passport",
            "consult_label_id": "Client ID",
            "consult_label_cedula": "ID / RNC / Passport",
            "consult_ph_id": "Ex: 250",
            "consult_ph_cedula": "Ex: 001-0000000-0 or A1234567",
            "consult_btn_cargando": "Searching...",
            "consult_btn_buscar": "Check my invoices",
            "consult_cliente": "Client",
            "consult_sin_pagar": "Unpaid",
            "consult_total_pendiente": "Total Due",
            "consult_alerta_reactivar": "To reactivate or maintain service, you must pay the total balance.",
            "consult_btn_pagar_total": "Pay Total",
            "consult_detalle_facturas": "Invoice Details",
            "consult_tab_pendientes": "Pending",
            "consult_tab_pagadas": "Paid",
            "consult_sin_facturas_pend": "You have no pending invoices.",
            "consult_sin_facturas_pag": "No record of paid invoices found.",
            "consult_factura_num": "Invoice",
            "consult_emitida": "Issued",
            "consult_vence": "Due",
            "consult_estado_pagada": "Paid",
            "consult_concepto_pago": "Total Pending Balance Payment",
            "consult_facturas": "invoices",
            "consult_no_encontrado": "No records found with these details.",
            "consult_error_conexion": "An error occurred while checking the billing system.",
            "consult_error_azul": "Error connecting to Azul.",
            "consult_error_azul_conexion": "Connection error with the payment gateway.",
            
            //--Checkout Azul
            "checkout_titulo": "Checkout",
            "checkout_seguridad_3d": "Secure invoice payment with 3D Secure authentication",
            "checkout_resumen_pago": "Payment Summary",
            "checkout_cliente": "Client",
            "checkout_id_cliente": "Client ID",
            "checkout_factura": "Invoice",
            "checkout_emitida": "Issued",
            "checkout_vence": "Due Date",
            "checkout_total_pagar": "Total Amount",
            "checkout_moneda": "Currency",
            "checkout_moneda_nombre": "Dominican Pesos (RD$ / DOP$)",
            "checkout_datos_comercio": "MERCHANT INFORMATION",
            "checkout_medios_pago": "ACCEPTED PAYMENT METHODS",
            "checkout_politicas_texto_1": "I have read and accept the",
            "checkout_link_politicas": "Refund, Cancellation and Return Policies",
            "checkout_politicas_texto_2": "the",
            "checkout_link_privacidad": "Privacy Policy",
            "checkout_politicas_texto_3": "and the",
            "checkout_link_seguridad": "Card Data Security Policy",
            "checkout_politicas_texto_4": "I understand that cash refunds are not issued and amounts are processed in Dominican Pesos (RD$ / DOP$).",
            "checkout_modelo_recibo_desc": "Sample receipt for compliance:",
            "checkout_modelo_recibo_link": "view sample receipt",
            "checkout_btn_redirigiendo": "Redirecting to Azul...",
            "checkout_btn_pagar": "Pay with Azul",
            "checkout_btn_volver": "Back to invoices",

            //Estados de factura
            "status_no_pagado": "UNPAID",
            "status_sin_pagar": "UNPAID",
            "status_pagado": "PAID",
           }
        },
        fr: {
          translation: {
          //Navbar
          "nav_inicio": "Accueil",
          "nav_nosotros": "À Propos",
          "nav_cobertura":"couverture",
          "nav_planes": "Forfaits",
          "nav_contacto": "Contact",
          "nav_novedades": "nouveauté",
          
          //-Micuenta
          "nav_mi_cuenta": "Mon Compte",
          "nav_portal_clientes": "Portail Client",
          "nav_acceso_empleados": "Accès Employés",
          "nav_pagar": "Payer Maintenant",
          "nav_pagar_con_tarjeta": "Payer Avec Carte",
          "nav_factura": "Facture",
          "nav_aplicar_comprobantes": "Envoyer le Reçu",
          "nav_verificar_factura": "Vérifier la Facture",

          //--felicie cliente
            "nav_navega": "Naviguer",
            "nav_sin_limites": "sans limites.",
            "desc": "La fibre optique la plus stable de RD est là pour rester. Connectez votre maison aujourd'hui avec",
            "btn_solicitar": "Demander Maintenant",
            "clientes": "+1,200 clients heureux à",
            "real_time": "Naviguer En Temps Réel",
            "lugar": "Los Alcarrizos",

            // --- Ofertas ---
              "promo_texto": "Passez de 6 à 30 Mbps pour seulement",
              "promo_extra": "supplémentaires",
              "mes_0": "Janvier Jour des Rois Mages 🤴🏽🚂 :",
              "mes_1": "Février Mois de la Patrie 🇩🇴 :",
              "mes_2": "Bataille du 30 Mars ⚔️ :",
              "mes_3": "Révolution du 24 Avril ⚔️ :",
              "mes_4": "Mai Fête des Mères 🤰 :",
              "mes_5": "Juin Fête des Enseignants 👨🏽‍🏫 :",
              "mes_6": "Juillet Fête des Pères 👨🏽 :",
              "mes_7": "Août Jour de la Restauration : 🗣️",
              "mes_8": "Septembre Mois de la Bible 📚 :",
              "mes_9": "Octobre Jour de la Race 🧑‍🧑‍🧒‍🧒 :",
              "mes_10": "Novembre Jour de la Constitution :",
              "mes_11": "Joyeux Noël 🎄 :",
              "feat_fibra_title": "100% Fibre Optique",

          //--Feature frances
          "feat_fibra_desc": "Technologie FTTH qui garantit la vitesse contractée.",
          "feat_seguridad_title": "Connexion Sécurisée",
          "feat_seguridad_desc": "Naviguez protégé grâce à notre réseau de fibre optique de dernière génération.",
          "feat_contrato_title": "Sans Engagement",
          "feat_contrato_desc": "Nous croyons en la liberté. Sans pénalités cachées.",
          "feat_soporte_title": "Support Spécialisé",
          "feat_soporte_desc": "Service client efficace prêt à vous aider.",

          //--Nosotros
          "nosotros_quienes_somos": "Qui sommes-nous ?",
          "nosotros_p1": "est une entreprise de télécommunications dédiée à la fourniture de services d'accès à Internet pour répondre aux besoins de nos clients, apportant une connectivité par fibre optique et liaisons radio de la plus haute qualité du marché.",
          "nosotros_p2_1": "Nous sommes une entreprise qui travaille dans un environnement familial, garantissant que nos utilisateurs et collaborateurs se sentent membres de la famille",
          "nosotros_mision_titulo": "Mission",
          "nosotros_mision_desc": "Fournir des solutions technologiques innovantes axées sur la satisfaction des besoins de nos clients grâce à une équipe humaine spécialisée et à l'utilisation d'équipements de haute qualité garantissant stabilité et confiance aux normes les plus élevées.",
          "nosotros_vision_titulo": "Vision",
          "nosotros_vision_desc": "Être le fournisseur de services Internet de la plus haute qualité et de la plus grande stabilité, garantissant la confiance des utilisateurs de notre réseau afin que nos services répondent à toutes les attentes des clients.",
          "nosotros_valores_titulo": "Valeurs",
          "nosotros_valores_desc": "Intégrité (nous agissons conformément à la loi), Innovation (avant-garde technologique), Flexibilité (adaptation aux besoins) et Engagement envers nos clients et collaborateurs.",
          
          //-Cobertura
          "cob_red": "Notre Réseau",
          "cob_titulo": "Couverture",
          "cob_desc": "Cliquez sur votre secteur pour voir la carte de disponibilité de la fibre optique.",
          "cob_mapa_de": "Carte de",
          "cob_cargando": "Vérification de la disponibilité...",
          "cob_ayuda": "Vous ne voyez pas votre secteur ? Contactez-nous ! Nous étendons notre réseau chaque jour.",

          //--Planes
          "planes_titulo_1": "Nos Forfaits",
          "planes_titulo_2": "Internet",
          "planes_subtitle": "La plus grande variété de vitesses pour ne payer que ce dont vous avez besoin, avec la technologie 100% Fibre.",
          "plan_basico": "Forfait Basique",
          "plan_express": "Forfait Express",
          "plan_esencial": "Forfait Essentiel",
          "plan_avanzado": "Forfait Avancé",
          "plan_business": "Forfait Business",
          "plan_ultra": "Forfait Ultra",
          "planes_footer": "Connectivité Garantie • OneRed",
          
          //PlanCard
          "plan_download": "Descendant",
          "plan_upload": "Ascendant",
          "plan_mes": "mois",
          "plan_boton": "Choisir le forfait",

          //--Contacto
          "cont_titulo_1": "Des questions ?",
          "cont_titulo_2": "Discutez avec nous !",
          "cont_boton": "Parler à un agent",
          "cont_estado": "Service client en direct",

          //map locacion
          "map_visitanos": "Visitez notre bureau principal",
          "map_horario_titulo": "Heures d'ouverture :",
          "map_horario_semana": "Lundi au Vendredi : 09h00 – 18h00",
          "map_horario_sabado": "Samedi : 09h00 – 13h00",
          "map_como_llegar": "Comment arriver",
          
          //chat widget
          "chat_agente": "Parler à un agent",

          //--Footer
          "footer_eslogan": "Apporter la meilleure connectivité dans chaque coin. Véritable fibre optique pour les foyers et entreprises dominicaines.",
          "footer_servicios": "Services",
          "footer_residencial": "Internet Résidentiel",
          "footer_negocio": "Forfaits Business",
          "footer_dedicada": "Fibre Dédiée",
          "footer_consulta_cob": "Vérifier la Couverture",
          "footer_soporte": "Support",
          "footer_centro_ayuda": "Centre d'Aide",
          "footer_pagar": "Payer la Facture",
          "footer_reportar": "Signaler une Panne",
          "footer_whatsapp": "WhatsApp Direct",
          "footer_contacto": "Contact",
          "footer_direccion": "Los Alcarrizos, Rue Lebrón #60, Saint-Domingue",
          "footer_rights": "Tous droits réservés.",
          "footer_privacidad": "Confidentialité",
          "footer_terminos": "Conditions",

          //--Factura azul
          "btn_volver_buscar": "Retour à la recherche",
          "btn_volver_inicio": "Retour a l'accueil",
          "consult_titulo": "Consulter les Factures",
          "consult_subtitulo": "Consultez avec votre ID Client ou le numéro d'identité sur votre facture.",
          "consult_buscar_por": "Rechercher par",
          "consult_opt_id": "ID Client",
          "consult_opt_cedula": "Identité / Passeport",
          "consult_label_id": "ID Client",
          "consult_label_cedula": "Identité / RNC / Passeport",
          "consult_ph_id": "Ex: 250",
          "consult_ph_cedula": "Ex: 001-0000000-0 ou A1234567",
          "consult_btn_cargando": "Recherche en cours...",
          "consult_btn_buscar": "Consulter mes factures",
          "consult_cliente": "Client",
          "consult_sin_pagar": "Non payé",
          "consult_total_pendiente": "Total Dû",
          "consult_alerta_reactivar": "Pour réactiver ou maintenir le service, vous devez régler el solde total.",
          "consult_btn_pagar_total": "Payer le Total",
          "consult_detalle_facturas": "Détail des Factures",
          "consult_tab_pendientes": "En attente",
          "consult_tab_pagadas": "Payées",
          "consult_sin_facturas_pend": "Vous n'avez aucune facture en attente.",
          "consult_sin_facturas_pag": "Aucun enregistrement de factures payées.",
          "consult_factura_num": "Facture",
          "consult_emitida": "Émise",
          "consult_vence": "Échéance",
          "consult_estado_pagada": "Payée",
          "consult_concepto_pago": "Paiement du Solde Total En Attente",
          "consult_facturas": "factures",
          "consult_no_encontrado": "Aucun enregistrement trouvé avec ces données.",
          "consult_error_conexion": "Une erreur est survenue lors de la consultation del sistema.",
          "consult_error_azul": "Erreur de connexion à Azul.",
          "consult_error_azul_conexion": "Erreur de connexion avec la passerelle de paiement.",

          "checkout_titulo": "Checkout",
          "checkout_seguridad_3d": "Paiement sécurisé de facture avec authentification 3D Secure",
          "checkout_resumen_pago": "Résumé du paiement",
          "checkout_cliente": "Client",
          "checkout_id_cliente": "ID Client",
          "checkout_factura": "Facture",
          "checkout_emitida": "Émise",
          "checkout_vence": "Échéance",
          "checkout_total_pagar": "Total à payer",
          "checkout_moneda": "Devise",
          "checkout_moneda_nombre": "Pesos dominicains (RD$ / DOP$)",
          "checkout_datos_comercio": "INFORMATIONS COMMERÇANT",
          "checkout_medios_pago": "MOYENS DE PAIEMENT ACCEPTÉS",
          "checkout_politicas_texto_1": "J'ai lu et j'accepte les",
          "checkout_link_politicas": "Politiques de Remboursement et d'Annulation",
          "checkout_politicas_texto_2": "la",
          "checkout_link_privacidad": "Politique de Confidentialité",
          "checkout_politicas_texto_3": "et la",
          "checkout_link_seguridad": "Politique de Sécurité des Données de Carte",
          "checkout_politicas_texto_4": "Je comprends qu'aucun remboursement en espèces n'est effectué et que les montants sont traités en pesos dominicains (RD$ / DOP$).",
          "checkout_modelo_recibo_desc": "Exemple de reçu pour conformité :",
          "checkout_modelo_recibo_link": "voir le modèle de reçu",
          "checkout_btn_redirigiendo": "Redirection vers Azul...",
          "checkout_btn_pagar": "Payer avec Azul",
          "checkout_btn_volver": "Retour aux factures",

          //Estados de factura
          "status_no_pagado": "NON PAYÉ",
          "status_sin_pagar": "NON PAYÉ",
          "status_pagado": "PAYÉ"
        }
      }
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;