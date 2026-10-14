import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ReturnsAndRefundsPolicyContent() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-left">
      <p className="font-bold border-b pb-2 text-blue-600 uppercase">
        {t('returns_policy_title', 'Política de devoluciones, cancelaciones y reembolsos en línea')}
      </p>

      <p className="text-xs text-gray-600">
        {t('returns_intro_prefix', 'En ')}
        <strong>ONERED JWG532, S.R.L.</strong>
        {t('returns_intro_suffix', ', la transparencia y satisfacción de nuestros clientes son fundamentales. Este documento regula las transacciones, cancelaciones, devoluciones y reembolsos aplicados a los pagos realizados a través de nuestra pasarela digital provista por ')}
        <strong>Servicios Digitales Popular (Azul)</strong>.
      </p>

      {/* 1. IMPUESTOS Y CARGOS DE LEY */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          1. {t('returns_sec1_title', 'Impuestos y cargos de ley aplicables')}
        </h4>
        <p className="mb-2 text-xs">
          {t('returns_sec1_desc', 'Todas las transacciones procesadas mediante tarjeta de crédito o débito incluyen los impuestos regulados por la Dirección General de Impuestos Internos (DGII) y el Instituto Dominicano de las Telecomunicaciones (INDOTEL):')}
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>
            <strong>ITBIS (18%):</strong> {t('returns_tax_itbis', 'Impuesto sobre transferencias de bienes industrializados y servicios.')}
          </li>
          <li>
            <strong>ISC (10%):</strong> {t('returns_tax_isc', 'Impuesto selectivo al consumo aplicado a servicios de telecomunicaciones.')}
          </li>
          <li>
            <strong>CDT (2%):</strong> {t('returns_tax_cdt', 'Contribución al desarrollo de las telecomunicaciones (Ley No. 153-98).')}
          </li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded border border-gray-200">
          <strong>{t('returns_fiscal_note_label', 'Nota fiscal:')} </strong>
          {t('returns_fiscal_note_text', 'Estos impuestos son recaudados de manera obligatoria y transferidos íntegramente al estado dominicano, por lo cual no son reembolsables bajo ninguna circunstancia ajena a un error comprobado de facturación.')}
        </p>
      </div>

      {/* 2. POLÍTICA DE NO DEVOLUCIÓN DE EFECTIVO Y TRATAMIENTO DE SALDOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          2. {t('returns_sec2_title', 'Política de no devolución de efectivo y saldos a favor')}
        </h4>
        <p className="text-xs mb-2">
          ONERED JWG532, S.R.L. {t('returns_sec2_desc_prefix', 'establece que ')}
          <strong>{t('returns_sec2_desc_bold', 'no se realizan devoluciones de dinero en efectivo, transferencias bancarias directas ni reversiones automáticas')}</strong>
          {t('returns_sec2_desc_suffix', ' por concepto de pagos recurrentes, saldos generados voluntariamente por el usuario o montos depositados por error del cliente.')}
        </p>
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 text-xs text-blue-900">
          <strong>{t('returns_balance_label', 'Tratamiento de saldos a favor:')} </strong>
          {t('returns_balance_text', 'Cualquier monto pagado en exceso o pago duplicado debidamente validado por el departamento financiero no será devuelto en efectivo. Dicho importe se registrará de forma inmediata y exclusiva como un crédito / balance a favor del cliente, el cual se aplicará automáticamente en las próximas facturas mensuales del servicio.')}
        </div>
      </div>

      {/* 3. CANCELACIÓN Y EQUIPOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          3. {t('returns_sec3_title', 'Cancelación del servicio y equipos')}
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>
            <strong>{t('returns_cancel_baja_label', 'Solicitud de Baja:')} </strong>
            {t('returns_cancel_baja_text', 'El cliente puede solicitar la cancelación notificando con un mínimo de 48 horas de anticipación a su fecha de corte. La cancelación no exime de saldar deudas pendientes o facturas generadas.')}
          </li>
          <li>
            <strong>{t('returns_cancel_prorrateo_label', 'Cobro por Prorrateo / Ciclo:')} </strong>
            {t('returns_cancel_prorrateo_text', 'Si se cancela el servicio a mitad de un periodo facturado y pagado, el servicio permanecerá activo hasta cumplir el ciclo correspondiente; no se generarán reembolsos proporcionales en efectivo.')}
          </li>
          <li>
            <strong>{t('returns_cancel_install_label', 'Cargos de Instalación:')} </strong>
            {t('returns_cancel_install_text', 'Los cargos de instalación no son reembolsables, ya que cubren los costos operacionales de despliegue y mano de obra.')}
          </li>
          <li>
            <strong>{t('returns_cancel_equip_label', 'Devolución de Equipos:')} </strong>
            {t('returns_cancel_equip_text', 'Al ceder o cancelar el servicio, el cliente debe devolver los equipos suministrados en calidad de préstamo (router, antenas, ONU). La no devolución o entrega en estado deteriorado generará un cargo automático de RD$ 4,000 Pesos Dominicanos.')}
          </li>
        </ul>
      </div>

      {/* 4. RECLAMACIONES Y REEMBOLSOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">
          4. {t('returns_sec4_title', 'Reclamaciones de transacciones')}
        </h4>
        <p className="text-xs mb-2">
          {t('returns_sec4_desc', 'Las reclamaciones por cobros duplicados o discrepancias en los montos procesados en Azul seguirán el siguiente procedimiento:')}
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>{t('returns_claim_step1', 'El usuario debe reportar el caso adjuntando el comprobante digital de la pasarela o su estado de cuenta bancario donde se evidencie el débito.')}</li>
          <li>{t('returns_claim_step2', 'El departamento de soporte dispone de un plazo de hasta cinco (5) días laborables para validar los registros técnicos de la pasarela con la entidad bancaria.')}</li>
          <li>{t('returns_claim_step3', 'De comprobarse un error atribuible a ONERED JWG532, S.R.L., el importe validado se acreditará en la cuenta de servicio del cliente bajo la modalidad de balance a favor.')}</li>
        </ul>
      </div>

      {/* FICHA LEGAL Y SOPORTE */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">{t('returns_id_title', 'Ficha de identificación institucional')}</p>
        <p><strong>{t('returns_id_brand', 'Marca Comercial:')}</strong> ONERED JWG532, S.R.L.</p>
        <p><strong>RNC:</strong> 131-93314-9</p>
        <p><strong>{t('returns_id_sector', 'Sector Regulado:')}</strong> {t('returns_id_sector_val', 'Telecomunicaciones (INDOTEL - República Dominicana)')}</p>
        <p><strong>{t('returns_id_phones', 'Teléfonos:')}</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>{t('returns_id_support', 'Atención y Soporte:')}</strong> info@oneredrd.com</p>
        <p><strong>{t('returns_id_address', 'Dirección:')}</strong> {t('returns_id_address_val', 'Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana')}</p>
        <p><strong>{t('returns_id_currency', 'Moneda de Operación:')}</strong> {t('returns_id_currency_val', 'Pesos Dominicanos (RD$ / DOP$)')}</p>
      </div>
    </div>
  );
}