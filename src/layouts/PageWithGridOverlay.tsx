import React, { ReactNode } from 'react';

interface PageWithGridOverlayProps {
  children: ReactNode;
}

export default function PageWithGridOverlay({
  children,
}: PageWithGridOverlayProps) {
  // Parámetros
  const start = 16;
  const end = 84;
  const count = 5;

  const positions = Array.from({ length: count }, (_, i) =>
    start + (i * (end - start)) / (count - 1)
  );

  return (
    <div className="relative min-h-screen">
      {/* — Líneas verticales intercaladas */}
      {positions.map((pct, idx) =>
        idx % 2 === 0 ? (
          <div
            key={idx}
            className="absolute inset-y-0 w-px bg-[#464E58] opacity-40"
            style={{ left: `${pct}%` }}
          />
        ) : (
          <div
            key={idx}
            className="absolute inset-y-0 border-l border-[#464E58] border-dashed opacity-40"
            style={{ left: `${pct}%` }}
          />
        )
      )}

      {/* — Contenido encima de las guías */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
