export default function TikentaAddon() {
  return (
    <section id="addon-facturacion-clientes" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-dashed border-steel/40 bg-steel-50 p-6 md:p-10 grid lg:grid-cols-[1.1fr_.9fr] gap-8 items-center">
          <div>
            <span className="inline-flex px-2.5 py-1 rounded-full bg-steel/15 text-steel text-[11px] font-extrabold uppercase tracking-wide">
              Servicio adicional
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl text-carbon">
              Facturación a tus clientes, con el volumen que realmente necesites.
            </h2>
            <p className="mt-3 text-gray-600">
              El núcleo de Tikenta sigue siendo gasolina y casetas. La facturación a clientes se contrata aparte: Starter, Business o Professional eligen el nivel según su volumen.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                ['Básico', '500 CFDI · +$499/mes'],
                ['Plus', '2,000 CFDI · +$1,499/mes'],
                ['Pro', '5,000 CFDI · +$2,999/mes'],
              ].map(([name, price]) => (
                <div key={name} className="bg-white border border-steel/25 rounded-xl p-3.5">
                  <span className="block text-[11px] text-gray-500">{name}</span>
                  <strong className="text-sm text-carbon">{price}</strong>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] leading-relaxed rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 p-4">
              <strong>Enterprise:</strong> 10,000 CFDI/mes o más se cotizan a la medida. Excedentes: Básico $1.00, Plus $0.80 y Pro $0.60 por CFDI. La promoción de 3 meses sin costo aplica sólo al nivel Básico mensual, cuando esté habilitada.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            {[
              ['Tikenta Core', 'Gasolina + casetas'],
              ['Facturación Básico', '500 · $499'],
              ['Facturación Plus', '2,000 · $1,499'],
              ['Facturación Pro', '5,000 · $2,999'],
              ['Facturación Enterprise', '10,000+ · Cotización'],
              ['Bolsa separada del Core', 'Sí'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 py-2.5 text-sm border-b border-gray-100 last:border-0">
                <span className="text-gray-600">{label}</span>
                <strong className="text-steel text-right">{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
