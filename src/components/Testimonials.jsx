import { useTheme } from '../context/ThemeContext';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const { theme } = useTheme();

  const testimonials = [
    {
      name: 'María González',
      role: 'CEO, TechStart',
      image: '👩‍💼',
      text: 'Increíble servicio. Nuestras ventas aumentaron un 300% después de implementar su solución.',
      rating: 5,
    },
    {
      name: 'Carlos Ramírez',
      role: 'Director de Marketing',
      image: '👨‍💼',
      text: 'La mejor inversión que hemos hecho. El equipo es profesional y los resultados son inmediatos.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      role: 'Fundadora, DesignCo',
      image: '👩‍🎨',
      text: 'Superó todas nuestras expectativas. Recomiendo este servicio sin dudarlo.',
      rating: 5,
    },
    {
      name: 'Roberto Silva',
      role: 'CTO, InnovateLab',
      image: '👨‍💻',
      text: 'La calidad y atención al detalle es excepcional. Estamos muy contentos con los resultados.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className={`py-20 bg-${theme.bg === 'gray-900' ? 'gray-800' : 'gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
            Lo que dicen nuestros clientes
          </h2>
          <p className={`text-lg text-${theme.text === 'white' ? 'gray-300' : 'gray-600'}`}>
            Miles de empresas confían en nosotros
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-${theme.bg === 'gray-900' ? 'gray-700' : 'white'} p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-${theme.bg === 'gray-900' ? 'gray-600' : 'gray-200'}`}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-steel text-sm"
                    fill="currentColor"
                  />
                ))}
              </div>
              
              <FaQuoteLeft className="text-steel text-2xl mb-4 opacity-50" />
              
              <p className={`text-${theme.text === 'white' ? 'gray-200' : 'gray-700'} mb-6 leading-relaxed`}>
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className={`text-4xl mr-4`}>{testimonial.image}</div>
                <div>
                  <h4 className={`font-semibold text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm text-${theme.text === 'white' ? 'gray-400' : 'gray-500'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

