import { useState } from 'react';
import {
  FaCamera,
  FaSearchPlus,
  FaCheckDouble,
  FaFileInvoiceDollar,
  FaChartPie,
  FaArrowRight,
} from 'react-icons/fa';

const steps = [
  {
    id: 'captura',
    title: 'Captura',
    short: 'El ticket entra al flujo',
    body: 'El colaborador registra el ticket de gasolina o caseta por los canales habilitados, sin depender de correos o carpetas sueltas.',
    meta: 'Origen operativo',
    icon: FaCamera,
    points: ['Foto o carga del comprobante', 'Asignación al colaborador', 'Entrada trazable al sistema'],
    preview: {
      eyebrow: 'Nuevo ticket',
      rows: [
        ['Canal', 'App móvil'],
        ['Tipo', 'Gasolina'],
        ['Usuario', 'M. López'],
        ['Estado', 'Recibido'],
      ],
    },
  },
  {
    id: 'ocr',
    title: 'Lectura OCR',
    short: 'Los datos se estructuran solos',
    body: 'Tikenta identifica la información disponible en el comprobante y la deja lista para revisión, reduciendo captura manual.',
    meta: 'Automatización',
    icon: FaSearchPlus,
    points: ['Folio, fecha y total detectados', 'Litros / peaje según el tipo', 'Menos tecleo, menos errores'],
    preview: {
      eyebrow: 'OCR en proceso',
      rows: [
        ['Folio', 'A89421'],
        ['Producto', 'Magna'],
        ['Litros', '52.40 L'],
        ['Total', '$1,248.60'],
      ],
    },
  },
  {
    id: 'validacion',
    title: 'Validación',
    short: 'Aprueba o rechaza con historial',
    body: 'El equipo revisa los datos y puede aprobar o rechazar el ticket con motivo, observaciones y responsabilidad clara.',
    meta: 'Control interno',
    icon: FaCheckDouble,
    points: ['Estados de revisión', 'Motivo de rechazo', 'Quién decidió y cuándo'],
    preview: {
      eyebrow: 'Pendiente de revisión',
      rows: [
        ['Revisor', 'Admin flotilla'],
        ['Regla', 'Monto < $2,000'],
        ['Observación', 'Sin hallazgos'],
        ['Acción', 'Aprobar'],
      ],
    },
  },
  {
    id: 'facturacion',
    title: 'Facturación',
    short: 'Del ticket al CFDI',
    body: 'El ticket aprobado continúa a la obtención o asociación de su comprobante fiscal, sin romper el hilo operativo.',
    meta: 'Cumplimiento',
    icon: FaFileInvoiceDollar,
    points: ['Ticket aprobado → CFDI', 'Asociación fiscal clara', 'Timbrado dentro del flujo'],
    preview: {
      eyebrow: 'Comprobante fiscal',
      rows: [
        ['UUID', '…8F2A'],
        ['RFC', 'AAA010101AAA'],
        ['CFDI', 'Ingreso'],
        ['Estado', 'Timbrado'],
      ],
    },
  },
  {
    id: 'reporte',
    title: 'Reporte',
    short: 'El gasto se vuelve visible',
    body: 'La empresa analiza gasto por periodo, estación, usuario y demás dimensiones para tomar decisiones con datos reales.',
    meta: 'Visibilidad',
    icon: FaChartPie,
    points: ['Gasto por periodo', 'Estación y usuario', 'Exportación CSV'],
    preview: {
      eyebrow: 'Resumen del mes',
      rows: [
        ['Gasolina', '$142,800'],
        ['Casetas', '$43,620'],
        ['Tickets', '348'],
        ['Variación', '+8.4%'],
      ],
    },
  },
];

export default function TikentaFlow() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;

  return (
    <section id="flujo" className="relative py-20 md:py-28 overflow-hidden bg-tk-dark text-white">
      <div className="tikenta-dash-grid absolute inset-0 opacity-25 pointer-events-none" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-tk-brand/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-tk-tint blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tk-soft mb-3">Cómo funciona</p>
          <h2 className="text-3xl md:text-5xl">
            Del ticket al control fiscal,{' '}
            <span className="tikenta-serif text-tk-soft">paso a paso</span>.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            El flujo real del producto: captura, lectura, validación, facturación y reporte. Sin venderlo como un sistema genérico.
          </p>
        </div>

        {/* Progress rail */}
        <div className="mb-8 md:mb-10 overflow-x-auto pb-2">
          <ol className="relative flex min-w-[640px] md:min-w-0 gap-2">
            <span
              className="absolute top-[18px] left-6 right-6 h-px bg-white/15"
              aria-hidden="true"
            />
            <span
              className="absolute top-[18px] left-6 h-px bg-tk-brand transition-all duration-500"
              style={{
                width: active === 0
                  ? '0px'
                  : `calc(${(active / (steps.length - 1)) * 100}% - 1.5rem)`,
              }}
              aria-hidden="true"
            />
            {steps.map((item, index) => {
              const isActive = index === active;
              const isDone = index < active;
              return (
                <li key={item.id} className="relative z-10 flex-1">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className="w-full text-left group"
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <span
                      className={`mb-3 ml-1 flex h-9 w-9 items-center justify-center rounded-full border text-xs font-black transition-all ${
                        isActive
                          ? 'border-tk-brand bg-tk-brand text-white scale-110 shadow-[0_0_0_4px_rgba(79,46,211,0.25)]'
                          : isDone
                            ? 'border-tk-brand bg-tk-dark text-tk-brand'
                            : 'border-white/20 bg-tk-dark text-white/45 group-hover:border-tk-brand/60 group-hover:text-white'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`block text-sm font-bold ${isActive ? 'text-white' : 'text-white/45 group-hover:text-white/80'}`}>
                      {item.title}
                    </span>
                    <span className="hidden sm:block text-[11px] text-white/35 mt-0.5 leading-snug pr-2">
                      {item.short}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Active detail panel */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5 md:gap-6 items-stretch">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="h-12 w-12 rounded-xl bg-tk-brand/20 text-tk-brand grid place-items-center shrink-0">
                <Icon size={22} />
              </span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-tk-soft">
                  Paso {active + 1} · {step.meta}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mt-1">{step.title}</h3>
              </div>
            </div>

            <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
              {step.body}
            </p>

            <ul className="mt-6 space-y-3">
              {step.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/75">
                  <span className="mt-0.5 h-5 w-5 rounded-md bg-tk-brand/20 text-tk-brand grid place-items-center text-[10px] font-black shrink-0">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                disabled={active === 0}
                onClick={() => setActive((v) => Math.max(0, v - 1))}
                className="rounded-lg border border-white/20 px-4 py-2.5 text-sm font-bold text-white/80 hover:border-tk-brand hover:text-white disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
              >
                Anterior
              </button>
              <button
                type="button"
                disabled={active === steps.length - 1}
                onClick={() => setActive((v) => Math.min(steps.length - 1, v + 1))}
                className="inline-flex items-center gap-2 rounded-lg bg-tk-brand px-4 py-2.5 text-sm font-bold text-white hover:bg-tk-deep disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
              >
                Siguiente
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </article>

          <aside className="rounded-2xl border border-white/10 bg-[#111418] p-5 md:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tk-brand via-tk-soft to-transparent" />
            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-tk-soft">
                  {step.preview.eyebrow}
                </p>
                <p className="text-sm text-white/45 mt-1">Vista del módulo en este paso</p>
              </div>
              <span className="tikenta-num text-xs text-white/35">0{active + 1}/05</span>
            </div>

            <div className="rounded-xl border border-white/10 bg-tk-dark overflow-hidden">
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-white/[0.03]">
                <span className="text-xs font-bold text-white/70">Tikenta · flujo</span>
                <span className="flex gap-1.5" aria-hidden="true">
                  <i className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <i className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <i className="h-1.5 w-1.5 rounded-full bg-tk-brand" />
                </span>
              </div>
              <dl className="divide-y divide-white/10">
                {step.preview.rows.map(([label, value], index) => (
                  <div
                    key={label}
                    className="grid grid-cols-[1fr_auto] gap-4 px-3.5 py-3 text-sm"
                    style={{ animation: `tikenta-flow-fade 0.35s ease ${index * 0.04}s both` }}
                  >
                    <dt className="text-white/40">{label}</dt>
                    <dd className="tikenta-num font-semibold text-white text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-5 grid grid-cols-5 gap-1.5">
              {steps.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={item.title}
                  className={`h-1.5 rounded-full transition-all ${
                    index === active ? 'bg-tk-brand' : index < active ? 'bg-tk-brand/45' : 'bg-white/15'
                  }`}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
