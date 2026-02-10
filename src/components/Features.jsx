import { useTranslation } from 'react-i18next';
import {  ShieldCheck, Stamp, Headphones, Cable } from "lucide-react"; // Asegúrate de importar tus iconos

export default function Features() {
  const { t } = useTranslation();

  // Definimos el array de features dentro del componente para que 't' funcione
  const features = [
    {
      icon: <Cable size={28} />,
      title: t('feat_fibra_title', 'Fibra Óptica 100%'),
      desc: t('feat_fibra_desc', 'Tecnología FTTH que garantiza la velocidad contratada.')
    },
    {
      icon: <ShieldCheck size={28} />,
      title: t('feat_seguridad_title', 'Conexión Segura'),
      desc: t('feat_seguridad_desc', 'Navega protegido con nuestra red de fibra óptica de última generación.')
    },
    {
      icon: <Stamp size={28} />,
      title: t('feat_contrato_title', 'Libre de contrato'),
      desc: t('feat_contrato_desc', 'Creemos en la libertad. Sin penalidades escondidas.')
    },
    {
      icon: <Headphones size={28} />,
      title: t('feat_soporte_title', 'Soporte Especializado'),
      desc: t('feat_soporte_desc', 'Atención al Cliente eficaz listo para asistirte.')
    }
  ];

  return (
    <section className="relative z-0 pt-12 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              {/* Icono con círculo moderno - Manteniendo tus estilos exactos */}
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-black text-xl mb-3 text-slate-900 tracking-tighter uppercase">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[250px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}