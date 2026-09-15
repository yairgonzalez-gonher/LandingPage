import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TIKENTA_DEMO_ENDPOINT } from './tikentaData';

const schema = z.object({
  name: z.string().min(2, 'Ingresa tu nombre'),
  company: z.string().min(2, 'Ingresa el nombre de la empresa'),
  email: z.string().email('Ingresa un correo válido'),
  phone: z.string().min(7, 'Ingresa un teléfono válido'),
  role: z.string().optional(),
  monthlyTicketVolume: z.string().min(1, 'Selecciona un volumen'),
  ticketType: z.string().min(1, 'Selecciona el tipo de tickets'),
  clientInvoicingInterest: z.string(),
  clientInvoicingTierInterest: z.string().optional(),
  message: z.string().optional(),
  privacyAccepted: z.boolean().refine((value) => value === true, {
    message: 'Debes aceptar el aviso de privacidad',
  }),
  planInterest: z.string().optional(),
});

export default function TikentaDemoModal({ open, onClose, initialPlan }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      clientInvoicingInterest: 'no',
      planInterest: initialPlan || '',
      privacyAccepted: false,
    },
  });

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      reset((values) => ({ ...values, planInterest: initialPlan || values.planInterest || '' }));
    }
  }, [open, initialPlan, reset]);

  const onSubmit = async (data) => {
    const params = new URLSearchParams(window.location.search);
    const payload = {
      ...data,
      source: 'tikenta_landing',
      planInterest: data.planInterest || initialPlan || '',
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      referrer: document.referrer || '',
      landingUrl: window.location.href,
      requestedAt: new Date().toISOString(),
    };

    if (TIKENTA_DEMO_ENDPOINT) {
      const response = await fetch(TIKENTA_DEMO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setError('root', { message: 'No pudimos enviar la solicitud. Intenta de nuevo.' });
        return;
      }
    } else {
      console.log('Tikenta demo request', payload);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-5 bg-tk-dark/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="tikenta-demo-title"
        className="w-full sm:max-w-3xl max-h-[94vh] overflow-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-gray-200 px-5 sm:px-7 py-5 flex justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tk-brand">Solicita una demostración</p>
            <h2 id="tikenta-demo-title" className="text-2xl text-tk-text mt-1">Ve cómo Tikenta trabaja con tus tickets.</h2>
            <p className="text-sm text-gray-500 mt-1">
              Cuéntanos tu operación. Preparamos una demo de gasolina, casetas o ambos.
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar" className="h-9 w-9 rounded-lg border border-gray-200 text-xl leading-none hover:border-tk-brand hover:text-tk-brand">
            ×
          </button>
        </div>

        <form className="px-5 sm:px-7 py-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <input type="hidden" {...register('planInterest')} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nombre completo" required error={errors.name?.message}>
              <input {...register('name')} className={inputClass} placeholder="Tu nombre" />
            </Field>
            <Field label="Empresa" required error={errors.company?.message}>
              <input {...register('company')} className={inputClass} placeholder="Nombre de tu empresa" />
            </Field>
            <Field label="Correo de trabajo" required error={errors.email?.message}>
              <input {...register('email')} type="email" className={inputClass} placeholder="nombre@empresa.com" />
            </Field>
            <Field label="Teléfono / WhatsApp" required error={errors.phone?.message}>
              <input {...register('phone')} type="tel" className={inputClass} placeholder="Ej. 771 000 0000" />
            </Field>
            <Field label="Puesto o área">
              <input {...register('role')} className={inputClass} placeholder="Administración, Finanzas, Flotilla" />
            </Field>
            <Field label="Tickets aproximados por mes" required error={errors.monthlyTicketVolume?.message}>
              <select {...register('monthlyTicketVolume')} className={inputClass}>
                <option value="">Selecciona una opción</option>
                <option value="1-300">1 a 300</option>
                <option value="301-1000">301 a 1,000</option>
                <option value="1001-3000">1,001 a 3,000</option>
                <option value="3001-10000">3,001 a 10,000</option>
                <option value="10000+">Más de 10,000</option>
                <option value="unknown">Aún no lo sé</option>
              </select>
            </Field>
          </div>

          <fieldset className="mt-5">
            <legend className="text-xs font-extrabold text-gray-700 mb-2">
              ¿Qué tipo de tickets necesitas gestionar? <span className="text-red-600">*</span>
            </legend>
            <div className="grid sm:grid-cols-3 gap-2">
              {[
                ['fuel', 'Gasolina'],
                ['tolls', 'Casetas'],
                ['fuel_and_tolls', 'Gasolina + casetas'],
              ].map(([value, label]) => (
                <label key={value} className="cursor-pointer">
                  <input type="radio" value={value} {...register('ticketType')} className="peer sr-only" />
                  <span className="flex items-center justify-center min-h-12 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 peer-checked:border-tk-brand peer-checked:bg-tk-tint2 peer-checked:text-tk-brand">
                    {label}
                  </span>
                </label>
              ))}
            </div>
            {errors.ticketType && <p className="text-red-600 text-xs mt-1">{errors.ticketType.message}</p>}
          </fieldset>

          <fieldset className="mt-5">
            <legend className="text-xs font-extrabold text-gray-700 mb-2">¿También te interesa facturar a tus clientes?</legend>
            <div className="grid sm:grid-cols-3 gap-2">
              {[
                ['yes', 'Sí, me interesa'],
                ['more_information', 'Quiero conocerlo'],
                ['no', 'No por ahora'],
              ].map(([value, label]) => (
                <label key={value} className="cursor-pointer">
                  <input type="radio" value={value} {...register('clientInvoicingInterest')} className="peer sr-only" />
                  <span className="flex items-center justify-center min-h-12 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 peer-checked:border-tk-brand peer-checked:bg-tk-tint2 peer-checked:text-tk-brand">
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <Field className="mt-5" label="Si te interesa facturar a clientes, ¿qué volumen aproximado necesitarías?">
            <select {...register('clientInvoicingTierInterest')} className={inputClass}>
              <option value="">Aún no lo sé / no aplica</option>
              <option value="basic">Básico · hasta 500 CFDI/mes</option>
              <option value="plus">Plus · hasta 2,000 CFDI/mes</option>
              <option value="pro">Pro · hasta 5,000 CFDI/mes</option>
              <option value="enterprise">Enterprise · 10,000+ CFDI/mes</option>
            </select>
          </Field>

          <Field className="mt-4" label="Cuéntanos qué quieres resolver">
            <textarea {...register('message')} rows={4} className={`${inputClass} resize-y`} placeholder="Ej. Tenemos una flotilla y queremos centralizar tickets y validación..." />
          </Field>

          <label className="mt-4 flex gap-3 items-start rounded-xl bg-gray-50 border border-gray-100 p-3 text-xs text-gray-600">
            <input type="checkbox" {...register('privacyAccepted')} className="mt-0.5 accent-[#4f2ed3]" />
            <span>
              Autorizo que mis datos se usen para atender esta solicitud y contactarme respecto de Tikenta.
              <span className="text-red-600"> *</span>
            </span>
          </label>
          {errors.privacyAccepted && <p className="text-red-600 text-xs mt-1">{errors.privacyAccepted.message}</p>}

          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col-reverse sm:flex-row sm:items-center gap-3">
            <p className="flex-1 text-sm" role="status">
              {isSubmitSuccessful && <span className="text-emerald-700">Recibimos tu solicitud. El equipo se pondrá en contacto.</span>}
              {errors.root && <span className="text-red-600">{errors.root.message}</span>}
            </p>
            <button type="button" onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-bold">
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-tk-brand text-white px-4 py-2.5 text-sm font-bold hover:bg-tk-deep disabled:opacity-60"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar mi demo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputClass =
  'w-full border border-gray-300 rounded-xl px-3.5 py-3 text-sm outline-none focus:border-tk-brand focus:ring-2 focus:ring-tk-brand/20';

function Field({ label, required, error, children, className = '' }) {
  return (
    <label className={`grid gap-1.5 ${className}`}>
      <span className="text-xs font-extrabold text-gray-700">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      {children}
      {error && <span className="text-red-600 text-xs">{error}</span>}
    </label>
  );
}
