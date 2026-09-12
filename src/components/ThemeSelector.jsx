import { useTheme } from '../context/ThemeContext';
import { FaPalette } from 'react-icons/fa';
import { useState } from 'react';

export default function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-steel hover:bg-steel-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Cambiar tema"
        title="Cambiar tema"
      >
        <FaPalette className="text-xl" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className={`fixed bottom-24 right-6 z-50 bg-${theme.bg === 'gray-900' ? 'gray-800' : 'white'} rounded-xl shadow-2xl p-4 border border-${theme.bg === 'gray-900' ? 'gray-700' : 'gray-200'} min-w-[200px]`}>
            <h3 className={`text-sm font-semibold mb-3 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
              Seleccionar tema
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.values(themes).map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t);
                    setIsOpen(false);
                  }}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    theme.name === t.name
                      ? `border-${theme.primary}-500 bg-${theme.primary}-50`
                      : `border-${theme.bg === 'gray-900' ? 'gray-600' : 'gray-200'} hover:border-${theme.primary}-300`
                  }`}
                >
                  <div
                    className={`w-full h-8 rounded mb-2 bg-gradient-to-r from-${t.primary}-500 to-${t.secondary}-500`}
                  />
                  <span className={`text-xs font-medium text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
                    {t.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

