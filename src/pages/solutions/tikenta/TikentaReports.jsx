const bars = [
  { gas: 42, toll: 18, label: 'Mar' },
  { gas: 55, toll: 22, label: 'Abr' },
  { gas: 48, toll: 20, label: 'May' },
  { gas: 68, toll: 28, label: 'Jun' },
  { gas: 58, toll: 24, label: 'Jul' },
  { gas: 78, toll: 32, label: 'Ago' },
  { gas: 64, toll: 26, label: 'Sep' },
];

export default function TikentaReports() {
  return (
    <section id="reportes" className="py-20 md:py-28 bg-gris-claro">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel mb-3">Reportes de gastos</p>
          <h2 className="text-3xl md:text-5xl text-carbon">No sólo factures tickets. Entiende en qué se está gastando.</h2>
          <p className="mt-4 text-lg text-gray-600">
            Reportes por periodo, estación y usuario, métricas de consumo y exportación CSV para administración, finanzas y supervisión.
          </p>
          <div className="mt-8 space-y-4">
            {[
              ['Visibilidad mensual', 'Totaliza y compara el gasto procesado.'],
              ['Análisis por estación y usuario', 'Identifica dónde y quién está generando el gasto.'],
              ['Exportación', 'Extrae información para análisis y conciliaciones adicionales.'],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-3">
                <span className="h-8 w-8 shrink-0 rounded-lg bg-steel/10 text-steel grid place-items-center text-sm font-black">✓</span>
                <div>
                  <p className="font-semibold text-carbon">{title}</p>
                  <p className="text-sm text-gray-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-[0_20px_55px_rgba(28,32,37,0.08)]">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="font-semibold text-carbon">Gasto de movilidad</p>
              <p className="text-xs text-gray-500">Últimos 7 periodos</p>
            </div>
            <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800">+8.4%</span>
          </div>
          <div className="mt-6 h-48 flex items-end gap-2 sm:gap-3 border-b border-gray-200 px-1">
            {bars.map((bar) => (
              <div key={bar.label} className="flex-1 flex flex-col justify-end h-full gap-0.5">
                <div className="rounded-t-md bg-steel" style={{ height: `${bar.gas}%` }} />
                <div className="rounded-t-sm bg-carbon/70" style={{ height: `${bar.toll}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[10px] text-gray-500 tikenta-num">
            {bars.map((bar) => (
              <span key={bar.label} className="flex-1 text-center">{bar.label}</span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-steel" /> Gasolina</span>
            <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-carbon" /> Casetas</span>
            <span>Total procesado: <b className="tikenta-num text-carbon">$186,420</b></span>
          </div>
        </div>
      </div>
    </section>
  );
}
