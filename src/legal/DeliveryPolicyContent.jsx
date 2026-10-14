import React from 'react';
import { useTranslation } from 'react-i18next';

export default function DeliveryPolicyContent() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-left">
      {/* ENCABEZADO Y MARCA */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 border-b pb-1">
          {t('del_title', 'Política de Entrega y Activación de Servicios')}
        </h3>
        <p className="text-xs text-blue-600 font-medium mt-1">
          {t('del_subtitle', 'Servicios de telecomunicaciones · ONERED (JWG532, S.R.L.)')}
        </p>
      </div>

      <p className="text-xs text-gray-600">
        {t('del_intro_prefix', 'En ')}
        <strong>ONERED (JWG532, S.R.L.)</strong>
        {t('del_intro_mid', ' prestamos servicios de conectividad y telecomunicaciones de naturaleza digital e instalación técnica en sitio. Esta política describe los procedimientos y tiempos bajo los cuales se efectúa la entrega, instalación y activación de nuestros servicios pagados a través de la pasarela digital de ')}
        <strong>{t('del_intro_azul', 'Servicios Digitales Popular (Azul)')}</strong>.
      </p>

      {/* 1. NATURALEZA DEL SERVICIO */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          1. {t('del_sec1_title', 'Naturaleza del servicio')}
        </h4>
        <p className="text-xs">
          {t('del_sec1_prefix', 'Nuestros productos principales corresponden a servicios de acceso a internet por fibra óptica y soluciones de conectividad empresarial. No vendemos ni enviamos bienes físicos por mensajería o correo postal; la ')}
          <strong>{t('del_sec1_bold', '“entrega”')}</strong>
          {t('del_sec1_suffix', ' del servicio consiste en la adecuación técnica en la dirección contratada y la posterior activación digital de la conexión.')}
        </p>
      </div>

      {/* 2. PROCESO DE INSTALACIÓN Y REQUISITOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          2. {t('del_sec2_title', 'Proceso de instalación en sitio')}
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>
            <strong>{t('del_sec2_item1_label', 'Verificación y Agenda:')} </strong>
            {t('del_sec2_item1_text', 'Una vez aprobada la solicitud y el pago inicial, nuestro departamento técnico contacta al cliente en un plazo de 24 a 48 horas para agendar la visita de instalación.')}
          </li>
          <li>
            <strong>{t('del_sec2_item2_label', 'Presencia Obligatoria:')} </strong>
            {t('del_sec2_item2_text', 'Es indispensable la presencia de un representante mayor de edad en el inmueble para autorizar el acceso y supervisar el despliegue del cableado y equipos.')}
          </li>
          <li>
            <strong>{t('del_sec2_item3_label', 'Alcance Estándar:')} </strong>
            {t('del_sec2_item3_text', 'Incluye acometida de fibra óptica / cableado exterior, instalación de una (1) unidad óptica/router (ONU/ONT) y pruebas de rendimiento de conexión.')}
          </li>
        </ul>
      </div>

      {/* 3. PLAZOS DE ENTREGA Y ACTIVACIÓN */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          3. {t('del_sec3_title', 'Plazos de activación del servicio')}
        </h4>
        <p className="text-xs">
          {t('del_sec3_prefix', 'La activación efectiva del servicio se realiza habitualmente en un período de ')}
          <strong>{t('del_sec3_bold', '1 a 3 días laborables')}</strong>
          {t('del_sec3_suffix', ' posteriores a la confirmación de la solicitud y el pago del cargo de instalación correspondiente. Factores externos (condiciones climáticas, permisología comunitaria o zonas de difícil acceso) pueden incidir en el tiempo final de entrega.')}
        </p>
      </div>

      {/* 4. EQUIPOS EN COMODATO Y COSTOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          4. {t('del_sec4_title', 'Equipos en comodato y cargos de instalación')}
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>
            <strong>{t('del_sec4_item1_label', 'Equipos en Préstamo:')} </strong>
            {t('del_sec4_item1_text', 'Los equipos entregados (Terminal de red Óptica, routers, antenas) permanecen bajo propiedad de ONERED JWG532, S.R.L. en calidad de comodato y deberán ser devueltos en buen estado al momento de la cancelación.')}
          </li>
          <li>
            <strong>{t('del_sec4_item2_label', 'Cargos de Instalación:')} </strong>
            {t('del_sec4_item2_text', 'El pago por concepto de instalación es único y no reembolsable, cubriendo los gastos operativos de despliegue de infraestructura, materiales y mano de obra.')}
          </li>
        </ul>
      </div>

      {/* 5. ACREDITACIÓN DE PAGOS EN LÍNEA */}
      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 text-xs text-blue-900">
        <strong className="block font-bold mb-0.5">
          5. {t('del_sec5_title', 'Pagos en línea y acreditación de facturas:')}
        </strong>
        {t('del_sec5_prefix', 'Los pagos de facturas mensuales o cargos de reconexión procesados a través de nuestra pasarela de pagos en línea (Azul) se acreditan e impactan en el sistema comercial en un tiempo estimado de ')}
        <strong>{t('del_sec5_bold', '24 a 48 horas laborables')}</strong>
        {t('del_sec5_suffix', ' tras la validación de la transacción. El comprobante digital emitido al finalizar la compra sirve como evidencia oficial de pago.')}
      </div>

      {/* 6. ÁREA DE COBERTURA Y MONEDA */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          6. {t('del_sec6_title', 'Cobertura y moneda de operación')}
        </h4>
        <p className="text-xs">
          {t('del_sec6_prefix', 'Prestamos servicios en la República Dominicana, enfocados en la zona metropolitana de Santo Domingo, Santo Domingo Oeste (Los Alcarrizos) y áreas con disponibilidad de fibra óptica. Todos los cargos de instalación, mensualidades y adiciones se expresan y cobran exclusivamente en ')}
          <strong>{t('del_sec6_currency', 'Pesos Dominicanos (RD$ / DOP$)')}</strong>.
        </p>
      </div>

      {/* FICHA CORPORATIVA Y SERVICIO AL CLIENTE */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">{t('del_support_title', 'Servicio al cliente y datos de contacto')}</p>
        <p><strong>{t('del_company_name', 'Razón Social:')}</strong> ONERED JWG532, S.R.L.</p>
        <p><strong>{t('del_trade_name', 'Nombre Comercial:')}</strong> ONERED</p>
        <p><strong>RNC:</strong> 131-93314-9</p>
        <p><strong>{t('del_phones', 'Teléfonos:')}</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>{t('del_email', 'Correo Electrónico:')}</strong> info@oneredrd.com</p>
        <p><strong>{t('del_address', 'Dirección Física:')}</strong> {t('del_address_val', 'Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana')}</p>
        <p><strong>{t('del_currency_label', 'Moneda de compra:')}</strong> {t('del_currency_val', 'Pesos dominicanos (RD$ / DOP$)')}</p>
      </div>
    </div>
  );
}