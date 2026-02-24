import { useState, useEffect } from "react";
import { ArrowLeftRight, User } from "lucide-react"; 
import { useTranslation } from 'react-i18next';

// 1. Importación de Imagenes (Intactas)
import img1 from "/public/assets/images/plan1.jpg";
import img2 from "/public/assets/images/plan2.jpeg";
import img3 from "/public/assets/images/plan3.jpeg";
import img4 from "/public/assets/images/plan4.jpeg";
import img5 from "/public/assets/images/plan5.jpeg";
import img6 from "/public/assets/images/plan6.jpeg";

const imagenes = [img1, img2, img3, img4, img5, img6];

export default function Hero() {
  const { t } = useTranslation(); // Aquí se crea 't'
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000); 
    return () => clearInterval(intervalo);
  }, []);

  // --- OFERTAS CON TRADUCCIÓN CORREGIDA ---
  // La 'llave' es el primer parámetro, el 'texto por defecto' es el segundo
  const promoTexto = t('promo_texto', 'Aumenta de 6 a 30 Mbps por solo');
  const promoExtra = t('promo_extra', 'adicionales');

  const OFERTAS_MENSUALES = {
    0: { titulo: t('mes_0', "Enero Día de los Reyes Magos🤴🏽🚂:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    1: { titulo: t('mes_1', "Febrero Mes de la Patria 🇩🇴:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    2: { titulo: t('mes_2', "Batalla del 30 de Marzo ⚔️:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    3: { titulo: t('mes_3', "Revolución del 24 de Abril ⚔️:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    4: { titulo: t('mes_4', "Mayo Día de las Madres 🤰:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    5: { titulo: t('mes_5', "Junio Día del Maestro 👨🏽‍🏫:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    6: { titulo: t('mes_6', "Julio Día del Padre 👨🏽:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    7: { titulo: t('mes_7', "Agosto Día de la Restauración:🗣️"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    8: { titulo: t('mes_8', "Septiembre Mes de la Biblia 📚:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    9: { titulo: t('mes_9', "Octubre Día de la raza 🧑‍🧑‍🧒‍🧒:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    10: { titulo: t('mes_10', "Noviembre Día de la Constitución:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" },
    11: { titulo: t('mes_11', "Feliz Navidad 🎄:"), promo: <>{promoTexto} <span className="font-black underline ">RD$300</span> {promoExtra}</>, link: "https://chatone.oneredrd.com/hc/onered/es_DO/categories/oferta" }
  };

  const OFERTA_DEFAULT = { 
    titulo: "OneRedRD:", 
    promo: "Fibra Óptica Real en tu hogar",
    link: "#planes" 
  };

  const mesActual = new Date().getMonth();
  const ofertaDelMes = OFERTAS_MENSUALES[mesActual] || OFERTA_DEFAULT;

  return (
    <header className="relative overflow-hidden pt-10 pb-24 md:pt-24 md:pb-40 px-6">
      <div id="inicio" className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left relative">
          <div className="text-left relative group">
            <a 
              href={ofertaDelMes.link} 
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-50 border border-amber-200/60 rounded-full mb-8 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-amber-100 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-600"></span>
              </span>
              <span className="text-[10px] md:text-xs font-black text-emerald-800 uppercase tracking-[0.15em]">
                  {ofertaDelMes.titulo} <span className="text-emerald-600">{ofertaDelMes.promo}</span>
              </span>
              <span className="text-amber-400 text-xs ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 overflow-hidden">
            <span className="block animate-entrada-izq opacity-0">{t('nav_navega', 'Navega')}</span>
            <span className="text-blue-600 italic block animate-entrada-der opacity-0">{t('nav_sin_limites', 'sin límites.')}</span>
          </h1>
          
          <p className="mt-8 text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
            {t('desc', 'La fibra óptica más estable de RD llegó para quedarse. Conecta tu hogar hoy mismo con')} <span className="text-blue-600 font-bold">ONERED</span>.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <a href="https://bot.oneredrd.com/agendar-instalacion-shortcut" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-blue-300 text-center">
              {t('btn_solicitar', 'Solicitar Ahora')}
            </a>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <div className="flex -space-x-3 mr-3">
                  {[
                    { bg: "bg-blue-100", text: "text-blue-600" },
                    { bg: "bg-green-100", text: "text-green-600" },
                    { bg: "bg-orange-100", text: "text-orange-600" },
                    { bg: "bg-purple-100", text: "text-purple-600" },
                  ].map((style, i) => (
                    <div 
                      key={i} 
                      className={`w-9 h-9 rounded-full border-2 border-white ${style.bg} flex items-center justify-center shadow-sm transition-transform hover:scale-110 hover:z-10 cursor-pointer overflow-hidden`}
                    >
                      <User size={18} className={`${style.text}`} />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-black text-white">+1k</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-[10px]">★</span>
                    ))}
                  </div>
                  <p className="text-[11px] font-bold text-slate-600 tracking-tight leading-none mt-1">
                    {t('clientes', '+1,200 clientes felices en')} <span className="text-blue-600">{t('lugar', 'Los Alcarrizos')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO (SLIDER) */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 bg-white p-5 rounded-[2rem] shadow-xl z-20 border border-slate-50 animate-bounce-slow">
            <div className="flex items-center gap-4">
              <ArrowLeftRight 
                size={28} 
                className="text-blue-500 hover:scale-125 animate-impulso transition-transform" 
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase">{t('real_time', 'En tiempo real')}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-slate-700">1000</span>
                  <span className="text-sm font-black text-blue-500">Mbps</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3"></div>
            <div className="relative h-full w-full bg-slate-100 rounded-[3rem] overflow-hidden border-4 border-white">
               {imagenes.map((img, i) => (
                 <img key={i} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`} />
               ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}