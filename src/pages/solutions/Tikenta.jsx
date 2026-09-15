import { useEffect, useState } from 'react';
import './tikenta/tikenta.css';
import TikentaNav from './tikenta/TikentaNav';
import TikentaHero from './tikenta/TikentaHero';
import TikentaVideo from './tikenta/TikentaVideo';
import TikentaCore from './tikenta/TikentaCore';
import TikentaReceipt from './tikenta/TikentaReceipt';
import TikentaFlow from './tikenta/TikentaFlow';
import TikentaReports from './tikenta/TikentaReports';
import TikentaAddon from './tikenta/TikentaAddon';
import TikentaPricing from './tikenta/TikentaPricing';
import TikentaClose from './tikenta/TikentaClose';
import TikentaDemoModal from './tikenta/TikentaDemoModal';
import DownloadModal from '../../components/DownloadModal';

const trustItems = [
  'OCR automático',
  'Flujo de aprobación',
  'Roles y permisos',
  'Reportes de gastos',
  'Multiempresa',
  'Operación en México',
];

export default function Tikenta() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [cycle, setCycle] = useState('monthly');
  const [addonOn, setAddonOn] = useState(false);
  const [addonTier, setAddonTier] = useState('basic');

  useEffect(() => {
    const previous = document.title;
    document.title = 'Tikenta | Facturación de tickets de gasolina y casetas';
    return () => {
      document.title = previous;
    };
  }, []);

  const openDemo = (plan = '') => {
    setSelectedPlan(plan);
    setDemoOpen(true);
  };

  return (
    <div className="tikenta-page min-h-screen">
      <TikentaNav
        onDemoOpen={() => openDemo()}
        onDownloadOpen={() => setDownloadOpen(true)}
      />
      <main>
        <TikentaHero onDemoOpen={() => openDemo()} />
        <TikentaVideo />
        <div className="border-y border-gray-200 bg-white py-5">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold text-gray-600">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <i className="h-1.5 w-1.5 rounded-[2px] bg-tk-brand" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <TikentaCore />
        <TikentaReceipt />
        <TikentaFlow />
        <TikentaReports />
        <TikentaAddon />
        <TikentaPricing
          cycle={cycle}
          onCycleChange={setCycle}
          addonOn={addonOn}
          onAddonToggle={setAddonOn}
          addonTier={addonTier}
          onAddonTierChange={setAddonTier}
          onSelectPlan={(plan) => openDemo(plan)}
        />
        <TikentaClose onDemoOpen={() => openDemo()} />
      </main>
      <TikentaDemoModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        initialPlan={selectedPlan}
      />
      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </div>
  );
}
