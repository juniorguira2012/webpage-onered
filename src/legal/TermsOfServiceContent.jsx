export default function TermsOfServiceContent({ openPrivacy, openCardSecurity, openDeliveryPolicy, openReturnsAndRefunds }) {
  return (
    <div className="space-y-4 text-justify text-sm text-gray-700 leading-relaxed">
      <p className="font-bold border-b pb-2 text-blue-600 uppercase">
        Condiciones de Uso y Políticas de Pago de Nuestros Servicios
      </p>

      {/* FICHA TÉCNICA / IDENTIFICACION DE COMERCIO */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">Identificacion comercial</p>
        <p><strong>Razón Social / Empresa:</strong> ONERED JWG532, S.R.L.</p>
        <p><strong>RNC:</strong> 131-93314-9</p>
        <p><strong>Atención al Cliente:</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>Correo Electrónico:</strong> info@oneredrd.com</p>
        <p><strong>Ubicación:</strong> Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana.</p>
      </div>

      <p className="text-xs text-gray-600">
        Al utilizar los servicios de <strong>ONERED</strong> o realizar pagos a través de nuestra plataforma web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones.
      </p>

      {/* 1. SECCIÓN DE REGLAS DE SERVICIO */}
      <div className="space-y-2">
        <h4 className="font-bold text-gray-900">1. Condiciones generales del servicio</h4>
        <ol className="list-decimal ml-5 space-y-2">
          <li>El usuario se compromete a pagar mes tras mes el servicio solicitado en la fecha acordada por él mismo.</li>
          <li>El servicio tiene un costo de instalación que <strong>NO ES REEMBOLSABLE</strong> a la hora de retirarlo, tampoco avala el pago de ninguno de los equipos o materiales suministrados en la instalación, <strong>TAMPOCO ES UN PAGO DE MENSUALIDAD ADELANTADO.</strong></li>
          <li>Los equipos suministrados al momento de la instalación <strong>NO PERTENECEN AL CLIENTE</strong>, y este es responsable de daños, deterioro o pérdida de los mismos. Dicho equipo tiene un valor de <strong>RD$ 4,000 PESOS DOMINICANOS.</strong></li>
          <li>Su fecha de pago siempre será la misma que usted eligió al momento de la instalación; los pagos realizados fuera de fecha no modifican la fecha seleccionada originalmente.</li>
          <li>A partir de su fecha de facturación el cliente tiene 8 días calendario para realizar el pago. Transcurrido este plazo, el servicio será suspendido y el usuario deberá pagar un cargo por reconexión.</li>
          <li>Los pagos parciales no evitan la suspensión del servicio ni garantizan la reconexión del mismo.</li>
          <li>El primer pago es prorrateado (días consumidos desde la instalación hasta el día seleccionado para pagar).</li>
        </ol>
      </div>

      {/* ADVERTENCIAS OPERATIVAS */}
      <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400 text-xs text-amber-900 space-y-2">
        <p><strong>IMPORTANTE SOBRE SUSPENSIÓN Y FACTURACIÓN:</strong> El usuario es responsable de mantener su servicio activo. Aun si el servicio es suspendido por falta de pago, el sistema no continuará generando los cargos mensuales correspondientes excepto la deuda pendiente y los cargo del mes anterior.</p>
        <p><strong>IMPORTANTE SOBRE CANCELACIÓN:</strong> En caso de prescindir del servicio, debe tener su factura al día, devolver el equipo prestado y solicitar su carta de devolución en nuestras oficinas. De lo contrario, <strong>ONERED</strong> se reserva el derecho de reportar al buró crediticio la factura pendiente y el valor del equipo.</p>
      </div>

      {/* 2. SECCIÓN TÉCNICA Y COBERTURA */}
      <div className="space-y-2">
        <h4 className="font-bold text-gray-900">2. Cobertura wiFi y soporte técnico</h4>
        <ol start="8" className="list-decimal ml-5 space-y-2">
          <li>Todos los equipos inalámbricos tienen un límite de alcance. No nos comprometemos a abarcar con señal WIFI todos los espacios de la casa o negocio; para ello se requiere un <strong>Repetidor WiFi</strong> (con costo adicional).</li>
          <li>El usuario es responsable de administrar la conexión y el cambio de contraseña. Los cambios de contraseña realizados por técnicos después de la instalación conllevan un costo adicional. <strong>La asistencia técnica llega hasta el router WiFi; NO manipulamos dispositivos internos (celulares, computadoras, Smart TVs).</strong></li>
          <li><strong>Está prohibido comercializar, ceder, traspasar o revender el servicio</strong> sin autorización previa por escrito. El incumplimiento conlleva la suspensión o cancelación inmediata sin previo aviso.</li>
        </ol>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-900">
        <p><strong>NOTA SOBRE COBERTURA:</strong> No tenemos control sobre la cantidad de cobertura disponible dentro de su inmueble debido a limitaciones físicas del entorno (paredes, estructuras, interferencias). Colocamos el router en puntos intermedios para mitigar esto.</p>
      </div>

      {/* 3. SECCIÓN DE PAGOS EN LÍNEA Y SEGURIDAD AZUL (REQUISITO EXIGIDO POR AZUL) */}
      <div className="space-y-2 border-t pt-3">
        <h4 className="font-bold text-gray-900">3. Pagos en línea y procesamiento de tarjetas</h4>
        <ul className="list-disc ml-5 space-y-2 text-xs">
          <li><strong>Moneda de Transacción:</strong> Todas las facturas y cobros a través del portal en línea son procesados exclusivamente en <strong>Pesos Dominicanos (DOP$ / RD$)</strong>.</li>
          <li><strong>Pasarela de Pago Segura:</strong> Los pagos mediante tarjeta de crédito o débito son procesados a través de la pasarela certificada PCI-DSS de <strong>Azul (Servicios Digitales Popular)</strong>. <strong>ONERED JWG532, S.R.L. no almacena ni guarda números de tarjeta, fechas de vencimiento ni códigos de seguridad (CVV)</strong> en sus servidores.</li>
          <li><strong>Política de Devolución e Impugnaciones:</strong> Los pagos realizados a través del portal se aplican de forma inmediata al balance de la cuenta del cliente. Si se genera un pago por error o duplicado, el monto pagado será acreditado como un balance a favor para la siguiente factura. No se realizan reembolsos en efectivo por conceptos de instalación o pagos de mensualidad aplicados correctamente.</li>
        </ul>
      </div>

      {/* FICHA TÉCNICA / PIE DE SOPORTE */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">Contacto y soporte legal</p>
        <p><strong>Razón Social / Marca:</strong> ONERED JWG532, S.R.L.</p>
        <p><strong>RNC:</strong> 131-93314-9</p>
        <p><strong>Atención al Cliente:</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>Correo Electrónico:</strong> info@oneredrd.com</p>
        <p><strong>Ubicación:</strong> Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana.</p>
      </div>
      <h3><strong>Políticas relacionadas</strong></h3>

      <ul className="list-disc space-y-2 pl-6">
        <li><a href="#" onClick={openPrivacy} className="text-purple-600 hover:text-purple-800 cursor-pointer">Política de Privacidad</a></li>
        <li><a href="#" onClick={openCardSecurity} className="text-purple-600 hover:text-purple-800 cursor-pointer">Política de Seguridad para Datos de Tarjetas</a></li>
        <li><a href="#" onClick={openDeliveryPolicy} className="text-purple-600 hover:text-purple-800 cursor-pointer">Política de Entrega</a></li>
        <li><a href="#" onClick={openReturnsAndRefunds} className="text-purple-600 hover:text-purple-800 cursor-pointer">Políticas de Devolución, Cancelación y Reembolso</a></li>
      </ul>
    </div>
  );
}