import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import { SITE_LOGIN_URL } from '../config/site';

const defaultLinks = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Soluciones', id: 'soluciones' },
  { label: 'Estadísticas', id: 'estadisticas' },
  { label: 'Testimonios', id: 'testimonios' },
  { label: 'Contacto', id: 'contacto' },
];

export default function Navbar({
  links = defaultLinks,
  onDownloadOpen,
  onDemoOpen,
  loginUrl = SITE_LOGIN_URL,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);
  const linkClass = scrolled
    ? 'text-carbon hover:text-steel'
    : 'text-white hover:text-steel-400';

  const secondaryBtn = scrolled
    ? 'border-gray-200 bg-white text-carbon hover:border-steel hover:text-steel'
    : 'border-white/40 bg-white/10 text-white hover:bg-white/20';

  const primaryBtn = scrolled
    ? 'bg-steel text-white hover:bg-steel-700 shadow-[0_8px_22px_rgba(70,130,180,0.28)]'
    : 'bg-white text-carbon hover:bg-gris-claro';

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-md py-2 border-b border-gray-200'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Logo
          wordmarkClassName={scrolled ? 'text-carbon' : 'text-white'}
          imgClassName="h-9 w-auto"
        />

        <ul className="hidden xl:flex items-center gap-6">
          {links.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                className={`cursor-pointer text-sm font-semibold transition-colors ${linkClass}`}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onDownloadOpen}
            className={`hidden lg:inline-flex items-center rounded-lg border px-3 py-2.5 text-sm font-bold transition-colors ${secondaryBtn}`}
          >
            Descargar soluciones
          </button>
          <a
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center rounded-lg border px-3 py-2.5 text-sm font-bold transition-colors ${secondaryBtn}`}
          >
            Iniciar sesión
          </a>
          <button
            type="button"
            onClick={onDemoOpen}
            className={`hidden sm:inline-flex items-center rounded-lg px-3.5 py-2.5 text-sm font-bold transition-colors ${primaryBtn}`}
          >
            Solicitar demo
          </button>

          <button
            className={`lg:hidden text-2xl focus:outline-none ${
              scrolled ? 'text-carbon' : 'text-white'
            }`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobile}
      />
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="mt-20 flex flex-col items-start px-6 pb-8">
          {links.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-80}
              className="w-full py-3 text-lg font-semibold text-carbon hover:text-steel transition-colors cursor-pointer"
              onClick={closeMobile}
            >
              {item.label}
            </ScrollLink>
          ))}

          <div className="mt-4 w-full space-y-2">
            <button
              type="button"
              onClick={() => {
                closeMobile();
                onDownloadOpen?.();
              }}
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm font-bold text-carbon hover:border-steel hover:text-steel"
            >
              Descargar soluciones
            </button>
            <a
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm font-bold text-carbon hover:border-steel hover:text-steel"
              onClick={closeMobile}
            >
              Iniciar sesión
            </a>
            <button
              type="button"
              onClick={() => {
                closeMobile();
                onDemoOpen?.();
              }}
              className="w-full rounded-lg bg-steel px-3.5 py-2.5 text-sm font-bold text-white hover:bg-steel-700"
            >
              Solicitar demo
            </button>
          </div>
        </nav>
      </div>
    </nav>
  );
}
