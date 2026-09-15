import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';

const defaultLinks = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Soluciones', id: 'soluciones' },
  { label: 'Estadísticas', id: 'estadisticas' },
  { label: 'Testimonios', id: 'testimonios' },
  { label: 'Contacto', id: 'contacto' },
];

export default function Navbar({ links = defaultLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-md py-2 border-b border-gray-200'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Logo
          wordmarkClassName={scrolled ? 'text-carbon' : 'text-white'}
          imgClassName="h-9 w-auto"
        />

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                className={`cursor-pointer text-sm font-semibold transition-colors hover:text-steel ${
                  scrolled ? 'text-carbon' : 'text-white'
                }`}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

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

      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobile}
      />
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="mt-20 flex flex-col items-start px-6">
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
        </nav>
      </div>
    </nav>
  );
}
