import { MapPin, Navigation, Clock } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function LocationMap() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Columna de Información */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase mb-4">
              <MapPin size={14} />
              {t('map_donde_estamos', 'Ubicación')}
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              {t('map_visitanos', 'Visita nuestra oficina central')}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <p className="text-slate-600 font-medium">
                  Calle Lebrón 60, Los Alcarrizos, <br />Santo Domingo, RD.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <div className="text-sm text-slate-600">
                  <p className="font-bold text-slate-900">{t('map_horario', 'Horario de atención:')}</p>
                  <p>Lunes a Viernes: 9:00 AM – 6:00 PM</p>
                  <p>Sábados: 9:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/KxVPwJFFgqtSqtU17" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              <Navigation size={20} />
              {t('map_como_llegar', 'Cómo llegar')}
            </a>
          </div>

          {/* Columna del Mapa (Usando tu iframe) */}
          <div className="lg:col-span-2 h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.259976820416!2d-70.05228085733947!3d18.525964850901595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaff5b2a148eae5%3A0xd646e7bb65b7cffb!2sOneRed!5e0!3m2!1ses-419!2sdo!4v1771874498140!5m2!1ses-419!2sdo" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación OneRed"
              className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}