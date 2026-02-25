import { X } from "lucide-react";

const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-2xl font-black text-slate-900">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Contenido (Scrollable) */}
        <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed">
          {content}
        </div>

        {/* Footer con botón de cerrar */}
        <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;