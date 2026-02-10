import PlanCard from './PlanCard';
import { useTranslation } from 'react-i18next'; // Importamos el hook
import { 
  Wifi, 
  Gamepad2, 
  Zap, 
  Rocket, 
  Building2, 
  Globe2, ArrowDownCircle, ArrowUpCircle,
} from "lucide-react";

export default function Planes() {
  const { t } = useTranslation();

  const iconProps = {
    size: 30,
    strokeWidth: 2.5,
    className: "transition-transform group-hover:scale-110 duration-300"
  };

  return (
    <section id="planes" className="py-24 px-6 max-w-7xl mx-auto bg-white">
      {/* Encabezado con estilo OneRed */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">
          {t('planes_titulo_1', 'Nuestros Planes de')} <span className="text-blue-600">{t('planes_titulo_2', 'Internet')}</span>
        </h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div>
        <p className="text-slate-500 mt-6 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          {t('planes_subtitle', 'La mayor variedad de velocidades para que solo pagues por lo que necesitas, con tecnología 100% Fibra.')}
        </p>
      </div>

      {/* Grid de Planes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <PlanCard 
          nombre={t('plan_basico', 'Plan Básico')}
          bajada="30"    
          subida="20"    
          precio="1,300"
          icon={<Wifi {...iconProps} />}
        />  

        <PlanCard 
          nombre={t('plan_express', 'Plan Express')}
          bajada="50"    
          subida="35"
          precio="1,500"
          destacado={true}
          icon={<ArrowDownCircle {...iconProps} />}
        />

        <PlanCard 
          nombre={t('plan_esencial', 'Plan Esencial')}
          bajada="60"
          subida="45"
          precio="2,200"
          icon={<Zap {...iconProps} />}
        />
        
        <PlanCard 
          nombre={t('plan_avanzado', 'Plan Avanzado')}
          bajada="80"    
          subida="50"
          precio="2,500"
          icon={<Rocket {...iconProps} />}
        />

        <PlanCard 
          nombre={t('plan_business', 'Plan Business')}
          bajada="100"    
          subida="70"
          precio="3,800"
          icon={<Building2 {...iconProps} />}
        />

        <PlanCard 
          nombre={t('plan_ultra', 'Plan Ultra')}
          bajada="200"    
          subida="100"
          megas="1,000"
          precio="3,500"
          icon={<Globe2 {...iconProps} />}
        />
      </div>

      <div className="mt-20 py-8 border-t border-slate-50 text-center">
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">
          {t('planes_footer', 'Conectividad Garantizada • OneRed')}
        </p>
      </div>
    </section>
  );
}