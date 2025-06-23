import { Container } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <div className="relative overflow-hidden">
      {/* — Fondo absoluto, cubre todo el wrapper */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-[800px] bg-no-repeat bg-top bg-cover opacity-80 z-0"
        style={{
          backgroundImage: "url('/images/OC 05.svg')",
        }}
      />

      {/* — Contenido encima */}
      <div className="relative z-10 py-40 px-4 text-center text-white">
        
        <h2 className="text-4xl font-bold text-csl-light">
          ¿Listo para mover el mundo con nosotros?
        </h2>
        <p className="mt-4 text-xl font-light text-csl-light">
          Contáctanos y descubre cómo podemos ayudarte a llevar tu carga más
          lejos.
        </p>
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 mt-6 bg-[#DC6018] text-2xl md:text-xl text-csl-dark font-regular rounded-sm px-5 py-1 hover:bg-[#b94c12] transition cursor-pointer">
            <Container /> Habla con un asesor
          </button>
        </div>
      </div>
    </div>
  );
}
