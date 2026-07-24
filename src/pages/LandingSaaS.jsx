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
    { icon: <FaCloud size={32} />, title: 'Factuflow', desc: 'Automatizacion de Tickets y Facturas para tu Negocio', badge: "Ver mas" },
    { icon: <FaShieldAlt size={32} />, title: 'Forgeon', desc: 'ERP que automatiza y hace mas facil las actividades de tu Empresa', badge: "Ver mas" },
    { icon: <FaCog size={32} />, title: 'Software a la Medida', desc: 'Tienes una idea o necesitas automatizar tu negocio, nosotros podemos desarrollarla', badge: "Ver mas" },
    { icon: <FaSync size={32} />, title: 'CRM (TBD)', desc: 'Manejo y control de tus clientes mas facil, asi como su acercamiento con ellos', badge: 'Proximamente' },
    { icon: <FaChartBar size={32} />, title: 'POS (TBD)', desc: 'Facilita tus Ventas con Nuestro Sistema de Puntos de Venta', badge: 'Proximamente' },
    { icon: <FaMobile size={32} />, title: 'E-Commerce (TBD)', desc: 'Solucion para Poder llevar tu Negocio Digitalmente', badge: 'Proximamente' },
  ];

  return (
    <>
      <Navbar links={navLinks} />
      <Hero 
        title="Plataformas realizadas para facilitar tu día a día"
        subtitle="Automatiza y escala tu negocio con nuestras soluciones todo-en-uno."
        ctaText="Preguntar por mas informacion"
      />
      <Features items={features} title="Nuestras Soluciones" />
      <Stats />
      {/* <Pricing /> */}
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

