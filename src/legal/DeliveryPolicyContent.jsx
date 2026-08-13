export default function DeliveryPolicyContent() {
  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-left">
      {/* ENCABEZADO Y MARCA */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 border-b pb-1">
          Política de Entrega y Activación de Servicios
        </h3>
        <p className="text-xs text-blue-600 font-medium mt-1">
          Servicios de telecomunicaciones · ONERED (JWG532, S.R.L.)
        </p>
      </div>

      <p className="text-xs text-gray-600">
        En <strong>ONERED (JWG532, S.R.L.)</strong> prestamos servicios de conectividad y telecomunicaciones de naturaleza digital e instalación técnica en sitio. Esta política describe los procedimientos y tiempos bajo los cuales se efectúa la entrega, instalación y activación de nuestros servicios pagados a través de la pasarela digital de <strong>Servicios Digitales Popular (Azul)</strong>.
      </p>

      {/* 1. NATURALEZA DEL SERVICIO */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">1. Naturaleza del Servicio</h4>
        <p className="text-xs">
          Nuestros productos principales corresponden a servicios de acceso a Internet por fibra óptica y soluciones de conectividad empresarial. No vendemos ni enviamos bienes físicos por mensajería o correo postal; la <strong>"entrega"</strong> del servicio consiste en la adecuación técnica en la dirección contratada y la posterior activación digital de la conexión.
        </p>
      </div>

      {/* 2. PROCESO DE INSTALACIÓN Y REQUISITOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">2. Proceso de Instalación en Sitio</h4>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li><strong>Verificación y Agenda:</strong> Una vez aprobada la solicitud y el pago inicial, nuestro departamento técnico contacta al cliente en un plazo de 24 a 48 horas para agendar la visita de instalación.</li>
          <li><strong>Presencia Obligatoria:</strong> Es indispensable la presencia de un representante mayor de edad en el inmueble para autorizar el acceso y supervisar el despliegue del cableado y equipos.</li>
          <li><strong>Alcance Estándar:</strong> Incluye acometida de fibra óptica / cableado exterior, instalación de una (1) unidad óptica/router (ONU/ONT) y pruebas de rendimiento de conexión.</li>
        </ul>
      </div>

      {/* 3. PLAZOS DE ENTREGA Y ACTIVACIÓN */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">3. Plazos de Activación del Servicio</h4>
        <p className="text-xs">
          La activación efectiva del servicio se realiza habitualmente en un período de <strong>1 a 3 días laborables</strong> posteriores a la confirmación de la solicitud y el pago del cargo de instalación correspondiente. Factores externos (condiciones climáticas, permisología comunitaria o zonas de difícil acceso) pueden incidir en el tiempo final de entrega.
        </p>
      </div>

      {/* 4. EQUIPOS EN COMODATO Y COSTOS */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">4. Equipos en Comodato y Cargos de Instalación</h4>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li><strong>Equipos en Préstamo:</strong> Los equipos entregados (ONT, routers, antenas) permanecen bajo propiedad de ONERED JWG532, S.R.L. en calidad de comodato y deberán ser devueltos en buen estado al momento de la cancelación.</li>
          <li><strong>Cargos de Instalación:</strong> El pago por concepto de instalación es único y no reembolsable, cubriendo los gastos operativos de despliegue de infraestructura, materiales y mano de obra.</li>
        </ul>
      </div>

      {/* 5. ACREDITACIÓN DE PAGOS EN LÍNEA */}
      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 text-xs text-blue-900">
        <strong className="block font-bold mb-0.5">5. Pagos en Línea y Acreditación de Facturas:</strong>
        Los pagos de facturas mensuales o cargos de reconexión procesados a través de nuestra pasarela de pagos en línea (Azul) se acreditan e impactan en el sistema comercial en un tiempo estimado de <strong>24 a 48 horas laborables</strong> tras la validación de la transacción. El comprobante digital emitido al finalizar la compra sirve como evidencia oficial de pago.
      </div>

      {/* 6. ÁREA DE COBERTURA Y MONEDA */}
      <div>
        <h4 className="font-bold text-gray-900 mb-1">6. Cobertura y Moneda de Operación</h4>
        <p className="text-xs">
          Prestamos servicios en la República Dominicana, enfocados en la zona metropolitana de Santo Domingo, Santo Domingo Oeste (Los Alcarrizos) y áreas con disponibilidad de fibra óptica. Todos los cargos de instalación, mensualidades y adiciones se expresan y cobran exclusivamente en <strong>Pesos Dominicanos (RD$ / DOP$)</strong>.
        </p>
      </div>

      {/* FICHA CORPORATIVA Y SERVICIO AL CLIENTE */}
      <div className="bg-gray-50 p-4 rounded-lg text-xs space-y-1 text-gray-600 border border-gray-200 mt-4">
        <p className="font-bold text-gray-800 text-sm mb-1">Servicio al Cliente y Datos de Contacto</p>
        <p><strong>Razón Social:</strong> ONERED JWG532, S.R.L.</p>
        <p><strong>Nombre Comercial:</strong> ONERED</p>
        <p><strong>RNC:</strong> 131-93314-9</p>
        <p><strong>Teléfonos:</strong> (809) 422-5424 / (809) 447-4575</p>
        <p><strong>Correo Electrónico:</strong> info@oneredrd.com</p>
        <p><strong>Dirección Física:</strong> Los Alcarrizos, Calle Lebrón #60, Santo Domingo Oeste, República Dominicana</p>
        <p><strong>Moneda de compra:</strong> Pesos dominicanos (RD$ / DOP$)</p>
      </div>
    </div>
  );
}