import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { FaCloud, FaShieldAlt, FaSync, FaChartBar, FaMobile, FaCog } from 'react-icons/fa';

export default function LandingSaaS() {
  const navLinks = ['Home', 'Features', 'Stats', 'Pricing', 'Testimonials', 'Contact'];
  
  const features = [
    { icon: <FaCloud size={32} />, title: 'Cloud Native', desc: 'Almacenamiento seguro en la nube con acceso desde cualquier lugar.' },
    { icon: <FaShieldAlt size={32} />, title: 'Seguridad Avanzada', desc: 'Protección de datos de nivel empresarial con encriptación end-to-end.' },
    { icon: <FaSync size={32} />, title: 'Sincronización', desc: 'Sincronización en tiempo real en todos tus dispositivos.' },
    { icon: <FaChartBar size={32} />, title: 'Analíticas en Tiempo Real', desc: 'Dashboard con métricas y estadísticas en tiempo real.' },
    { icon: <FaMobile size={32} />, title: 'App Móvil', desc: 'Aplicaciones nativas para iOS y Android.' },
    { icon: <FaCog size={32} />, title: 'Integraciones', desc: 'Conecta con tus herramientas favoritas mediante API.' },
  ];

  return (
    <>
      <Navbar links={navLinks} />
      <Hero 
        title="Plataforma SaaS Completa"
        subtitle="Automatiza y escala tu negocio con nuestra solución todo-en-uno."
        ctaText="Comenzar prueba gratis"
      />
      <Features items={features} title="Características" />
      <Stats />
      <Pricing />
      <Testimonials />
      <CTA 
        title="¿Listo para transformar tu negocio?"
        description="Únete a miles de empresas que ya están creciendo con nuestra plataforma."
        buttonText="Comenzar ahora"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

