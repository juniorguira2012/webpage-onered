export default function ReturnsAndRefundsPolicyContent() {
  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-left">
      <p className="font-bold border-b pb-2 text-blue-600 uppercase">
        Política de devoluciones, cancelaciones y reembolsos en línea
      </p>

      <p className="text-xs text-gray-600">
        En <strong>ONERED JWG532, S.R.L. </strong>, la transparencia y satisfacción de nuestros clientes son fundamentales. Este documento regula las transacciones, cancelaciones, devoluciones y reembolsos aplicados a los pagos realizados a través de nuestra pasarela digital provista por <strong>Servicios Digitales Popular (Azul)</strong>.
      </p>

      {/* 1. IMPUESTOS Y CARGOS DE LEY */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">1. Impuestos y Cargos de Ley Aplicables</h4>
        <p className="mb-2 text-xs">
          Todas las transacciones procesadas mediante tarjeta de crédito o débito incluyen los impuestos regulados por la Dirección General de Impuestos Internos (DGII) y el Instituto Dominicano de las Telecomunicaciones (INDOTEL):
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li><strong>ITBIS (18%):</strong> Impuesto sobre transferencias de bienes industrializados y servicios.</li>
          <li><strong>ISC (10%):</strong> Impuesto selectivo al consumo aplicado a servicios de telecomunicaciones.</li>
          <li><strong>CDT (2%):</strong> Contribución al desarrollo de las telecomunicaciones (Ley No. 153-98).</li>
        </ul>
        <p className="mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded border border-gray-200">
          <strong>Nota fiscal:</strong> Estos impuestos son recaudados de manera obligatoria y transferidos íntegramente al estado dominicano, por lo cual no son reembolsables bajo ninguna circunstancia ajena a un error comprobado de facturación.
        </p>
      </div>

      {/* 2. POLÍTICA DE NO DEVOLUCIÓN DE EFECTIVO Y TRATAMIENTO DE SALDOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">2. Política de No Devolución de Efectivo y Saldos a Favor</h4>
        <p className="text-xs mb-2">
          ONERED JWG532, S.R.L establece que <strong>no se realizan devoluciones de dinero en efectivo, transferencias bancarias directas ni reversiones automáticas</strong> por concepto de pagos recurrentes, saldos generados voluntariamente por el usuario o montos depositados por error del cliente.
        </p>
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 text-xs text-blue-900">
          <strong>Tratamiento de Saldos a Favor:</strong> Cualquier monto pagado en exceso o pago duplicado debidamente validado por el departamento financiero no será devuelto en efectivo. Dicho importe se registrará de forma inmediata y exclusiva como un <strong>crédito / balance a favor del cliente</strong>, el cual se aplicará automáticamente en las próximas facturas mensuales del servicio.
        </div>
      </div>

      {/* 3. CANCELACIÓN Y EQUIPOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">3. Cancelación del servicio y equipos</h4>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li><strong>Solicitud de Baja:</strong> El cliente puede solicitar la cancelación notificando con un mínimo de 48 horas de anticipación a su fecha de corte. La cancelación no exime de saldar deudas pendientes o facturas generadas.</li>
          <li><strong>Cobro por Prorrateo / Ciclo:</strong> Si se cancela el servicio a mitad de un periodo facturado y pagado, el servicio permanecerá activo hasta cumplir el ciclo correspondiente; no se generarán reembolsos proporcionales en efectivo.</li>
          <li><strong>Cargos de Instalación:</strong> Los cargos de instalación no son reembolsables, ya que cubren los costos operacionales de despliegue y mano de obra.</li>
          <li><strong>Devolución de Equipos:</strong> Al ceder o cancelar el servicio, el cliente debe devolver los equipos suministrados en calidad de préstamo (router, antenas, ONU). La no devolución o entrega en estado deteriorado generará un cargo automático de <strong>RD$ 4,000 Pesos Dominicanos</strong>.</li>
        </ul>
      </div>

      {/* 4. RECLAMACIONES Y REEMBOLSOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">4. Reclamaciones de transacciones</h4>
        <p className="text-xs mb-2">
          Las reclamaciones por cobros duplicados o discrepancias en los montos procesados en Azul seguirán el siguiente procedimiento:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>El usuario debe reportar el caso adjuntando el comprobante digital de la pasarela o su estado de cuenta bancario donde se evidencie el débito.</li>
          <li>El departamento de soporte dispone de un plazo de hasta cinco (5) días laborables para validar los registros técnicos de la pasarela con la entidad bancaria.</li>
          <li>De comprobarse un error atribuible a ONERED JWG532, S.R.L., el importe validado se acreditará en la cuenta de servicio del cliente bajo la modalidad de balance a favor.</li>
        </ul>
      </div>

      {/* FICHA LEGAL Y SOPORTE */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">Ficha de identificación institucional</p>
        <p><strong>Marca Comercial:</strong>  ONERED JWG532, S.R.L.</p>
        <p><strong>RNC:</strong> 131-93314-9 </p>
        <p><strong>Sector Regulado:</strong> Telecomunicaciones (INDOTEL - República Dominicana)</p>
        <p><strong>Teléfonos:</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>Atención y Soporte:</strong> info@oneredrd.com</p>
        <p><strong>Dirección:</strong> Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana</p>
        <p><strong>Moneda de Operación:</strong> Pesos Dominicanos (RD$ / DOP$)</p>
      </div>
    </div>
  );
}