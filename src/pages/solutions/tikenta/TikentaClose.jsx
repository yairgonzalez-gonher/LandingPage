import { Link } from 'react-router-dom';

const faqs = [
  {
    q: '¿Para qué tipo de tickets está pensado Tikenta?',
    a: 'El enfoque principal es la gestión y facturación de tickets de gasolina y casetas, junto con captura, validación, seguimiento y análisis de gasto.',
  },
  {
    q: '¿Tikenta también emite facturas a mis propios clientes?',
    a: 'Sí. Es un add-on opcional e independiente del plan base. Puedes elegir Básico (500 CFDI), Plus (2,000), Pro (5,000) o Enterprise (10,000+). La bolsa de CFDI de venta es independiente de los CFDI derivados de tickets.',
  },
  {
    q: '¿Los tickets se aprueban antes de continuar?',
    a: 'El producto contempla estados de revisión, aprobación y rechazo, así como motivo de rechazo, observaciones e historial para mantener trazabilidad.',
  },
  {
    q: '¿Puedo analizar el gasto?',
    a: 'Sí. Incluye reportes de gastos por periodo, estación y usuario, además de métricas y exportación CSV.',
  },
  {
    q: '¿Los límites del plan se acumulan si pago anual?',
    a: 'No. Los límites de tickets y CFDI se renuevan mensualmente y no se acumulan, incluso en una contratación semestral o anual.',
  },
  {
    q: '¿Los precios incluyen IVA?',
    a: 'Sí. Los precios publicados están expresados como precios finales con IVA incluido.',
  },
];

export default function TikentaClose({ onDemoOpen }) {
  return (
    <>
      <section className="bg-tk-dark text-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tk-soft mb-3">Control y seguridad</p>
            <h2 className="text-3xl md:text-5xl">Una herramienta empresarial necesita trazabilidad.</h2>
            <p className="mt-4 text-white/60 text-lg">
              Usuarios, roles, permisos, estados de revisión, historial y configuración por organización. Sin prometer controles que no estén en el producto.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ['Roles y permisos', 'Control de acceso por responsabilidades.'],
              ['Historial', 'Seguimiento de eventos y decisiones sobre tickets.'],
              ['Multiempresa', 'Administración por organización y contexto empresarial.'],
              ['Validación', 'Aprobación y rechazo antes de continuar el flujo.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <b className="block mb-1">{title}</b>
                <span className="text-sm text-white/55">{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tk-brand mb-3">Preguntas frecuentes</p>
          <h2 className="text-3xl md:text-5xl text-tk-text mb-8">Lo importante antes de contratar.</h2>
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-gray-200 py-4">
              <summary className="cursor-pointer font-bold text-tk-text list-none flex justify-between gap-4 items-center">
                {item.q}
                <span className="text-tk-brand text-xl leading-none group-open:hidden">+</span>
                <span className="text-tk-brand text-xl leading-none hidden group-open:inline">−</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 pr-8">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tk-dark to-[#31206f] text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-tk-brand/30 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl max-w-xl">Controla los tickets de movilidad desde un solo lugar.</h2>
              <p className="mt-3 text-white/60 max-w-lg">Gasolina, casetas, validación, facturación y reportes. Menos trabajo administrativo.</p>
            </div>
            <button
              type="button"
              onClick={onDemoOpen}
              className="relative inline-flex justify-center rounded-lg bg-white text-tk-text font-bold px-5 py-3.5 hover:bg-tk-bg transition-colors shrink-0"
            >
              Solicitar demo
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#110b30] text-white/50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[2fr_1fr_1fr] gap-8">
          <div>
            <a href="#inicio" className="font-extrabold text-white text-lg tracking-tight">TIKENTA</a>
            <p className="mt-3 text-sm max-w-md">
              Plataforma para la captura, validación, facturación y análisis de tickets de gasolina y casetas para empresas en México.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Producto</h4>
            <a href="#solucion" className="block text-sm mb-2 hover:text-white">Solución</a>
            <a href="#flujo" className="block text-sm mb-2 hover:text-white">Cómo funciona</a>
            <a href="#reportes" className="block text-sm mb-2 hover:text-white">Reportes</a>
            <a href="#planes" className="block text-sm mb-2 hover:text-white">Planes</a>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">GONSoftLab</h4>
            <Link to="/" className="block text-sm mb-2 hover:text-white">Inicio</Link>
            <a href="/#contacto" className="block text-sm mb-2 hover:text-white">Contacto</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-5 border-t border-white/10 text-xs">
          © {new Date().getFullYear()} GONSoftLab. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}
