import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ConsultaFactura from './components/ConsultaFactura'; // Tu nuevo componente
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import LanguageSelector from './components/LanguageSelector';
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
        
        {/* Ruta dedicada para Consultar y Pagar Factura */}
        <Route path="/consulta-factura" element={<ConsultaFactura />} />
      </Routes>

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;