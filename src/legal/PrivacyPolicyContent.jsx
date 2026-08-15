export default function PrivacyPolicyContent() {
  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-left">
      <p>
        <strong>ONERED</strong> (RNC 131-93314-9),
        con domicilio en Santo Domingo Oeste, República Dominicana, se compromete a proteger la privacidad de los datos personales de sus clientes, visitantes del sitio web y usuarios de sus servicios de telecomunicaciones y pagos en línea.
      </p>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">1. Datos que recopilamos</h4>
        <p className="mb-2">Podemos recopilar las siguientes categorías de información:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Informes de identificación:</strong> nombre, cédula, dirección, teléfono y correo electrónico.</li>
          <li><strong>Información de servicio:</strong> plan contratado, historial de facturación, consumo y soporte técnico.</li>
          <li><strong>Registros de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y cookies técnicas del sitio web.</li>
          <li><strong>Datos de pago:</strong> referencias de transacción, comprobantes y autorizaciones. Los datos completos de tarjeta son procesados exclusivamente por la pasarela certificada PCI-DSS (Azul); ONERED no almacena números de tarjeta ni códigos CVV.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">2. Finalidad del tratamiento</h4>
        <p className="mb-2">Utilizamos sus datos para:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Prestar, facturar y dar soporte a los servicios de telecomunicaciones.</li>
          <li>Procesar pagos en línea y emitir comprobantes.</li>
          <li>Cumplir obligaciones legales, tributarias y regulatorias (DGII, INDOTEL).</li>
          <li>Comunicarnos sobre el estado de su cuenta, facturas y cambios de servicio.</li>
          <li>Mejorar la seguridad y funcionamiento de nuestros sistemas.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">3. Compartición de datos</h4>
        <p>
          Podemos compartir información con proveedores que nos ayudan a operar el negocio, incluyendo pasarelas de pago (Azul), sistemas de gestión (Mikrowisp) y entidades reguladoras cuando la ley lo exija. Estos terceros están obligados contractualmente a proteger sus datos.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">4. Seguridad</h4>
        <p>
          Implementamos medidas técnicas y organizativas para proteger la información personal, incluyendo cifrado TLS en la transmisión de datos y controles de acceso a nuestros sistemas internos.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">5. Derechos del titular</h4>
        <p>
          Usted puede solicitar acceso, rectificación o eliminación de sus datos personales, así como oponerse a ciertos tratamientos, contactando a <strong>info@oneredrd.com</strong>. Responderemos en un plazo razonable conforme a la legislación dominicana aplicable.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">6. Cookies</h4>
        <p>
          Nuestro sitio utiliza cookies esenciales para el funcionamiento de la plataforma y la experiencia de pago. Puede configurar su navegador para rechazar cookies no esenciales, aunque algunas funciones podrían verse limitadas.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">7. Cambios a esta política</h4>
        <p>
          Podemos actualizar esta política periódicamente. La versión vigente estará publicada en esta página con la fecha de última actualización.
        </p>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600">
        <p className="font-bold text-gray-800 text-sm mb-2">Servicio al cliente</p>
        <p><strong>ONERED</strong></p>
        <p><strong>Teléfono:</strong> +1 (809) 422-5424 / (809) 447-4575</p>
        <p><strong>Correo electrónico:</strong> info@oneredrd.com</p>
        <p><strong>Dirección:</strong> Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana</p>
      </div>
    </div>
  );
}