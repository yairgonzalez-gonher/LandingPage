import LandingSaaS from './pages/LandingSaaS';
import ThemeSelector from './components/ThemeSelector';
// Import to ensure Tailwind detects all dynamic classes
import './components/TailwindClassGenerator';

function App() {
  return (
    <>
      <LandingSaaS />
      <ThemeSelector />
    </>
  );
}

export default App;
