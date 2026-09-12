import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-carbon border-t border-carbon-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Logo
              className="mb-4"
              wordmarkClassName="text-white"
              imgClassName="h-10 w-auto"
            />
            <p className="text-gray-400 mb-4">
              Soluciones tecnológicas precisas para hacer crecer tu negocio.
              Transformamos ideas en realidad.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-steel transition-colors text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">
              Enlaces
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-steel transition-colors">Inicio</a></li>
              <li><a href="#features" className="hover:text-steel transition-colors">Características</a></li>
              <li><a href="#about" className="hover:text-steel transition-colors">Acerca de</a></li>
              <li><a href="#pricing" className="hover:text-steel transition-colors">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-steel transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-steel transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-steel transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-carbon-light pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GON Soft Lab. Soluciones tecnológicas precisas.
          </p>
        </div>
      </div>
    </footer>
  );
}
