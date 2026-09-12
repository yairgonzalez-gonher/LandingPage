export const TIKENTA_LOGIN_URL = 'https://factuflow-dev.desarrollogonher.com/login';

/** When the demo API is ready, set this to the real endpoint. */
export const TIKENTA_DEMO_ENDPOINT = '';

/**
 * Drop in the product video when it is ready.
 * Examples:
 *   src: '/videos/tikenta-demo.mp4', type: 'video'
 *   src: 'https://www.youtube.com/watch?v=XXXX', type: 'youtube'
 *   src: 'https://vimeo.com/123456789', type: 'vimeo'
 * Optional poster image: poster: '/tikenta-poster.jpg'
 */
export const TIKENTA_VIDEO = {
  src: '',
  poster: '',
  type: 'video',
  title: 'Cómo funciona Tikenta',
};

export const money = (value) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);

export const pricing = {
  monthly: {
    starter: { amount: 1499, label: '$1,499', period: 'MXN / mes · IVA incluido', saving: '' },
    business: { amount: 5499, label: '$5,499', period: 'MXN / mes · IVA incluido', saving: '' },
    professional: { amount: 12499, label: '$12,499', period: 'MXN / mes · IVA incluido', saving: '' },
    enterprise: { amount: null, label: 'Desde $20,000', period: 'MXN / mes equivalente · IVA incluido', saving: '' },
  },
  semiannual: {
    starter: { amount: 8544.3, label: '$8,544.30', period: 'MXN / 6 meses · IVA incluido', saving: 'Ahorra 5%' },
    business: { amount: 31344.3, label: '$31,344.30', period: 'MXN / 6 meses · IVA incluido', saving: 'Ahorra 5%' },
    professional: { amount: 71244.3, label: '$71,244.30', period: 'MXN / 6 meses · IVA incluido', saving: 'Ahorra 5%' },
    enterprise: { amount: null, label: 'Cotización', period: 'Vigencia según propuesta', saving: '' },
  },
  annual: {
    starter: { amount: 14990, label: '$14,990', period: 'MXN / 12 meses · IVA incluido', saving: '12 meses por el precio de 10' },
    business: { amount: 54990, label: '$54,990', period: 'MXN / 12 meses · IVA incluido', saving: '12 meses por el precio de 10' },
    professional: { amount: 124990, label: '$124,990', period: 'MXN / 12 meses · IVA incluido', saving: '12 meses por el precio de 10' },
    enterprise: { amount: null, label: 'Cotización', period: 'Vigencia según propuesta', saving: '' },
  },
};

export const addonPricing = {
  basic: {
    code: 'CLIENT_INVOICING_BASIC',
    name: 'Básico',
    included: 500,
    extra: 1.0,
    monthly: { amount: 499, label: '$499', periodLabel: 'mes' },
    semiannual: { amount: 2844.3, label: '$2,844.30', periodLabel: '6 meses' },
    annual: { amount: 4990, label: '$4,990', periodLabel: '12 meses' },
  },
  plus: {
    code: 'CLIENT_INVOICING_PLUS',
    name: 'Plus',
    included: 2000,
    extra: 0.8,
    monthly: { amount: 1499, label: '$1,499', periodLabel: 'mes' },
    semiannual: { amount: 8544.3, label: '$8,544.30', periodLabel: '6 meses' },
    annual: { amount: 14990, label: '$14,990', periodLabel: '12 meses' },
  },
  pro: {
    code: 'CLIENT_INVOICING_PRO',
    name: 'Pro',
    included: 5000,
    extra: 0.6,
    monthly: { amount: 2999, label: '$2,999', periodLabel: 'mes' },
    semiannual: { amount: 17094.3, label: '$17,094.30', periodLabel: '6 meses' },
    annual: { amount: 29990, label: '$29,990', periodLabel: '12 meses' },
  },
  enterprise: {
    code: 'CLIENT_INVOICING_ENTERPRISE',
    name: 'Enterprise',
    included: 10000,
    extra: null,
    monthly: { amount: null, label: 'Cotización', periodLabel: '' },
    semiannual: { amount: null, label: 'Cotización', periodLabel: '' },
    annual: { amount: null, label: 'Cotización', periodLabel: '' },
  },
};

export const billingNotes = {
  monthly: 'Mensual: puedes cancelar la renovación cuando quieras y conservarás el acceso hasta finalizar el periodo pagado.',
  semiannual: 'Semestral: 6 meses de servicio con pago anticipado y 5% de ahorro. Puedes cancelar la renovación; el servicio continúa hasta finalizar la vigencia contratada.',
  annual: 'Anual: 12 meses de servicio por el equivalente a 10 mensualidades. Puedes cancelar la renovación; el servicio continúa hasta finalizar la vigencia contratada.',
};

export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'Para operaciones pequeñas que quieren centralizar tickets y comenzar a automatizar.',
    features: ['300 tickets al mes', '100 CFDI al mes', 'Ticket extra $2.50', 'CFDI extra $1.50', 'Timbrado PAC incluido'],
    popular: false,
  },
  {
    id: 'business',
    name: 'Business',
    desc: 'Para PyMEs que procesan tickets de forma constante y necesitan más capacidad.',
    features: ['3,000 tickets al mes', '1,000 CFDI al mes', 'Ticket extra $1.80', 'CFDI extra $1.00', 'Timbrado PAC incluido'],
    popular: true,
  },
  {
    id: 'professional',
    name: 'Professional',
    desc: 'Para empresas con alto volumen de tickets, usuarios y operación administrativa.',
    features: ['10,000 tickets al mes', '5,000 CFDI al mes', 'Ticket extra $1.20', 'CFDI extra $0.80', 'Timbrado PAC incluido'],
    popular: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    desc: 'Para volúmenes, integraciones, soporte o condiciones operativas especiales.',
    features: ['Volumen personalizado', 'Condiciones a medida', 'Integraciones según proyecto', 'SLA según Orden de Servicio', 'Venta consultiva'],
    popular: false,
  },
];

export const navLinks = [
  { href: '#solucion', label: 'Solución' },
  { href: '#flujo', label: 'Cómo funciona' },
  { href: '#reportes', label: 'Reportes' },
  { href: '#planes', label: 'Planes' },
  { href: '#faq', label: 'FAQ' },
];
