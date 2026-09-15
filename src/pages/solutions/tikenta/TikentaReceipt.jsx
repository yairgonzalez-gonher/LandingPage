const points = [
  { n: '01', title: 'Captura desde la operación', body: 'El comprobante entra al flujo digital sin carpetas, correos ni seguimiento disperso.' },
  { n: '02', title: 'Información estructurada', body: 'Los datos detectados quedan disponibles para consulta, filtros y validación.' },
  { n: '03', title: 'Responsabilidad clara', body: 'Estados, observaciones, aprobaciones y rechazos quedan auditables.' },
];

export default function TikentaReceipt() {
  return (
    <section className="py-20 md:py-28 bg-tk-bg relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_30%,rgba(79,46,211,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tk-brand mb-3">Menos captura, más control</p>
            <h2 className="text-3xl md:text-5xl text-tk-text">
              El ticket se organiza antes de volverse un{' '}
              <span className="tikenta-serif text-tk-brand">problema</span> administrativo.
            </h2>

            <div className="mt-10 relative pl-2">
              <span className="absolute left-[19px] top-3 bottom-3 w-px bg-tk-line" aria-hidden="true" />
              <div className="space-y-6">
                {points.map((point) => (
                  <div key={point.n} className="relative flex gap-4">
                    <span className="relative z-10 h-10 w-10 shrink-0 rounded-full bg-white border border-tk-line text-tk-brand tikenta-num text-[11px] font-bold grid place-items-center shadow-sm">
                      {point.n}
                    </span>
                    <div className="pt-1">
                      <p className="font-semibold text-tk-text">{point.title}</p>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-tk-brand/20 via-tk-soft/10 to-transparent blur-xl pointer-events-none" />
            <div className="relative rounded-[24px] border border-white/60 bg-white/80 backdrop-blur p-4 md:p-6 shadow-[0_20px_55px_rgba(26,17,71,0.12)]">
              <div className="tikenta-receipt relative rounded-2xl border border-gray-200 p-5 md:p-6 overflow-hidden">
                <span className="tikenta-scan" aria-hidden="true" />
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <p className="text-[11px] font-black tracking-wide text-emerald-800">ESTACIÓN DE SERVICIO</p>
                    <p className="text-xs text-gray-500 mt-1">Ticket digitalizado</p>
                  </div>
                  <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800">
                    Gasolina
                  </span>
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
                <div className="mt-5 inline-flex rounded-xl bg-tk-brand text-white text-[11px] font-extrabold px-3.5 py-2 shadow-[0_10px_24px_rgba(79,46,211,0.24)]">
                  OCR procesado ✓
                </div>
                <div className="tikenta-receipt-edge absolute left-0 right-0 -bottom-[1px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
