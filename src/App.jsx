import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ConsultaFactura from './components/ConsultaFactura';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import LanguageSelector from './components/LanguageSelector';

// Importación de las páginas de respuesta de Azul
import PagoExitoso from './pages/PagoExitoso';
import PagoDeclinado from './pages/PagoDeclinado';
import PagoCancelado from './pages/PagoCancelado';

import './i18n';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <LanguageSelector />
      <Navbar />
      
      {/* Definición de Rutas de la Aplicación */}
      <Routes>
        {/* Ruta principal: Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Consulta y pago de facturas */}
        <Route path="/consulta-factura" element={<ConsultaFactura />} />

        {/* Rutas para Pago Aprobado / Exitoso */}
        <Route path="/pago-exitoso" element={<PagoExitoso />} />
        <Route path="/pago-completado" element={<PagoExitoso />} />

        {/* Rutas para Pago Rechazado / Declinado */}
        <Route path="/pago-declinado" element={<PagoDeclinado />} />
        <Route path="/pago-rechazado" element={<PagoDeclinado />} />

        {/* Ruta para Pago Cancelado */}
        <Route path="/pago-cancelado" element={<PagoCancelado />} />
      </Routes>

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;