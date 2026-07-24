import { useTheme } from '../context/ThemeContext';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function Pricing() {
  const { theme } = useTheme();

  const plans = [
    {
      name: 'Básico',
      price: 29,
      period: 'mes',
      description: 'Perfecto para empezar',
      features: [
        'Hasta 5 proyectos',
        '10GB de almacenamiento',
        'Soporte por email',
        'Acceso básico',
        'Actualizaciones',
      ],
      notIncluded: ['Soporte prioritario', 'Integraciones avanzadas'],
      popular: false,
    },
    {
      name: 'Profesional',
      price: 79,
      period: 'mes',
      description: 'Para profesionales',
      features: [
        'Proyectos ilimitados',
        '100GB de almacenamiento',
        'Soporte prioritario',
        'Acceso completo',
        'Actualizaciones',
        'Integraciones avanzadas',
        'Análisis avanzados',
      ],
      notIncluded: [],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'mes',
      description: 'Para empresas',
      features: [
        'Todo del Profesional',
        'Almacenamiento ilimitado',
        'Soporte 24/7',
        'Gestor de cuenta dedicado',
        'Personalización completa',
        'API personalizada',
        'Capacitación del equipo',
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className={`py-20 bg-${theme.bg === 'gray-900' ? 'gray-800' : 'gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
            Planes y Precios
          </h2>
          <p className={`text-lg text-${theme.text === 'white' ? 'gray-300' : 'gray-600'}`}>
            Elige el plan perfecto para ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-${theme.bg === 'gray-900' ? 'gray-700' : 'white'} rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? `border-${theme.primary}-500 shadow-${theme.primary}-500/20`
                  : `border-${theme.bg === 'gray-900' ? 'gray-600' : 'gray-200'}`
              }`}
            >
              {plan.popular && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-${theme.primary}-500 text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                  Más Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm text-${theme.text === 'white' ? 'gray-400' : 'gray-600'} mb-4`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-extrabold text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`ml-2 text-${theme.text === 'white' ? 'gray-400' : 'gray-600'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className={`text-${theme.primary}-500 mt-1 mr-3 flex-shrink-0`} />
                    <span className={`text-${theme.text === 'white' ? 'gray-200' : 'gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <li key={i} className="flex items-start opacity-50">
                    <FaTimes className={`text-gray-400 mt-1 mr-3 flex-shrink-0`} />
                    <span className={`text-${theme.text === 'white' ? 'gray-400' : 'gray-500'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? `bg-${theme.primary}-600 hover:bg-${theme.primary}-700 text-white`
                    : `bg-${theme.bg === 'gray-900' ? 'gray-600' : 'gray-100'} hover:bg-${theme.bg === 'gray-900' ? 'gray-500' : 'gray-200'} text-${theme.text === 'white' ? 'white' : 'gray-900'}`
                }`}
              >
                Empezar ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

