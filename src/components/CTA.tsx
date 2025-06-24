import { Container } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <div className="relative overflow-hidden">
      {/* Fondo absoluto ajustado */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-[400px] sm:h-[600px] md:h-[800px] bg-no-repeat bg-top bg-cover opacity-80 z-0"
        style={{
          backgroundImage: "url('/images/OC 05.svg')",
        }}
      />

      {/* Contenido encima */}
      <div className="relative z-10 py-20 sm:py-32 px-4 text-center text-white max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-csl-light leading-snug">
          ¿Listo para mover el mundo con nosotros?
        </h2>
        <p className="mt-4 text-lg sm:text-xl font-light text-csl-light">
          Contáctanos y descubre cómo podemos ayudarte a llevar tu carga más
          lejos.
        </p>
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 bg-[#DC6018] text-lg sm:text-2xl text-csl-dark font-normal rounded-sm px-6 py-3 hover:bg-[#b94c12] transition cursor-pointer">
            <Container />
            Habla con un asesor
          </button>
        </div>
      </div>
    </div>
  );
}
