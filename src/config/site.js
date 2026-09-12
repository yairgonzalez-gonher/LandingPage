/** Shared site actions used by the main navbar and product pages. */
export const SITE_LOGIN_URL = 'https://factuflow-dev.desarrollogonher.com/login';

/** When the demo API is ready, set this to the real endpoint. */
export const SITE_DEMO_ENDPOINT = '';

/**
 * Desktop download links. Leave empty until the installers are published.
 * When ready, set e.g. '/downloads/gon-soft-lab-windows.exe'
 */
export const SITE_DOWNLOADS = [
  {
    id: 'windows',
    name: 'Windows',
    detail: 'Instalador .exe · 64 bits',
    href: '',
  },
  {
    id: 'macos',
    name: 'macOS',
    detail: 'Instalador .dmg · Apple Silicon y Intel',
    href: '',
  },
  {
    id: 'linux',
    name: 'Linux',
    detail: 'Paquete .AppImage / .deb',
    href: '',
  },
];
