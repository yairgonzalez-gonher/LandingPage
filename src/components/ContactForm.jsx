import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTheme } from '../context/ThemeContext';

const schema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export default function ContactForm() {
  const { theme } = useTheme();
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm({ 
    resolver: zodResolver(schema) 
  });

  const onSubmit = data => {
    console.log(data);
    // TODO: replace with real API call
    reset();
  };

  return (
    <section id="contact" className={`py-20 bg-${theme.bg === 'gray-900' ? 'gray-800' : 'gray-50'}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-${theme.text === 'white' ? 'white' : 'gray-900'}`}>
            Contáctanos
          </h2>
          <p className={`text-lg text-${theme.text === 'white' ? 'gray-300' : 'gray-600'}`}>
            Estamos aquí para ayudarte
          </p>
        </div>
        
        {isSubmitSuccessful && (
          <div className={`mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center`}>
            ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 bg-${theme.bg === 'gray-900' ? 'gray-700' : 'white'} p-8 rounded-xl shadow-lg`}>
          <div>
            <input 
              {...register('name')} 
              placeholder="Nombre completo" 
              className={`w-full p-4 border-2 border-${theme.bg === 'gray-900' ? 'gray-600' : 'gray-300'} rounded-lg focus:outline-none focus:border-${theme.primary}-500 bg-${theme.bg === 'gray-900' ? 'gray-800' : 'white'} text-${theme.text === 'white' ? 'white' : 'gray-900'}`}
            />
            {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <input 
              {...register('email')} 
              type="email"
              placeholder="Correo electrónico" 
              className={`w-full p-4 border-2 border-${theme.bg === 'gray-900' ? 'gray-600' : 'gray-300'} rounded-lg focus:outline-none focus:border-${theme.primary}-500 bg-${theme.bg === 'gray-900' ? 'gray-800' : 'white'} text-${theme.text === 'white' ? 'white' : 'gray-900'}`}
            />
            {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <textarea 
              {...register('message')} 
              placeholder="Tu mensaje..." 
              rows="5"
              className={`w-full p-4 border-2 border-${theme.bg === 'gray-900' ? 'gray-600' : 'gray-300'} rounded-lg focus:outline-none focus:border-${theme.primary}-500 resize-none bg-${theme.bg === 'gray-900' ? 'gray-800' : 'white'} text-${theme.text === 'white' ? 'white' : 'gray-900'}`}
            ></textarea>
            {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message.message}</p>}
          </div>

          <button 
            type="submit" 
            className={`w-full py-4 bg-${theme.primary}-600 hover:bg-${theme.primary}-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl`}
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}