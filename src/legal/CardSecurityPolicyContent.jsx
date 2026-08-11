export default function CardSecurityPolicyContent() {
  return (
    <div className="space-y-5 text-sm text-gray-700 leading-relaxed text-left">
      {/* ENCABEZADO Y MARCA */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 border-b pb-1">
          Política de Seguridad para la Transmisión de Datos de Tarjetas
        </h3>
        <p className="text-xs text-blue-600 font-medium mt-1">
          Protección de pagos con tarjeta · ONERED JWG532, S.R.L.
        </p>
      </div>

      {/* BANNER 3D SECURE Y LOGOS DE SEGURIDAD */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center shadow-sm space-y-2">
        <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase block">
          Autenticación 3D Secure
        </span>
        <div className="flex items-center justify-center gap-6 py-1">
          {/* Logo Visa Secure */}
          <img src="/assets/images/visalogo.webp" alt="Visa Secure Logo" className="h-14" />

          {/* Logo Mastercard ID Check */}
          <img src="/assets/images/martercardcheck.webp" alt="Mastercard ID Check Logo" className="h-14" />
        </div>
        <p className="text-[11px] text-gray-500">
          Validación de identidad en tiempo real mediante el banco emisor (Verified by Visa y MasterCard ID Check).
        </p>
      </div>

      <p className="text-xs">
        <strong>ONERED JWG532, S.R.L.</strong> utiliza pasarelas de pago certificadas para procesar transacciones con tarjetas de crédito y débito. La seguridad del tarjetahabiente es nuestra máxima prioridad en cada transacción realizada a través de nuestro portal web.
      </p>

      {/* 1. CIFRADO DE DATOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">1. Cifrado de Datos y Protocolos SSL/TLS</h4>
        <p className="text-xs">
          Toda la comunicación entre su navegador y nuestro sitio web se realiza mediante el protocolo seguro <strong>HTTPS (TLS 1.2 o superior)</strong>. La información sensible del tarjetahabiente se transmite cifrada utilizando algoritmos <strong>SSL (Secure Sockets Layer) y AES-256</strong> directamente hacia la entidad procesadora, garantizando la privacidad e integridad durante el tránsito.
        </p>
      </div>

      {/* 2. PROCESAMIENTO POR PASARELA CERTIFICADA */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">2. Procesamiento por Pasarela Certificada (Azul)</h4>
        <p className="text-xs">
          Los pagos en línea son capturados y procesados externamente por <strong>Azul (Servicios Digitales Popular, Banco Popular Dominicano)</strong>, plataforma certificada internacionalmente bajo el estándar de seguridad <strong>PCI-DSS</strong>. Los proveedores de servicios de pago solo utilizan la información necesaria para completar el proceso de cobro contratado.
        </p>
      </div>

      {/* 3. DATOS QUE NO ALMACENAMOS */}
      <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500 text-xs text-red-900">
        <strong className="block mb-1 font-bold">3. Datos Sensibles que NO Almacenamos:</strong>
        <p className="mb-1">De acuerdo con las regulaciones de la industria de tarjetas, ONERED JWG532, S.R.L. no recopila, procesa ni almacena en sus servidores:</p>
        <ul className="list-disc pl-5 space-y-0.5">
          <li>Número completo de la tarjeta de crédito o débito (PAN).</li>
          <li>Código de validación / seguridad de la tarjeta (CVV / CVC).</li>
          <li>Fecha de vencimiento o PIN de la tarjeta.</li>
          <li>Códigos clave de autenticación 3DS enviados por el banco emisor.</li>
        </ul>
      </div>

      {/* 4. RESPONSABILIDADES DEL TARJETAHABIENTE */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">4. Responsabilidades del Tarjetahabiente</h4>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>Asegurarse de estar navegando en el dominio oficial antes de ingresar información de pago.</li>
          <li>No compartir con terceros los códigos temporales de autenticación (OTP / 3DS) provistos por su entidad bancaria.</li>
          <li>Monitorear sus estados de cuenta y reportar inmediatamente cualquier cargo no reconocido a su banco emisor y a nuestro equipo de atención.</li>
          <li>Mantener actualizado el antivirus y el navegador en los dispositivos utilizados para el pago.</li>
        </ul>
      </div>

      {/* 5. MONEDA DE OPERACIÓN */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">5. Moneda y Montos Procesados</h4>
        <p className="text-xs">
          Todas las transacciones en línea se procesan exclusivamente en <strong>Pesos Dominicanos (RD$ / DOP$)</strong>. El valor debitado de su cuenta corresponderá exactamente al balance de la factura de servicio generada antes de autorizar el pago.
        </p>
      </div>

      {/* FICHA CORPORATIVA Y CONTACTO DE INCIDENTES */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">Soporte de Pagos y Reporte de Incidentes</p>
        <p><strong>Razón Social:</strong> ONERED JWG532, S.R.L.</p>
        <p><strong>Nombre Comercial:</strong> ONERED</p>
        <p><strong>RNC:</strong>  131-93314-9</p>
        <p><strong>Sector:</strong> Telecomunicaciones (Servicios de Acceso a Internet)</p>
        <p><strong>Moneda de compra:</strong> Pesos dominicanos (RD$ / DOP$)</p>
        <p><strong>Correo Electrónico:</strong> info@oneredrd.com</p>
        <p><strong>Teléfonos:</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>Ubicación:</strong> Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana</p>
      </div>
    </div>
  );
}