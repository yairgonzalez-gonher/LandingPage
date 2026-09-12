import { FaGasPump, FaRoad, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineDocumentScanner } from 'react-icons/md';

const cores = [
  {
    icon: <FaGasPump size={22} />,
    title: 'Tickets de gasolina',
    body: 'Centraliza tickets de estaciones de servicio: estación, RFC, folio, fecha, producto, litros, precio, impuestos, total y método de pago.',
    featured: true,
  },
  {
    icon: <FaRoad size={22} />,
    title: 'Tickets de casetas',
    body: 'Incorpora los comprobantes de peaje al mismo flujo para no separar el gasto de movilidad en procesos distintos.',
    featured: true,
  },
  {
    icon: <MdOutlineDocumentScanner size={22} />,
    title: 'OCR y captura',
    body: 'Reduce la captura manual leyendo los datos del comprobante y dejándolos listos para revisión.',
    featured: false,
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: 'Aprobación y rechazo',
    body: 'Estados de revisión con motivo, observaciones e historial. Queda claro quién tomó cada decisión.',
    featured: false,
  },
];

export default function TikentaCore() {
  return (
    <section id="solucion" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel mb-3">El núcleo de Tikenta</p>
          <h2 className="text-3xl md:text-5xl text-carbon">Una plataforma para el gasto que llega en un ticket.</h2>
          <p className="mt-4 text-lg text-gray-600">
            El producto cubre lo que ocurre después de que un colaborador carga un ticket de gasolina o caseta: leerlo, revisarlo, aprobarlo y convertirlo en información útil.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {cores.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl p-7 border ${
                item.featured
                  ? 'border-steel/30 bg-gradient-to-b from-steel-50 to-white'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="h-12 w-12 rounded-xl bg-steel/10 text-steel grid place-items-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-carbon">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
