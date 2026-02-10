import { useState } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [showLangs, setShowLangs] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button 
          onClick={() => setShowLangs(!showLangs)}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 py-2 px-3 rounded-xl transition-all active:scale-95 group border border-slate-200/50"
        >
          <Languages size={16} className="text-blue-600" />
          <span className="text-[10px] font-black uppercase text-slate-700">
            {i18n.language ? i18n.language.split('-')[0] : 'es'}
          </span>
          <ChevronDown size={12} className={`text-slate-400 transition-transform duration-300 ${showLangs ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {showLangs && (
        /* Se despliega hacia abajo a la derecha */
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-[100] animate-in fade-in zoom-in duration-200">
          {[
            { code: 'es', label: 'Español', flag: '🇩🇴' },
            { code: 'en', label: 'English', flag: '🇺🇸' },
            { code: 'fr', label: 'Français', flag: '🇫🇷' }
          ].map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setShowLangs(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs font-bold flex items-center justify-between hover:bg-blue-50 transition-colors ${i18n.language.startsWith(lang.code) ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600'}`}
            >
              {lang.label}
              <span>{lang.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}