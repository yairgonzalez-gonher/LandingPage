import { Link } from 'react-router-dom';
import { FaUsers, FaComments, FaChartLine, FaHandshake } from 'react-icons/fa';
import Logo from '../../components/Logo';

const highlights = [
  {
    icon: <FaUsers size={28} />,
    title: 'Centraliza tus clientes',
    desc: 'Toda la información de contacto, historial y seguimiento en un solo lugar.',
  },
  {
    icon: <FaComments size={28} />,
    title: 'Acercamiento más fácil',
    desc: 'Organiza conversaciones y seguimientos para no perder ninguna oportunidad.',
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Visibilidad del pipeline',
    desc: 'Controla el avance de cada relación comercial y toma mejores decisiones.',
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'Relaciones que escalan',
    desc: 'Acompaña a tus clientes desde el primer contacto hasta el cierre y más allá.',
  },
];

export default function Crm() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo wordmarkClassName="text-carbon" imgClassName="h-10 w-auto" />
        </div>
      </header>

      <section className="relative bg-carbon text-white py-20 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-steel mb-3">
            Solución
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CRM</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Manejo y control de tus clientes más fácil, así como su acercamiento con ellos.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gris-claro">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-steel transition-colors"
              >
                <div className="text-steel mb-3">{item.icon}</div>
                <h2 className="text-xl font-semibold text-carbon mb-2">{item.title}</h2>
                <p className="text-texto">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-steel hover:bg-steel-700 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
