import { useState } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [showLangs, setShowLangs] = useState(false);

  return (
    <div className="fixed top-24 right-6 z-[9999]"> 
      {/* z-[9999] para que siempre esté por encima de todo */}
      <div className="relative">
        <button 
          onClick={() => setShowLangs(!showLangs)}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200 py-2.5 px-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-95 group"
        >
          <Languages size={18} className="text-blue-600 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-black uppercase text-slate-700">
            {i18n.language ? i18n.language.split('-')[0] : 'es'}
          </span>
          <ChevronDown size={14} className={`text-slate-400 transition-transform ${showLangs ? 'rotate-180' : ''}`} />
        </button>

        {showLangs && (
          <div className="absolute right-0 mt-3 w-40 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-200">
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
                className={`w-full text-left px-4 py-3 text-sm font-bold flex items-center justify-between hover:bg-blue-50 transition-colors ${i18n.language.startsWith(lang.code) ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600'}`}
              >
                {lang.label}
                <span>{lang.flag}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}