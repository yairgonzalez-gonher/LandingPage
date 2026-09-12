import { addonPricing, billingNotes, money, plans, pricing } from './tikentaData';

const cycles = [
  { id: 'monthly', label: 'Mensual' },
  { id: 'semiannual', label: 'Semestral · 5% menos' },
  { id: 'annual', label: 'Anual · 12 por 10' },
];

export default function TikentaPricing({
  cycle,
  onCycleChange,
  addonOn,
  onAddonToggle,
  addonTier,
  onAddonTierChange,
  onSelectPlan,
}) {
  const tier = addonPricing[addonTier];
  const addon = tier[cycle];

  const noteExtra = (() => {
    if (!addonOn) return '';
    if (addonTier === 'enterprise') {
      return ' Add-on Enterprise: 10,000 CFDI/mes o más; precio, excedentes y condiciones mediante cotización.';
    }
    let extra = ` Add-on ${tier.name}: ${tier.included.toLocaleString('es-MX')} CFDI de venta/mes; excedente ${money(tier.extra)} por CFDI.`;
    if (addonTier === 'basic' && cycle === 'monthly') {
      extra += ' La promoción de lanzamiento de 3 meses sin costo puede aplicarse únicamente al nivel Básico mensual cuando esté habilitada.';
    }
    return extra;
  })();

  return (
    <section id="planes" className="py-20 md:py-28 bg-gris-claro">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel mb-3">Planes</p>
          <h2 className="text-3xl md:text-5xl text-carbon">El volumen que corresponde a tu operación.</h2>
          <p className="mt-4 text-lg text-gray-600">
            Los límites incluidos se renuevan mensualmente aunque contrates semestral o anual. Precios finales con IVA incluido.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {cycles.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onCycleChange(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                cycle === item.id
                  ? 'bg-carbon text-white border-carbon'
                  : 'bg-white text-carbon border-gray-200 hover:border-steel'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mb-4 p-4 md:p-5 rounded-2xl border border-steel/30 bg-gradient-to-r from-steel-50 to-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-carbon">Agregar Facturación a Clientes</p>
            <p className="text-sm text-gray-600 mt-1">
              Bolsa independiente de CFDI de venta. El nivel no depende del plan Core.
            </p>
          </div>
          <label className="inline-flex items-center gap-3 cursor-pointer self-start md:self-center">
            <span className="text-xs font-extrabold text-carbon">{addonOn ? `Incluido · ${tier.name}` : 'No incluido'}</span>
            <span className="relative w-12 h-7">
              <input
                type="checkbox"
                className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                checked={addonOn}
                onChange={(e) => onAddonToggle(e.target.checked)}
                aria-label="Agregar Facturación a Clientes"
              />
              <span className={`absolute inset-0 rounded-full transition-colors ${addonOn ? 'bg-steel' : 'bg-gray-300'}`} />
              <span className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${addonOn ? 'translate-x-5' : ''}`} />
            </span>
          </label>
        </div>

        {addonOn && (
          <p className="text-xs font-extrabold text-steel mb-4">
            {addon.amount === null
              ? `Facturación a Clientes ${tier.name}: ${tier.included.toLocaleString('es-MX')}+ CFDI/mes · precio y excedente por cotización.`
              : `Facturación a Clientes ${tier.name}: +${addon.label} MXN por ${addon.periodLabel}. Incluye ${tier.included.toLocaleString('es-MX')} CFDI/mes; CFDI adicional ${money(tier.extra)}.`}
          </p>
        )}

        {addonOn && (
          <div className="mb-6 p-4 md:p-5 rounded-2xl border border-steel/30 bg-white">
            <p className="font-semibold text-carbon mb-1">Selecciona el nivel de Facturación a Clientes</p>
            <p className="text-xs text-gray-500 mb-4">Independiente de Starter, Business o Professional.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {Object.entries(addonPricing).map(([id, item]) => (
                <label
                  key={id}
                  className={`block rounded-xl border p-4 cursor-pointer transition-colors ${
                    addonTier === id ? 'border-steel bg-steel-50' : 'border-gray-200 hover:border-steel/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="addonTier"
                    className="sr-only"
                    checked={addonTier === id}
                    onChange={() => onAddonTierChange(id)}
                  />
                  <span className="block text-xs font-extrabold text-carbon">{item.name}</span>
                  <span className="tikenta-num block text-xl font-bold mt-1">{item[cycle].label}</span>
                  <span className="block text-[11px] text-gray-500 mt-1 leading-snug">
                    {item.included.toLocaleString('es-MX')}{id === 'enterprise' ? '+' : ''} CFDI / mes
                    {item.extra != null ? ` · Extra ${money(item.extra)}` : ' · Extra negociado'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {plans.map((plan) => {
            const base = pricing[cycle][plan.id];
            const showTotal = addonOn && addon.amount != null && base.amount != null;
            const priceLabel = showTotal ? money(base.amount + addon.amount) : base.label;
            const ctaLabel = plan.id === 'enterprise' ? 'Hablar con ventas' : `Elegir ${plan.name}`;

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 overflow-hidden ${
                  plan.popular ? 'border-steel shadow-[0_16px_40px_rgba(70,130,180,0.14)]' : 'border-gray-200'
                }`}
              >
                {plan.popular && <span className="absolute top-0 left-0 right-0 h-1 bg-steel" />}
                {plan.popular && (
                  <span className="self-start mb-2 text-[10px] font-extrabold uppercase tracking-wide bg-steel/10 text-steel px-2 py-1 rounded-md">
                    Más popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-carbon">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1 min-h-[48px]">{plan.desc}</p>
                <p className="tikenta-num text-3xl font-bold text-carbon mt-3">{priceLabel}</p>
                <p className="text-[11px] text-gray-500 mt-1">{base.period}</p>
                {showTotal && (
                  <p className="mt-2 text-[11px] leading-relaxed rounded-lg bg-steel-50 border border-steel/20 text-steel-800 p-2">
                    Plan base: <strong>{base.label}</strong> + Facturación {tier.name}: <strong>{addon.label}</strong>
                  </p>
                )}
                {addonOn && (addon.amount == null || base.amount == null) && (
                  <p className="mt-2 text-[11px] leading-relaxed rounded-lg bg-steel-50 border border-steel/20 text-steel-800 p-2">
                    {addon.amount == null
                      ? `Facturación ${tier.name}: cotización personalizada. El plan base conserva su precio.`
                      : 'Las condiciones Enterprise se integran dentro de la cotización.'}
                  </p>
                )}
                {base.saving && (
                  <span className="self-start mt-2 text-[10px] font-extrabold bg-emerald-50 text-emerald-800 px-2 py-1 rounded-md">
                    {base.saving}
                  </span>
                )}
                <ul className="mt-4 mb-6 space-y-2 text-sm text-gray-600 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-steel font-black">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full rounded-lg py-3 text-sm font-bold transition-colors ${
                    plan.popular
                      ? 'bg-steel text-white hover:bg-steel-700'
                      : 'border border-gray-200 bg-white text-carbon hover:border-steel hover:text-steel'
                  }`}
                >
                  {ctaLabel}
                </button>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-sm text-steel rounded-xl border border-steel/30 bg-steel-50 p-4">
          <strong>{billingNotes[cycle]}</strong>
          {noteExtra}
        </p>
      </div>
    </section>
  );
}
