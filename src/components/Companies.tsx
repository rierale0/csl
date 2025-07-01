import React from 'react';

export default function TrustedCompanies() {
  // — Paso 1: datos inline con tamaño personalizado (en píxeles)
  const companies = [
    { name: 'Chiquita', logo: '/images/logo-chiquita.png', width: 60 },
    { name: 'DP World', logo: '/images/logo-dp-world.png', width: 100 },
    { name: 'Del Monte', logo: '/images/logo-del-monte.png', width: 80 },
    { name: 'Reybanpac', logo: '/images/logo-reybanpac.png', width: 150 },
    { name: 'Prima Donna', logo: '/images/logo-prima-donna.png', width: 80 },
    { name: 'Noboa Trading', logo: '/images/logo-noboa-trading.png', width: 200 },
  ];

  return (
    <section className="py-12 text-center px-4 sm:px-20 md:px-40 lg:px-60 bg-csl-light">
      <h2 className="text-xl font-light text-csl-light mb-8">
        Compañías que han confiado su carga a CSL
      </h2>

      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 items-center">
        {companies.map((c) => (
          <div key={c.name} className="flex justify-center">
            <img
              src={c.logo}
              alt={c.name}
              width={c.width}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
