import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import DownloadModal from '../components/DownloadModal';
import DemoModal from '../components/DemoModal';
import { FaCloud, FaShieldAlt, FaSync, FaCog } from 'react-icons/fa';

export default function LandingSaaS() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Soluciones', id: 'soluciones' },
    { label: 'Estadísticas', id: 'estadisticas' },
    { label: 'Testimonios', id: 'testimonios' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const features = [
    { icon: <FaCloud size={32} />, title: 'Tikenta', desc: 'Automatización de tickets y facturas para tu negocio', badge: 'Ver más', href: '/soluciones/tikenta' },
    { icon: <FaShieldAlt size={32} />, title: 'Foryzen', desc: 'ERP que automatiza y hace más fácil las actividades de tu empresa', badge: 'Ver más', href: '/soluciones/foryzen' },
    { icon: <FaCog size={32} />, title: 'Software a la Medida', desc: 'Tienes una idea o necesitas automatizar tu negocio, nosotros podemos desarrollarla', badge: 'Ver más', href: '/soluciones/software-a-la-medida' },
    { icon: <FaSync size={32} />, title: 'CRM', desc: 'Manejo y control de tus clientes más fácil, así como su acercamiento con ellos', badge: 'Ver más', href: '/soluciones/crm' },
  ];

  return (
    <>
      <Navbar
        links={navLinks}
        onDownloadOpen={() => setDownloadOpen(true)}
        onDemoOpen={() => setDemoOpen(true)}
      />
      <Hero
        title="Plataformas realizadas para facilitar tu día a día"
        subtitle="Automatiza y escala tu negocio con nuestras soluciones todo-en-uno."
        ctaText="Solicitar demo"
        onDemoOpen={() => setDemoOpen(true)}
      />
      <Features items={features} title="Nuestras Soluciones" />
      <Stats />
      <Testimonials />
      <CTA
        title="¿Listo para transformar tu negocio?"
        description="Únete a miles de empresas que ya están creciendo con nuestra plataforma."
        buttonText="Comenzar ahora"
        onDemoOpen={() => setDemoOpen(true)}
      />
      <ContactForm />
      <Footer />
      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
