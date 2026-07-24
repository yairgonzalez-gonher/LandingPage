import { useTheme } from '../context/ThemeContext';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className={`bg-${theme.bg === 'gray-900' ? 'gray-800' : 'white'} border-t border-${theme.bg === 'gray-900' ? 'gray-700' : 'gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-2xl font-bold mb-4 text-${theme.primary}-600`}>TuMarca</h3>
            <p className={`text-${theme.text === 'white' ? 'gray-300' : 'gray-600'} mb-4`}>
              Soluciones profesionales para hacer crecer tu negocio. 
              Transformamos ideas en realidad.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-${theme.text === 'white' ? 'gray-400' : 'gray-600'} hover:text-${theme.primary}-600 transition-colors text-xl`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-4 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
              Enlaces
            </h4>
            <ul className={`space-y-2 text-${theme.text === 'white' ? 'gray-300' : 'gray-600'}`}>
              <li><a href="#home" className={`hover:text-${theme.primary}-600 transition-colors`}>Inicio</a></li>
              <li><a href="#features" className={`hover:text-${theme.primary}-600 transition-colors`}>Características</a></li>
              <li><a href="#about" className={`hover:text-${theme.primary}-600 transition-colors`}>Acerca de</a></li>
              <li><a href="#pricing" className={`hover:text-${theme.primary}-600 transition-colors`}>Precios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-4 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
              Legal
            </h4>
            <ul className={`space-y-2 text-${theme.text === 'white' ? 'gray-300' : 'gray-600'}`}>
              <li><a href="#" className={`hover:text-${theme.primary}-600 transition-colors`}>Privacidad</a></li>
              <li><a href="#" className={`hover:text-${theme.primary}-600 transition-colors`}>Términos</a></li>
              <li><a href="#" className={`hover:text-${theme.primary}-600 transition-colors`}>Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className={`border-t border-${theme.bg === 'gray-900' ? 'gray-700' : 'gray-200'} pt-8 text-center`}>
          <p className={`text-${theme.text === 'white' ? 'gray-400' : 'gray-600'}`}>
            © {new Date().getFullYear()} Tu Marca. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
