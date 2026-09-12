import { useEffect, useState } from 'react';

export default function Stats() {
  const [counted, setCounted] = useState(false);

  const stats = [
    { value: 10000, suffix: '+', label: 'Clientes Satisfechos', icon: '👥' },
    { value: 500, suffix: '+', label: 'Proyectos Completados', icon: '🚀' },
    { value: 50, suffix: '+', label: 'Países', icon: '🌍' },
    { value: 99, suffix: '%', label: 'Satisfacción', icon: '⭐' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [counted]);

  return (
    <section
      id="stats"
      className="py-20 bg-carbon text-white"
    >
      <div id="stats-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">
                {counted ? (
                  <CountUpAnimation target={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpAnimation({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}

