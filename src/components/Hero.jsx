import { FaArrowDown } from 'react-icons/fa';

export default function Hero({
  title = 'Impulsa tu negocio hoy',
  subtitle = 'Soluciones web profesionales que convierten visitas en clientes.',
  ctaText = 'Solicitar demo',
  ctaLink = '#contact'
}) {
  return (
    <section id="home" className="relative text-center pt-32 pb-24 md:pt-40 md:pb-32 bg-carbon text-white overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src="/logo.jpg"
          alt="GON Soft Lab"
          className="mx-auto mb-8 h-28 md:h-36 w-auto"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto text-gray-300">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={ctaLink}
            className="inline-flex items-center justify-center bg-steel hover:bg-steel-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            {ctaText}
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-carbon transition-all duration-300"
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
