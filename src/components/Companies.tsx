import React from 'react';

export default function TrustedCompanies() {
  // — Paso 1: datos inline
  const companies = [
    { name: 'Chiquita', logo: '/images/chiquita.png' },
    { name: 'DP World', logo: '/images/dp-world.png' },
    { name: 'ABC1',     logo: '/images/abc.png' },
    { name: 'ABC2',     logo: '/images/abc.png' },
    { name: 'ABC3',     logo: '/images/abc.png' },
    { name: 'ABC4',     logo: '/images/abc.png' },
  ];

  return (
    <section className="py-52 text-center">
      {/* Título */}
      <h2 className="text-xl font-light mb-8">
        Compañías que han confiado su carga a CSL
      </h2>

      <div className="grid gap-8 grid-cols-3 items-center px-60">
        {companies.map((c) => (
          <div key={c.name} className="flex justify-center">
            <img
              src={c.logo}
              alt={c.name}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
