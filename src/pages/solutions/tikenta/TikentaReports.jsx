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
    <section id="reportes" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tk-brand mb-3">Reportes de gastos</p>
            <h2 className="text-3xl md:text-5xl text-tk-text">
              No sólo factures tickets.{' '}
              <span className="tikenta-serif text-tk-brand">Entiende</span> en qué se está gastando.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Reportes por periodo, estación y usuario, métricas de consumo y exportación CSV para administración y finanzas.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ['$186k', 'Procesado'],
                ['+8.4%', 'Variación'],
                ['348', 'Tickets'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-tk-line bg-tk-tint2 p-3 text-center">
                  <p className="tikenta-num text-xl md:text-2xl font-bold text-tk-dark">{value}</p>
                  <p className="text-[11px] text-tk-ink font-semibold mt-1">{label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {[
                'Visibilidad mensual del gasto procesado',
                'Análisis por estación y usuario',
                'Exportación para conciliaciones',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="h-2 w-2 rounded-full bg-tk-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-gray-200 bg-tk-bg p-5 md:p-7 shadow-[0_20px_55px_rgba(26,17,71,0.08)]">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="relative h-40 w-40 shrink-0">
                <div className="tikenta-report-ring absolute inset-0 rounded-full" />
                <div className="absolute inset-[18px] rounded-full bg-white grid place-items-center text-center shadow-inner">
                  <div>
                    <p className="tikenta-num text-2xl font-bold text-tk-dark">76%</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Gasolina</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="flex justify-between items-start gap-3 mb-4">
                  <div>
                    <p className="font-semibold text-tk-text">Gasto de movilidad</p>
                    <p className="text-xs text-gray-500">Últimos 7 periodos</p>
                  </div>
                  <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800">
                    +8.4%
                  </span>
                </div>
                <div className="h-36 flex items-end gap-2 border-b border-gray-200 px-1">
                  {bars.map((bar) => (
                    <div key={bar.label} className="flex-1 flex flex-col justify-end h-full gap-0.5">
                      <div className="rounded-t-md bg-gradient-to-b from-tk-light to-tk-brand" style={{ height: `${bar.gas}%` }} />
                      <div className="rounded-t-sm bg-tk-soft" style={{ height: `${bar.toll}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-gray-500 tikenta-num">
                  {bars.map((bar) => (
                    <span key={bar.label} className="flex-1 text-center">{bar.label}</span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600">
                  <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-tk-brand" /> Gasolina</span>
                  <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-tk-soft" /> Casetas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
