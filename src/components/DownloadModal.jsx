import { useEffect } from 'react';
import { FaWindows, FaApple, FaLinux, FaDownload } from 'react-icons/fa';
import { SITE_DOWNLOADS } from '../config/site';

const icons = {
  windows: FaWindows,
  macos: FaApple,
  linux: FaLinux,
};

export default function DownloadModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-5 bg-carbon/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-title"
        className="w-full sm:max-w-lg max-h-[94vh] overflow-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-5 sm:px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Descargas</p>
            <h2 id="download-title" className="text-2xl font-bold text-carbon mt-1">
              Plataforma de escritorio
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Elige tu sistema operativo para descargar la aplicación de escritorio.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="h-9 w-9 rounded-lg border border-gray-200 text-xl leading-none hover:border-steel hover:text-steel"
          >
            ×
          </button>
        </div>

        <div className="px-5 sm:px-6 py-5 space-y-3">
          {SITE_DOWNLOADS.map((item) => {
            const Icon = icons[item.id] || FaDownload;
            const ready = Boolean(item.href);

            return (
              <a
                key={item.id}
                href={ready ? item.href : undefined}
                aria-disabled={!ready}
                onClick={(event) => {
                  if (!ready) event.preventDefault();
                }}
                className={`flex items-center gap-4 rounded-xl border px-4 py-4 transition-colors ${
                  ready
                    ? 'border-gray-200 hover:border-steel hover:bg-steel-50 cursor-pointer'
                    : 'border-gray-100 bg-gray-50 opacity-70 cursor-not-allowed'
                }`}
                download={ready || undefined}
              >
                <span className="h-11 w-11 rounded-xl bg-carbon text-steel grid place-items-center text-xl shrink-0">
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-carbon">{item.name}</span>
                  <span className="block text-sm text-gray-500">
                    {ready ? item.detail : 'Próximamente disponible'}
                  </span>
                </span>
                <FaDownload className={`shrink-0 ${ready ? 'text-steel' : 'text-gray-300'}`} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
