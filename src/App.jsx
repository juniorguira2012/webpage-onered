import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Features from './components/Features';
import Cobertura from './components/Cobertura';
import Planes from './components/Planes';
import Contacto from './components/Contacto';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import LanguageSelector from './components/LanguageSelector';
import './i18n';

//import WhatsAppBtn from './components/WhatsAppBtn';
// Impedir o uso de atalhos de teclado para abrir o DevTools


function App() {
  return (
    <div className="min-h-screen bg-white">
      <LanguageSelector />
      <Navbar />
      <Hero />
      <Features />
      <Nosotros />
      <Cobertura />
      <Planes />
      <Contacto />
      <LocationMap />
      <Footer />
      <ChatWidget />
      {/* <WhatsAppBtn /> */}
      {/* Aquí iremos agregando más secciones como Footer, Cobertura, etc. */}
    </div>
  );
}

export default App;