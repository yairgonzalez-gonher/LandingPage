import { FaArrowRight } from 'react-icons/fa';

export default function CTA({ title, description, buttonText, buttonLink }) {
  const defaultTitle = '¿Listo para comenzar?';
  const defaultDescription = 'Únete a miles de empresas que ya están creciendo con nosotros.';
  const defaultButtonText = 'Comenzar ahora';
  const defaultButtonLink = '#contact';

  return (
    <section className="py-20 bg-steel text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title || defaultTitle}
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {description || defaultDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonLink || defaultButtonLink}
            className="inline-flex items-center justify-center px-8 py-4 bg-carbon text-white rounded-lg font-semibold text-lg hover:bg-carbon-light transition-colors shadow-lg hover:shadow-xl"
          >
            {buttonText || defaultButtonText}
            <FaArrowRight className="ml-2" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-carbon transition-colors"
          >
            Saber más
          </a>
        </div>
      </div>
    </section>
  );
}
