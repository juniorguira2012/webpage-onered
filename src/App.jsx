import React, { useState } from "react"; // CORRECCIÓN: Faltaba importar React y useState
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Features from './components/Features';
import Cobertura from './components/Cobertura';
import Planes from './components/Planes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
//import { translations } from "./translations"; // Verifica que el archivo esté en esa carpeta

function App() {
  // Estado global del idioma
  const [lang, setLang] = useState(localStorage.getItem("lang") || "es");

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar cambia el estado global */}
      <Navbar lang={lang} setLang={setLang}/>
      
      {/* Los componentes consumen el estado global */}
      <Hero lang={lang} />
      <Features lang={lang} />
      <Nosotros lang={lang} />
      <Cobertura lang={lang} />
      <Planes lang={lang} />
      <Contacto lang={lang} />
      <Footer lang={lang} />
      <ChatWidget lang={lang} />
    </div>
  );
}

export default App;