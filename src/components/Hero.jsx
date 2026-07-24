import { useTheme } from '../context/ThemeContext';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero({ 
  title = 'Impulsa tu negocio hoy', 
  subtitle = 'Soluciones web profesionales que convierten visitas en clientes.',
  ctaText = 'Solicitar demo',
  ctaLink = '#contact'
}) {
  const { theme } = useTheme();

  return (
    <section id="home" className={`relative text-center pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-${theme.primary}-600 via-${theme.primary}-500 to-${theme.secondary}-600 text-white overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-${theme.accent}-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-${theme.secondary}-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-${theme.primary}-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000`}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto opacity-90">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={ctaLink} 
            className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {ctaText}
          </a>
          <a 
            href="#features" 
            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Saber más
          </a>
        </div>
      </div>
      
      <a 
        href="#features" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <FaArrowDown className="text-2xl" />
      </a>
    </section>
  );
}