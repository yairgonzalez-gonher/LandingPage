import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { TIKENTA_LOGIN_URL, navLinks } from './tikentaData';

export default function TikentaNav({ onDemoOpen, onDownloadOpen }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#e4e4e7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo-mark.svg" alt="GONSoftLab" className="h-8 w-auto" />
          </Link>
          <span className="hidden sm:block h-6 w-px bg-gray-200" />
          <a href="#inicio" className="font-bold text-[17px] text-carbon tracking-tight">
            TIKENTA
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-600" aria-label="Navegación de Tikenta">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-steel transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onDownloadOpen}
            className="hidden lg:inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-bold text-carbon hover:border-steel hover:text-steel transition-colors"
          >
            Descargar soluciones
          </button>
          <a
            href={TIKENTA_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-bold text-carbon hover:border-steel hover:text-steel transition-colors"
          >
            Iniciar sesión
          </a>
          <button
            type="button"
            onClick={onDemoOpen}
            className="inline-flex items-center rounded-lg bg-steel px-3.5 py-2.5 text-sm font-bold text-white hover:bg-steel-700 transition-colors shadow-[0_8px_22px_rgba(70,130,180,0.28)]"
          >
            Solicitar demo
          </button>
          <button
            type="button"
            className="lg:hidden p-2 text-carbon"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2.5 font-semibold text-carbon"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="block w-full text-left py-2.5 font-semibold text-carbon"
            onClick={() => {
              setOpen(false);
              onDownloadOpen?.();
            }}
          >
            Descargar soluciones
          </button>
          <a
            href={TIKENTA_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2.5 font-semibold text-carbon"
            onClick={() => setOpen(false)}
          >
            Iniciar sesión
          </a>
          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-steel px-3.5 py-2.5 text-sm font-bold text-white"
            onClick={() => {
              setOpen(false);
              onDemoOpen?.();
            }}
          >
            Solicitar demo
          </button>
        </div>
      )}
    </header>
  );
}
