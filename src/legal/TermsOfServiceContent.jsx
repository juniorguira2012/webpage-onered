import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TermsOfServiceContent({ openPrivacy, openCardSecurity, openDeliveryPolicy, openReturnsAndRefunds }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 text-justify text-sm text-gray-700 leading-relaxed">
      <p className="font-bold border-b pb-2 text-blue-600 uppercase">
        {t('terms_title', 'Condiciones de uso y políticas de pagos de nuestros servicios')}
      </p>

      {/* FICHA TÉCNICA / IDENTIFICACION DE COMERCIO */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">{t('terms_id_com_title', 'Identificación comercial')}</p>
        <p><strong>{t('terms_id_company', 'Razón Social / Empresa:')}</strong> ONERED JWG532, S.R.L.</p>
        <p><strong>RNC:</strong> 131-93314-9</p>
        <p><strong>{t('terms_id_customer_service', 'Atención al Cliente:')}</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>{t('terms_id_email', 'Correo Electrónico:')}</strong> info@oneredrd.com</p>
        <p><strong>{t('terms_id_location', 'Ubicación:')}</strong> {t('terms_id_location_val', 'Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana.')}</p>
      </div>

      <p className="text-xs text-gray-600">
        {t('terms_intro_prefix', 'Al utilizar los servicios de ')}
        <strong>ONERED</strong>
        {t('terms_intro_suffix', ' o realizar pagos a través de nuestra plataforma web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones.')}
      </p>

      {/* 1. SECCIÓN DE REGLAS DE SERVICIO */}
      <div className="space-y-2">
        <h4 className="font-bold text-gray-900">
          1. {t('terms_sec1_title', 'Condiciones generales del servicio')}
        </h4>
        <ol className="list-decimal ml-5 space-y-2">
          <li>{t('terms_rule_1', 'El usuario se compromete a pagar mes tras mes el servicio solicitado en la fecha acordada por él mismo.')}</li>
          <li>
            {t('terms_rule_2_prefix', 'El servicio tiene un costo de instalación que ')}
            <strong>{t('terms_rule_2_bold1', 'NO ES REEMBOLSABLE')}</strong>
            {t('terms_rule_2_mid', ' a la hora de retirarlo, tampoco avala el pago de ninguno de los equipos o materiales suministrados en la instalación, ')}
            <strong>{t('terms_rule_2_bold2', 'TAMPOCO ES UN PAGO DE MENSUALIDAD ADELANTADO.')}</strong>
          </li>
          <li>
            {t('terms_rule_3_prefix', 'Los equipos suministrados al momento de la instalación ')}
            <strong>{t('terms_rule_3_bold1', 'NO PERTENECEN AL CLIENTE')}</strong>
            {t('terms_rule_3_mid', ', y este es responsable de daños, deterioro o pérdida de los mismos. Dicho equipo tiene un valor de ')}
            <strong>{t('terms_rule_3_bold2', 'RD$ 4,000 PESOS DOMINICANOS.')}</strong>
          </li>
          <li>{t('terms_rule_4', 'Su fecha de pago siempre será la misma que usted eligió al momento de la instalación; los pagos realizados fuera de fecha no modifican la fecha seleccionada originalmente.')}</li>
          <li>{t('terms_rule_5', 'A partir de su fecha de facturación el cliente tiene 8 días calendario para realizar el pago. Transcurrido este plazo, el servicio será suspendido y el usuario deberá pagar un cargo por reconexión.')}</li>
          <li>{t('terms_rule_6', 'Los pagos parciales no evitan la suspensión del servicio ni garantizan la reconexión del mismo.')}</li>
          <li>{t('terms_rule_7', 'El primer pago es prorrateado (días consumidos desde la instalación hasta el día seleccionado para pagar).')}</li>
        </ol>
      </div>

      {/* ADVERTENCIAS OPERATIVAS */}
      <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400 text-xs text-amber-900 space-y-2">
        <p>
          <strong>{t('terms_warn_suspension_title', 'IMPORTANTE SOBRE SUSPENSIÓN Y FACTURACIÓN:')} </strong>
          {t('terms_warn_suspension_text', 'El usuario es responsable de mantener su servicio activo. Aun si el servicio es suspendido por falta de pago, el sistema no continuará generando los cargos mensuales correspondientes excepto la deuda pendiente y los cargo del mes anterior.')}
        </p>
        <p>
          <strong>{t('terms_warn_cancel_title', 'IMPORTANTE SOBRE CANCELACIÓN:')} </strong>
          {t('terms_warn_cancel_prefix', 'En caso de prescindir del servicio, debe tener su factura al día, devolver el equipo prestado y solicitar su carta de devolución en nuestras oficinas. De lo contrario, ')}
          <strong>ONERED</strong>
          {t('terms_warn_cancel_suffix', ' se reserva el derecho de reportar al buró crediticio la factura pendiente y el valor del equipo.')}
        </p>
      </div>

      {/* 2. SECCIÓN TÉCNICA Y COBERTURA */}
      <div className="space-y-2">
        <h4 className="font-bold text-gray-900">
          2. {t('terms_sec2_title', 'Cobertura Wifi y soporte técnico')}
        </h4>
        <ol start="8" className="list-decimal ml-5 space-y-2">
          <li>
            {t('terms_rule_8_prefix', 'Todos los equipos inalámbricos tienen un límite de alcance. No nos comprometemos a abarcar con señal Wifi todos los espacios de la casa o negocio; para ello se requiere un ')}
            <strong>{t('terms_rule_8_bold', 'Repetidor WiFi')}</strong>
            {t('terms_rule_8_suffix', ' (con costo adicional).')}
          </li>
          <li>
            {t('terms_rule_9_prefix', 'El usuario es responsable de administrar la conexión y el cambio de contraseña. Los cambios de contraseña realizados por técnicos después de la instalación conllevan un costo adicional. ')}
            <strong>{t('terms_rule_9_bold', 'La asistencia técnica llega hasta el router WiFi; NO manipulamos dispositivos internos (celulares, computadoras, Smart TV).')}</strong>
          </li>
          <li>
            <strong>{t('terms_rule_10_bold', 'Está prohibido comercializar, ceder, traspasar o revender el servicio')}</strong>
            {t('terms_rule_10_suffix', ' sin autorización previa por escrito. El incumplimiento conlleva la suspensión o cancelación inmediata sin previo aviso.')}
          </li>
        </ol>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-900">
        <p>
          <strong>{t('terms_coverage_note_title', 'NOTA SOBRE COBERTURA:')} </strong>
          {t('terms_coverage_note_text', 'No tenemos control sobre la cantidad de cobertura disponible dentro de su inmueble debido a limitaciones físicas del entorno (paredes, estructuras, interferencias). Colocamos el router en puntos intermedios para mitigar esto.')}
        </p>
      </div>

      {/* 3. SECCIÓN DE PAGOS EN LÍNEA Y SEGURIDAD AZUL (REQUISITO EXIGIDO POR AZUL) */}
      <div className="space-y-2 border-t pt-3">
        <h4 className="font-bold text-gray-900">
          3. {t('terms_sec3_title', 'Pagos en línea y procesamiento de tarjetas')}
        </h4>
        <ul className="list-disc ml-5 space-y-2 text-xs">
          <li>
            <strong>{t('terms_online_currency_label', 'Moneda de transacción:')} </strong>
            {t('terms_online_currency_prefix', 'Todas las facturas y cobros a través del portal en línea son procesados exclusivamente en ')}
            <strong>{t('terms_online_currency_bold', 'Pesos Dominicanos (DOP$ / RD$)')}</strong>.
          </li>
          <li>
            <strong>{t('terms_online_gateway_label', 'Pasarela de pago segura:')} </strong>
            {t('terms_online_gateway_prefix', 'Los pagos mediante tarjeta de crédito o débito son procesados a través de la pasarela certificada PCI-DSS de ')}
            <strong>{t('terms_online_gateway_azul', 'Azul (Servicios Digitales Popular)')}</strong>.
            <strong> {t('terms_online_gateway_bold', 'ONERED JWG532, S.R.L. no almacena ni guarda números de tarjeta, fechas de vencimiento ni códigos de seguridad (CVV)')}</strong>
            {t('terms_online_gateway_suffix', ' en sus servidores.')}
          </li>
          <li>
            <strong>{t('terms_online_refund_label', 'Política de devolución e impugnaciones:')} </strong>
            {t('terms_online_refund_text', 'Los pagos realizados a través del portal se aplican de forma inmediata al balance de la cuenta del cliente. Si se genera un pago por error o duplicado, el monto pagado será acreditado como un balance a favor para la siguiente factura. No se realizan reembolsos en efectivo por conceptos de instalación o pagos de mensualidad aplicados correctamente.')}
          </li>
        </ul>
      </div>

      {/* FICHA TÉCNICA / PIE DE SOPORTE */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">{t('terms_legal_support_title', 'Contacto y soporte legal')}</p>
        <p><strong>{t('terms_id_company_brand', 'Razón Social / Marca:')}</strong> ONERED JWG532, S.R.L.</p>
        <p><strong>RNC:</strong> 131-93314-9</p>
        <p><strong>{t('terms_id_customer_service', 'Atención al Cliente:')}</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>{t('terms_id_email', 'Correo Electrónico:')}</strong> info@oneredrd.com</p>
        <p><strong>{t('terms_id_location', 'Ubicación:')}</strong> {t('terms_id_location_val', 'Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana.')}</p>
      </div>

      <h3><strong>{t('terms_related_policies_title', 'Políticas relacionadas')}</strong></h3>

      <ul className="list-disc space-y-2 pl-6">
        <li>
          <a href="#" onClick={openPrivacy} className="text-purple-600 hover:text-purple-800 cursor-pointer">
            {t('footer_privacidad', 'Política de Privacidad')}
          </a>
        </li>
        <li>
          <a href="#" onClick={openCardSecurity} className="text-purple-600 hover:text-purple-800 cursor-pointer">
            {t('terms_link_card_security', 'Política de Seguridad para Datos de Tarjetas')}
          </a>
        </li>
        <li>
          <a href="#" onClick={openDeliveryPolicy} className="text-purple-600 hover:text-purple-800 cursor-pointer">
            {t('terms_link_delivery_policy', 'Política de Entrega')}
          </a>
        </li>
        <li>
          <a href="#" onClick={openReturnsAndRefunds} className="text-purple-600 hover:text-purple-800 cursor-pointer">
            {t('footer_devoluciones', 'Políticas de Devolución, Cancelación y Reembolso')}
          </a>
        </li>
      </ul>
    </div>
  );
}