/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Primary colors
    'bg-steel-600', 'bg-steel-700', 'bg-steel-500', 'bg-steel-400', 'bg-steel-50',
    'text-steel-600', 'text-steel-500', 'text-steel-400',
    'border-steel-500', 'border-steel-600', 'border-steel-300',
    'hover:bg-steel-700', 'hover:text-steel-600', 'hover:border-steel-300',
    'from-steel-600', 'via-steel-500', 'to-steel-600',
    'bg-carbon', 'bg-carbon-light', 'text-carbon', 'text-steel',
    'bg-indigo-600', 'bg-blue-600', 'bg-green-600', 'bg-orange-600', 'bg-purple-600',
    'bg-indigo-700', 'bg-blue-700', 'bg-green-700', 'bg-orange-700', 'bg-purple-700',
    'bg-indigo-500', 'bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-purple-500',
    'bg-indigo-400', 'bg-blue-400', 'bg-green-400', 'bg-orange-400', 'bg-purple-400',
    'text-indigo-600', 'text-blue-600', 'text-green-600', 'text-orange-600', 'text-purple-600',
    'text-indigo-500', 'text-blue-500', 'text-green-500', 'text-orange-500', 'text-purple-500',
    'text-indigo-400', 'text-blue-400', 'text-green-400', 'text-orange-400', 'text-purple-400',
    'border-indigo-500', 'border-blue-500', 'border-green-500', 'border-orange-500', 'border-purple-500',
    'border-indigo-600', 'border-blue-600', 'border-green-600', 'border-orange-600', 'border-purple-600',
    'hover:bg-indigo-700', 'hover:bg-blue-700', 'hover:bg-green-700', 'hover:bg-orange-700', 'hover:bg-purple-700',
    'hover:text-indigo-600', 'hover:text-blue-600', 'hover:text-green-600', 'hover:text-orange-600', 'hover:text-purple-600',
    // Secondary colors
    'bg-purple-600', 'bg-cyan-500', 'bg-emerald-500', 'bg-red-500',
    'text-purple-600', 'text-cyan-500', 'text-emerald-500', 'text-red-500',
    // Accent colors
    'bg-pink-500', 'bg-teal-500', 'bg-lime-500', 'bg-yellow-500',
    'text-pink-500', 'text-teal-500', 'text-lime-500', 'text-yellow-500',
    // Gradients
    'from-indigo-600', 'from-blue-600', 'from-green-600', 'from-orange-600', 'from-purple-600',
    'via-indigo-500', 'via-blue-500', 'via-green-500', 'via-orange-500', 'via-purple-500',
    'to-purple-600', 'to-cyan-500', 'to-emerald-500', 'to-red-500',
    // Background variants
    'bg-gray-900', 'bg-gray-800', 'bg-gray-700', 'bg-gray-600', 'bg-gray-500', 
    'bg-gray-400', 'bg-gray-300', 'bg-gray-200', 'bg-gray-100', 'bg-gray-50', 'bg-white',
    'text-gray-900', 'text-gray-800', 'text-gray-700', 'text-gray-600', 'text-gray-500',
    'text-gray-400', 'text-gray-300', 'text-gray-200', 'text-white',
    'border-gray-900', 'border-gray-800', 'border-gray-700', 'border-gray-600', 
    'border-gray-500', 'border-gray-400', 'border-gray-300', 'border-gray-200',
    // Light variants
    'bg-indigo-50', 'bg-blue-50', 'bg-green-50', 'bg-orange-50', 'bg-purple-50',
    'border-indigo-300', 'border-blue-300', 'border-green-300', 'border-orange-300', 'border-purple-300',
    'hover:border-indigo-300', 'hover:border-blue-300', 'hover:border-green-300', 'hover:border-orange-300', 'hover:border-purple-300',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

