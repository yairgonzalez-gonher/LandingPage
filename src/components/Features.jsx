import { Link } from 'react-router-dom';
import { FaBolt, FaMobileAlt, FaLock, FaChartLine, FaHeadset, FaRocket } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function Features({ 
  items = [
    { icon: <FaBolt size={32} />, title: 'Rápido', desc: 'Carga instantánea y rendimiento óptimo.' },
    { icon: <FaMobileAlt size={32} />, title: 'Responsive', desc: 'Se ve perfecto en cualquier dispositivo.' },
    { icon: <FaLock size={32} />, title: 'Seguro', desc: 'Protección de datos y comunicación cifrada.' },
    { icon: <FaChartLine size={32} />, title: 'Analíticas', desc: 'Métricas detalladas de tu negocio.' },
    { icon: <FaHeadset size={32} />, title: 'Soporte 24/7', desc: 'Asistencia cuando la necesites.' },
    { icon: <FaRocket size={32} />, title: 'Escalable', desc: 'Crece junto con tu negocio.' },
  ],
  title = 'Beneficios'
}) {
  const { theme } = useTheme();

  return (
    <section id="features" className={`py-20 bg-${theme.bg === 'gray-900' ? 'gray-900' : 'white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
            {title}
          </h2>
          <p className={`text-lg text-${theme.text === 'white' ? 'gray-300' : 'gray-600'}`}>
            Todo lo que necesitas para tener éxito
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((f, i) => {
            const isDisabled = f.disabled || f.badge === 'Proximamente';
            const cardClassName = `block p-6 lg:p-8 bg-${theme.bg === 'gray-900' ? 'gray-800' : 'gray-50'} rounded-xl shadow-lg border border-${theme.bg === 'gray-900' ? 'gray-700' : 'gray-200'} ${
              isDisabled
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:shadow-xl transition-all duration-300 hover:scale-105'
            }`;

            const content = (
              <>
                <div className={`text-${theme.primary}-500 mb-4`}>{f.icon}</div>
                <h3 className={`text-2xl font-semibold mb-2 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
                  {f.title}
                </h3>
                <p className={`text-${theme.text === 'white' ? 'gray-300' : 'gray-600'}`}>
                  {f.desc}
                </p>
                {f.badge && (
                  <p className={`mt-4 text-sm font-semibold text-${theme.primary}-500`}>
                    {f.badge}
                  </p>
                )}
              </>
            );

            if (!isDisabled && f.href) {
              return (
                <Link key={i} to={f.href} className={cardClassName}>
                  {content}
                </Link>
              );
            }

            return (
              <div key={i} className={cardClassName} aria-disabled={isDisabled || undefined}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
