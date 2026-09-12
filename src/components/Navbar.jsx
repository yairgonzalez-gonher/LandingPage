import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';

export default function Navbar({ links = ['Home', 'Features', 'About', 'Products', 'Testimonials', 'Pricing', 'Contact'] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
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
          imgClassName="h-10 w-auto"
        />
        <ul className="hidden lg:flex gap-6 xl:gap-8">
          {links.map((section) => (
            <li
              key={section}
              className={`cursor-pointer transition-colors hover:text-steel ${
                scrolled ? 'text-carbon' : 'text-white'
              }`}
            >
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`lg:hidden text-2xl focus:outline-none ${
            scrolled ? 'text-carbon' : 'text-white'
          }`}
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
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
          {links.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth
              duration={500}
              offset={-80}
              className="w-full py-3 text-lg text-carbon hover:text-steel transition-colors"
              onClick={closeMobile}
            >
              {section}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}
