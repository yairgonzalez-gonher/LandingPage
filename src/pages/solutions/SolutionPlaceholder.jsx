import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export default function SolutionPlaceholder({ title, description }) {
  const { theme } = useTheme();
  const isDark = theme.bg === 'gray-900';

  return (
    <main
      className={`min-h-screen flex items-center justify-center px-4 bg-${
        isDark ? 'gray-900' : 'white'
      }`}
    >
      <div className="max-w-2xl text-center">
        <p className={`text-sm font-semibold uppercase tracking-wide text-${theme.primary}-500 mb-3`}>
          Solución
        </p>
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-${isDark ? 'white' : 'gray-900'}`}>
          {title}
        </h1>
        {description && (
          <p className={`text-lg mb-8 text-${isDark ? 'gray-300' : 'gray-600'}`}>
            {description}
          </p>
        )}
        <p className={`text-base mb-10 text-${isDark ? 'gray-400' : 'gray-500'}`}>
          Contenido pendiente. Esta página estará lista cuando se defina el material.
        </p>
        <Link
          to="/"
          className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-${theme.primary}-600 hover:bg-${theme.primary}-700 transition-colors`}
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
