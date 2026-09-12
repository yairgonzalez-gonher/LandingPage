import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

export default function SolutionPlaceholder({ title, description }) {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo wordmarkClassName="text-carbon" imgClassName="h-10 w-auto" />
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-steel mb-3">
            Solución
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-carbon">
            {title}
          </h1>
          {description && (
            <p className="text-lg mb-8 text-texto">
              {description}
            </p>
          )}
          <p className="text-base mb-10 text-gray-500">
            Contenido pendiente. Esta página estará lista cuando se defina el material.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-steel hover:bg-steel-700 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
