import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyContent() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-left">
      <p>
        <strong>ONERED</strong> (RNC 131-93314-9),
        {t('privacy_intro', ' con domicilio en Santo Domingo Oeste, República Dominicana, se compromete a proteger la privacidad de los datos personales de sus clientes, visitantes del sitio web y usuarios de sus servicios de telecomunicaciones y pagos en línea.')}
      </p>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          1. {t('privacy_sec1_title', 'Datos que recopilamos')}
        </h4>
        <p className="mb-2">{t('privacy_sec1_desc', 'Podemos recopilar las siguientes categorías de información:')}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>{t('privacy_data_id_label', 'Informes de identificación:')}</strong> {t('privacy_data_id_val', 'nombre, cédula, dirección, teléfono y correo electrónico.')}
          </li>
          <li>
            <strong>{t('privacy_data_service_label', 'Información de servicio:')}</strong> {t('privacy_data_service_val', 'plan contratado, historial de facturación, consumo y soporte técnico.')}
          </li>
          <li>
            <strong>{t('privacy_data_nav_label', 'Registros de navegación:')}</strong> {t('privacy_data_nav_val', 'dirección IP, tipo de navegador, páginas visitadas y cookies técnicas del sitio web.')}
          </li>
          <li>
            <strong>{t('privacy_data_payment_label', 'Datos de pago:')}</strong> {t('privacy_data_payment_prefix', 'referencias de transacción, comprobantes y autorizaciones. Los datos completos de tarjeta son procesados exclusivamente por la pasarela certificada PCI-DSS (Azul); ')}
            <strong>ONERED</strong>
            {t('privacy_data_payment_suffix', ' no almacena números de tarjeta ni códigos CVV.')}
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          2. {t('privacy_sec2_title', 'Finalidad del tratamiento')}
        </h4>
        <p className="mb-2">{t('privacy_sec2_desc', 'Utilizamos sus datos para:')}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>{t('privacy_purpose_1', 'Prestar, facturar y dar soporte a los servicios de telecomunicaciones.')}</li>
          <li>{t('privacy_purpose_2', 'Procesar pagos en línea y emitir comprobantes.')}</li>
          <li>{t('privacy_purpose_3', 'Cumplir obligaciones legales, tributarias y regulatorias (DGII, INDOTEL).')}</li>
          <li>{t('privacy_purpose_4', 'Comunicarnos sobre el estado de su cuenta, facturas y cambios de servicio.')}</li>
          <li>{t('privacy_purpose_5', 'Mejorar la seguridad y funcionamiento de nuestros sistemas.')}</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          3. {t('privacy_sec3_title', 'Compartición de datos')}
        </h4>
        <p>
          {t('privacy_sec3_text', 'Podemos compartir información con proveedores que nos ayudan a operar el negocio, incluyendo pasarelas de pago (Azul), sistemas de gestión (Mikrowisp) y entidades reguladoras cuando la ley lo exija. Estos terceros están obligados contractualmente a proteger sus datos.')}
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          4. {t('privacy_sec4_title', 'Seguridad')}
        </h4>
        <p>
          {t('privacy_sec4_text', 'Implementamos medidas técnicas y organizativas para proteger la información personal, incluyendo cifrado TLS en la transmisión de datos y controles de acceso a nuestros sistemas internos.')}
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          5. {t('privacy_sec5_title', 'Derechos del titular')}
        </h4>
        <p>
          {t('privacy_sec5_prefix', 'Usted puede solicitar acceso, rectificación o eliminación de sus datos personales, así como oponerse a ciertos tratamientos, contactando a ')}
          <strong>info@oneredrd.com</strong>.
          {t('privacy_sec5_suffix', ' Responderemos en un plazo razonable conforme a la legislación dominicana aplicable.')}
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          6. {t('privacy_sec6_title', 'Cookies')}
        </h4>
        <p>
          {t('privacy_sec6_text', 'Nuestro sitio utiliza cookies esenciales para el funcionamiento de la plataforma y la experiencia de pago. Puede configurar su navegador para rechazar cookies no esenciales, aunque algunas funciones podrían verse limitadas.')}
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          7. {t('privacy_sec7_title', 'Cambios a esta política')}
        </h4>
        <p>
          {t('privacy_sec7_text', 'Podemos actualizar esta política periódicamente. La versión vigente estará publicada en esta página con la fecha de última actualización.')}
        </p>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600">
        <p className="font-bold text-gray-800 text-sm mb-2">{t('privacy_support_title', 'Servicio al cliente')}</p>
        <p><strong>ONERED</strong></p>
        <p><strong>{t('privacy_support_phone', 'Teléfono:')}</strong> +1 (809) 422-5424 / (809) 447-4575</p>
        <p><strong>{t('privacy_support_email', 'Correo electrónico:')}</strong> info@oneredrd.com</p>
        <p><strong>{t('privacy_support_address', 'Dirección:')}</strong> {t('privacy_support_address_val', 'Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana')}</p>
      </div>
    </div>
  );
}