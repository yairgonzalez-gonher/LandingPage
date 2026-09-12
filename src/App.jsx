import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingSaaS from './pages/LandingSaaS';
import Tikenta from './pages/solutions/Tikenta';
import Foryzen from './pages/solutions/Foryzen';
import SoftwareALaMedida from './pages/solutions/SoftwareALaMedida';
import Crm from './pages/solutions/Crm';
import Pos from './pages/solutions/Pos';
import Ecommerce from './pages/solutions/Ecommerce';
import ThemeSelector from './components/ThemeSelector';
// Import to ensure Tailwind detects all dynamic classes
import './components/TailwindClassGenerator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingSaaS />} />
        <Route path="/soluciones/tikenta" element={<Tikenta />} />
        <Route path="/soluciones/foryzen" element={<Foryzen />} />
        <Route path="/soluciones/software-a-la-medida" element={<SoftwareALaMedida />} />
        <Route path="/soluciones/crm" element={<Crm />} />
        <Route path="/soluciones/pos" element={<Pos />} />
        <Route path="/soluciones/e-commerce" element={<Ecommerce />} />
      </Routes>
      <ThemeSelector />
    </BrowserRouter>
  );
}

export default App;
