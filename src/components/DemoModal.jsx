import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SITE_DEMO_ENDPOINT } from '../config/site';

const schema = z.object({
  name: z.string().min(2, 'Ingresa tu nombre'),
  company: z.string().min(2, 'Ingresa el nombre de la empresa'),
  email: z.string().email('Ingresa un correo válido'),
  phone: z.string().min(7, 'Ingresa un teléfono válido'),
  interest: z.string().min(1, 'Selecciona una opción'),
  message: z.string().optional(),
  privacyAccepted: z.boolean().refine((value) => value === true, {
    message: 'Debes aceptar el aviso de privacidad',
  }),
});

const inputClass =
  'w-full border border-gray-300 rounded-xl px-3.5 py-3 text-sm outline-none focus:border-steel focus:ring-2 focus:ring-steel/20';

export default function DemoModal({ open, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      interest: '',
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
    if (open) reset({ interest: '', privacyAccepted: false });
  }, [open, reset]);

  const onSubmit = async (data) => {
    const params = new URLSearchParams(window.location.search);
    const payload = {
      ...data,
      source: 'gon_soft_lab_landing',
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      referrer: document.referrer || '',
      landingUrl: window.location.href,
      requestedAt: new Date().toISOString(),
    };

    if (SITE_DEMO_ENDPOINT) {
      const response = await fetch(SITE_DEMO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setError('root', { message: 'No pudimos enviar la solicitud. Intenta de nuevo.' });
        return;
      }
    } else {
      console.log('Demo request', payload);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-5 bg-carbon/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        className="w-full sm:max-w-xl max-h-[94vh] overflow-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-gray-200 px-5 sm:px-6 py-5 flex justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Registro</p>
            <h2 id="demo-title" className="text-2xl font-bold text-carbon mt-1">
              Solicita una demostración
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Déjanos tus datos y te contactamos para agendar una demo.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="h-9 w-9 rounded-lg border border-gray-200 text-xl leading-none hover:border-steel hover:text-steel"
          >
            ×
          </button>
        </div>

        <form className="px-5 sm:px-6 py-6" onSubmit={handleSubmit(onSubmit)} noValidate>
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
          </div>

          <Field className="mt-4" label="¿Qué solución te interesa?" required error={errors.interest?.message}>
            <select {...register('interest')} className={inputClass}>
              <option value="">Selecciona una opción</option>
              <option value="tikenta">Tikenta</option>
              <option value="foryzen">Foryzen</option>
              <option value="crm">CRM</option>
              <option value="software">Software a la medida</option>
              <option value="varios">Varias / aún no lo sé</option>
            </select>
          </Field>

          <Field className="mt-4" label="Cuéntanos qué quieres resolver">
            <textarea
              {...register('message')}
              rows={4}
              className={`${inputClass} resize-y`}
              placeholder="Ej. Queremos automatizar tickets y facturación..."
            />
          </Field>

          <label className="mt-4 flex gap-3 items-start rounded-xl bg-gray-50 border border-gray-100 p-3 text-xs text-gray-600">
            <input type="checkbox" {...register('privacyAccepted')} className="mt-0.5 accent-[#4682b4]" />
            <span>
              Autorizo que mis datos se usen para atender esta solicitud y contactarme.
              <span className="text-red-600"> *</span>
            </span>
          </label>
          {errors.privacyAccepted && (
            <p className="text-red-600 text-xs mt-1">{errors.privacyAccepted.message}</p>
          )}

          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col-reverse sm:flex-row sm:items-center gap-3">
            <p className="flex-1 text-sm" role="status">
              {isSubmitSuccessful && (
                <span className="text-emerald-700">
                  Recibimos tu solicitud. El equipo se pondrá en contacto.
                </span>
              )}
              {errors.root && <span className="text-red-600">{errors.root.message}</span>}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-bold"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-steel text-white px-4 py-2.5 text-sm font-bold hover:bg-steel-700 disabled:opacity-60"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar mi demo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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
