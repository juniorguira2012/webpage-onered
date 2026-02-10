import img1 from "/public/assets/images/teleferico-alcarrizos.jpeg";
import { Flag, Telescope, HeartHandshake } from "lucide-react";
import React from "react";
import { useTranslation } from 'react-i18next'; // Importamos el hook

export default function Nosotros() {
  const { t } = useTranslation();

  const pilares = [
    { 
      titulo: t('nosotros_mision_titulo', "Misión"), 
      desc: t('nosotros_mision_desc', "Brindar soluciones tecnológicas e innovadoras, enfocadas a satisfacer las necesidades de nuestros clientes a través de un equipo humano especializado, y el uso de equipos de alta calidad que garanticen la estabilidad y confianza a los más altos estándares."), 
      icon: <Flag size={32} strokeWidth={2} /> 
    },
    { 
      titulo: t('nosotros_vision_titulo', "Visión"), 
      desc: t('nosotros_vision_desc', "Ser el proveedor de servicios de internet de mayor calidad y estabilidad, garantizando así confianza en los usuarios de nuestra red, de tal modo que nuestros servicios llenen todas las expectativas de los clientes."), 
      icon: <Telescope size={32} strokeWidth={2} /> 
    },
    { 
      titulo: t('nosotros_valores_titulo', "Valores"), 
      desc: t('nosotros_valores_desc', "Integridad (actuamos conforme a las leyes), Innovación (vanguardia tecnológica), Flexibilidad (adaptación a las necesidades) y Compromiso con nuestros clientes y colaboradores."), 
      icon: <HeartHandshake size={32} strokeWidth={2} /> 
    }
  ];

  return (
    <section id="nosotros" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Tarjeta Grande Superior */}
        <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 mb-9 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-9 grid md:grid-cols-2">
            
            {/* Columna de Texto */}
            <div className="p-8 md:p-9 flex flex-col justify-center order-1 md:order-1">
              <h2 className="text-4xl font-black text-slate-800 mb-8 tracking-tighter">
                {t('nosotros_quienes_somos', '¿Quiénes somos?')}
              </h2>
              
              <div className="text-slate-600 leading-loose text-lg text-justify font-medium tracking-tight">
                <p className="mb-6">
                  <span className="text-slate-900 font-extrabold border-b-2 border-blue-100/20 pb-0.5">
                    ONERED
                  </span>{" "}
                  {t('nosotros_p1', 'es una empresa de telecomunicaciones dedicada a la prestación de servicios de acceso a Internet para satisfacer las necesidades de nuestros clientes, llevando conectividad mediante fibra óptica y radioenlaces de la más alta calidad del mercado.')}
                </p>
                <p>
                  {t('nosotros_p2_1', 'Somos una empresa que labora en un ambiente familiar, logrando así que nuestros usuarios y colaboradores se sientan parte de la familia')}{" "}
                  <span className="text-blue-500 font-black">ONERED</span>.
                </p>
              </div>
            </div>

            {/* Columna de Imagen */}
            <div className="relative min-h-[350px] md:min-h-full order-1 md:order-2 bg-slate-50 flex items-center justify-center p-2 overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
              <div className="relative w-170px h-150px transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
                <img 
                  src={img1} 
                  alt="Imagen teleferico alcarrizos" 
                  className="w-full h-full object-contain rounded-[2rem] shadow-2xl shadow-blue-900/10"
                />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-slate-900/5"></div>
              </div>

              {/* Badge de Ubicación */}
              <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 transition-transform group-hover:translate-x-[-10px]">
                <div className="relative flex">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full relative"></div>
                </div>
                <span className="text-[11px] font-black uppercase text-slate-800 tracking-[0.15em]">
                  {t('lugar', 'Los Alcarrizos')}
                </span>
              </div>
            </div>   
          </div>
        </div>

        {/* Tres Tarjetas Inferiores */}
        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((pilar, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-[1.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 hover:-translate-y-3 transition-all duration-300 flex flex-col items-center text-center"
              >
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                {React.cloneElement(pilar.icon, { 
                  className: "text-blue-600 group-hover:text-white transition-colors duration-300",
                })}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tighter">
                {pilar.titulo}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed text-justify [text-justify:inter-word] hyphens-auto">
                {pilar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}