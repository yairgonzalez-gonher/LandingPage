import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingSaaS from './pages/LandingSaaS';
import Tikenta from './pages/solutions/Tikenta';
import Foryzen from './pages/solutions/Foryzen';
import SoftwareALaMedida from './pages/solutions/SoftwareALaMedida';
import Crm from './pages/solutions/Crm';
import ThemeSelector from './components/ThemeSelector';
import './components/TailwindClassGenerator';

function AppShell() {
  const { pathname } = useLocation();
  const showThemeSelector = !pathname.startsWith('/soluciones/');

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingSaaS />} />
        <Route path="/soluciones/tikenta" element={<Tikenta />} />
        <Route path="/soluciones/foryzen" element={<Foryzen />} />
        <Route path="/soluciones/software-a-la-medida" element={<SoftwareALaMedida />} />
        <Route path="/soluciones/crm" element={<Crm />} />
      </Routes>
      {showThemeSelector && <ThemeSelector />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
