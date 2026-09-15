const tickets = [
  { id: '#A89421', place: 'Estación Las Torres', type: 'Gasolina', tone: 'gas', total: '$1,248.60', status: 'Aprobado', statusClass: 'text-emerald-700' },
  { id: '#C05117', place: 'Autopista Arco Norte', type: 'Caseta', tone: 'toll', total: '$189.00', status: 'Pendiente', statusClass: 'text-amber-700' },
  { id: '#B22041', place: 'Servicio Hidalgo', type: 'Gasolina', tone: 'gas', total: '$872.40', status: 'Facturado', statusClass: 'text-emerald-700' },
  { id: '#C01189', place: 'Concesionaria Centro', type: 'Caseta', tone: 'toll', total: '$96.00', status: 'Facturado', statusClass: 'text-emerald-700' },
];

function TypePill({ type }) {
  const gas = type === 'Gasolina';
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold ${gas ? 'bg-emerald-50 text-emerald-800' : 'bg-indigo-50 text-indigo-800'}`}>
      {type}
    </span>
  );
}

export default function TikentaHero({ onDemoOpen }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-tk-dark text-white">
      <div className="tikenta-dash-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-tk-brand/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-tk-soft">
            <span className="h-1.5 w-1.5 bg-tk-brand rounded-[2px]" />
            Producto de GONSoftLab
          </p>
          <h1 className="mt-5 text-[42px] sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Controla tickets de gasolina y casetas, no una carpeta de <span className="tikenta-serif text-tk-soft">comprobantes</span>.
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl">
            Tikenta centraliza la captura, lectura OCR, validación y facturación de los gastos de movilidad. El equipo deja de perseguir tickets y trabaja con información ordenada y trazable.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#planes" className="inline-flex justify-center items-center rounded-lg bg-tk-brand px-5 py-3.5 font-bold hover:bg-tk-deep transition-colors">
              Ver planes
            </a>
            <button
              type="button"
              onClick={onDemoOpen}
              className="inline-flex justify-center items-center rounded-lg bg-white px-5 py-3.5 font-bold text-tk-text hover:bg-tk-bg transition-colors"
            >
              Solicitar demostración
            </button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
            {['Tickets de combustible', 'Tickets de casetas', 'OCR y validación', 'Reportes de gastos'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[18px] w-[18px] rounded-[5px] bg-tk-brand/20 text-tk-soft grid place-items-center text-[10px] font-black">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-8 hidden xl:block w-44 -rotate-[8deg] rounded-md border border-white/10 bg-[#fffef8] text-tk-text p-3 shadow-2xl">
            <p className="text-[10px] font-black tracking-wide text-emerald-800">ESTACIÓN</p>
            <p className="tikenta-num text-xs mt-2">FOLIO A89421</p>
            <p className="tikenta-num text-lg font-semibold mt-1">$1,248.60</p>
            <p className="text-[10px] text-gray-500 mt-1">52.40 L · Magna</p>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden bg-white text-tk-text shadow-[0_24px_60px_rgba(0,0,0,0.35)] border border-white/10"
            aria-label="Vista demostrativa del módulo de tickets de Tikenta"
          >
            <div className="h-11 flex items-center justify-between px-3.5 border-b border-gray-200 bg-white">
              <strong className="text-xs tracking-wide">TIKENTA</strong>
              <div className="flex gap-1.5" aria-hidden="true">
                <i className="block h-2 w-2 rounded-full bg-gray-300" />
                <i className="block h-2 w-2 rounded-full bg-gray-300" />
                <i className="block h-2 w-2 rounded-full bg-gray-300" />
              </div>
            </div>
            <div className="grid grid-cols-[118px_1fr] sm:grid-cols-[132px_1fr] min-h-[360px] bg-[#f4f6f8]">
              <aside className="bg-tk-dark text-white/55 p-3.5 text-[11px]">
                <div className="flex items-center gap-2 text-white font-bold pb-3 mb-2 border-b border-white/10">
                  <span className="h-7 w-7 rounded-lg bg-tk-brand grid place-items-center text-white text-xs">T</span>
                  TIKENTA
                </div>
                {['Inicio', 'Tickets', 'Facturas', 'Reportes', 'Usuarios'].map((item) => (
                  <div
                    key={item}
                    className={`mt-1 rounded-lg px-2 py-1.5 ${item === 'Tickets' ? 'bg-tk-brand text-white font-bold' : ''}`}
                  >
                    {item}
                  </div>
                ))}
              </aside>
              <div className="p-3.5 sm:p-4 overflow-hidden">
                <p className="font-extrabold text-[17px]">Tickets</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Consulta y valida tickets escaneados.</p>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[
                    ['Total', '348', ''],
                    ['Por validar', '23', 'text-amber-700'],
                    ['Facturados', '301', 'text-emerald-700'],
                  ].map(([label, value, color]) => (
                    <div key={label} className="bg-white border border-gray-200 rounded-lg p-2.5">
                      <small className="block text-[10px] text-gray-500">{label}</small>
                      <b className={`tikenta-num text-lg ${color}`}>{value}</b>
                    </div>
                  ))}
                </div>
                <div className="mt-3 bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <div className="hidden sm:grid grid-cols-[1.4fr_.7fr_.7fr_.7fr] gap-2 px-3 py-2 text-[10px] font-extrabold uppercase text-gray-500 bg-gray-50">
                    <span>Ticket</span><span>Tipo</span><span>Total</span><span>Estado</span>
                  </div>
                  {tickets.map((row) => (
                    <div key={row.id} className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.4fr_.7fr_.7fr_.7fr] gap-2 items-center px-3 py-2.5 text-xs border-t border-gray-100">
                      <span>
                        <strong className="tikenta-num">{row.id}</strong>
                        <span className="block text-gray-500 truncate">{row.place}</span>
                      </span>
                      <span className="hidden sm:inline"><TypePill type={row.type} /></span>
                      <span className="tikenta-num hidden sm:inline">{row.total}</span>
                      <span className={`font-extrabold ${row.statusClass}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
