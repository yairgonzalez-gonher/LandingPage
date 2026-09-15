import { FaGasPump, FaRoad, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineDocumentScanner } from 'react-icons/md';

export default function TikentaCore() {
  return (
    <section id="solucion" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tk-brand mb-3">El núcleo de Tikenta</p>
          <h2 className="text-3xl md:text-5xl text-tk-text">
            Una plataforma para el gasto que llega en un{' '}
            <span className="tikenta-serif text-tk-brand">ticket</span>.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Lo que ocurre después de que un colaborador carga un ticket de gasolina o caseta: leerlo, revisarlo, aprobarlo y convertirlo en información útil.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-5">
          <article className="md:col-span-7 rounded-3xl border border-tk-line p-7 md:p-9 tikenta-bento-glow relative overflow-hidden min-h-[260px]">
            <div className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full bg-tk-brand/10 blur-2xl pointer-events-none" />
            <div className="h-12 w-12 rounded-2xl bg-tk-brand text-white grid place-items-center mb-6 shadow-[0_10px_24px_rgba(79,46,211,0.28)]">
              <FaGasPump size={22} />
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-tk-ink mb-2">Principal</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-tk-text">Tickets de gasolina</h3>
            <p className="mt-3 text-gray-600 max-w-xl leading-relaxed">
              Centraliza tickets de estaciones: RFC, folio, fecha, producto, litros, precio, impuestos, total y método de pago. Todo listo para validación.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Estación', 'Litros', 'Total', 'RFC'].map((tag) => (
                <span key={tag} className="rounded-full bg-white border border-tk-line px-3 py-1 text-[11px] font-bold text-tk-ink">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="md:col-span-5 rounded-3xl border border-gray-200 bg-tk-dark text-white p-7 md:p-8 flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-tk-brand grid place-items-center mb-6">
                <FaRoad size={22} />
              </div>
              <h3 className="text-2xl font-semibold">Tickets de casetas</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Los peajes entran al mismo flujo. Sin procesos separados para el gasto de movilidad.
              </p>
            </div>
            <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-tk-soft">Mismo pipeline · Misma trazabilidad</p>
          </article>

          <article className="md:col-span-6 rounded-3xl border border-gray-200 bg-tk-bg p-6 md:p-7 flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-tk-tint text-tk-brand grid place-items-center">
              <MdOutlineDocumentScanner size={22} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-tk-text">OCR y captura</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Lee los datos del comprobante y los deja estructurados para revisión. Menos tecleo, menos errores.
              </p>
            </div>
          </article>

          <article className="md:col-span-6 rounded-3xl border border-gray-200 bg-white p-6 md:p-7 flex gap-4 shadow-[0_8px_24px_rgba(26,17,71,0.04)]">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-tk-tint text-tk-brand grid place-items-center">
              <FaShieldAlt size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-tk-text">Aprobación y rechazo</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Estados, motivo, observaciones e historial. Queda claro quién tomó cada decisión.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
