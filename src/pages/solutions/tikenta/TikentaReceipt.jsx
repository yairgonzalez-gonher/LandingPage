const points = [
  { n: '1', title: 'Captura desde la operación', body: 'El comprobante entra al flujo digital sin depender de carpetas, correos o seguimiento disperso.' },
  { n: '2', title: 'Información estructurada', body: 'Los datos detectados quedan disponibles para consulta, filtros y validación.' },
  { n: '3', title: 'Responsabilidad clara', body: 'El sistema registra estados, observaciones, aprobaciones y rechazos. El proceso es auditable.' },
];

export default function TikentaReceipt() {
  return (
    <section className="py-20 md:py-28 bg-gris-claro">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow-[0_20px_55px_rgba(28,32,37,0.08)]">
          <div className="tikenta-receipt relative rounded-xl border border-gray-200 p-5 overflow-hidden">
            <span className="tikenta-scan" aria-hidden="true" />
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[11px] font-black tracking-wide text-emerald-800">ESTACIÓN DE SERVICIO</p>
                <p className="text-xs text-gray-500 mt-1">Ticket digitalizado</p>
              </div>
              <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800">Gasolina</span>
            </div>
            <div className="h-px bg-gray-200 my-4" />
            <dl className="grid grid-cols-2 gap-3 text-sm">
              {[
                ['Folio', 'A89421'],
                ['Fecha', '05/09/2026'],
                ['Producto', 'Magna'],
                ['Litros', '52.40 L'],
                ['Precio/L', '$23.83'],
                ['Total', '$1,248.60'],
                ['RFC estación', 'AAA010101AAA'],
                ['Estado', 'Listo para validar'],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[11px] text-gray-500">{label}</dt>
                  <dd className={`font-semibold ${label === 'Estado' ? 'text-emerald-700' : 'tikenta-num'}`}>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 inline-flex rounded-lg bg-steel text-white text-[11px] font-extrabold px-3 py-2">
              OCR procesado ✓
            </div>
            <div className="tikenta-receipt-edge absolute left-0 right-0 -bottom-[1px]" />
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel mb-3">Menos captura, más control</p>
          <h2 className="text-3xl md:text-5xl text-carbon">
            El ticket se organiza antes de volverse un problema administrativo.
          </h2>
          <div className="mt-8 space-y-5">
            {points.map((point) => (
              <div key={point.n} className="flex gap-4">
                <span className="h-8 w-8 shrink-0 rounded-lg bg-steel/10 text-steel grid place-items-center text-sm font-black">
                  {point.n}
                </span>
                <div>
                  <p className="font-semibold text-carbon">{point.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
