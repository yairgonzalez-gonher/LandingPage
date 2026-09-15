export default function TikentaAddon() {
  return (
    <section id="addon-facturacion-clientes" className="py-20 md:py-28 bg-tk-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] overflow-hidden border border-tk-line bg-white shadow-[0_20px_55px_rgba(26,17,71,0.08)] grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 md:p-10">
            <span className="inline-flex px-2.5 py-1 rounded-full bg-tk-tint text-tk-brand text-[11px] font-extrabold uppercase tracking-wide">
              Servicio adicional
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl text-tk-text">
              Facturación a tus clientes, con el volumen que{' '}
              <span className="tikenta-serif text-tk-brand">realmente</span> necesites.
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              El núcleo de Tikenta sigue siendo gasolina y casetas. La facturación a clientes se contrata aparte: eliges el nivel según tu volumen.
            </p>

            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {[
                ['Básico', '500 CFDI', '+$499/mes'],
                ['Plus', '2,000 CFDI', '+$1,499/mes'],
                ['Pro', '5,000 CFDI', '+$2,999/mes'],
              ].map(([name, volume, price]) => (
                <div key={name} className="rounded-2xl border border-tk-line bg-tk-tint2 p-4">
                  <span className="block text-[11px] font-extrabold uppercase tracking-wide text-tk-ink">{name}</span>
                  <strong className="block text-tk-text mt-2">{volume}</strong>
                  <span className="block text-sm text-tk-brand font-bold mt-1">{price}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[13px] leading-relaxed rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-900 p-4">
              <strong>Enterprise:</strong> 10,000+ CFDI/mes se cotizan a la medida. Excedentes: Básico $1.00, Plus $0.80 y Pro $0.60. La promo de 3 meses sin costo aplica sólo al Básico mensual cuando esté habilitada.
            </p>
          </div>

          <div className="bg-tk-dark text-white p-6 md:p-8 flex flex-col justify-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-tk-soft mb-5">Cómo se combina</p>
            {[
              ['Tikenta Core', 'Gasolina + casetas'],
              ['Facturación Básico', '500 · $499'],
              ['Facturación Plus', '2,000 · $1,499'],
              ['Facturación Pro', '5,000 · $2,999'],
              ['Enterprise', '10,000+ · Cotización'],
              ['Bolsa separada', 'Sí'],
            ].map(([label, value], index, arr) => (
              <div
                key={label}
                className={`flex justify-between gap-4 py-3 text-sm ${index < arr.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <span className="text-white/55">{label}</span>
                <strong className="text-tk-soft text-right">{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
