import Hero from '../components/Hero';
import Features from '../components/Features';
import Nosotros from '../components/Nosotros';
import Cobertura from '../components/Cobertura';
import Planes from '../components/Planes';
import Contacto from '../components/Contacto';
import LocationMap from '../components/LocationMap';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Nosotros />
      <Cobertura />
      <Planes />
      <Contacto />
      <LocationMap />
    </>
  );
}