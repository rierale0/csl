"use client"
import { Container } from "lucide-react";
import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <div className="relative overflow-hidden">
      {/* Fondo absoluto ajustado */}
      <div
        aria-hidden="true"
        className="bg-hero-pattern"
      />

      {/* Contenido encima */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 py-20 sm:py-32 px-4 text-center text-white max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-csl-dark leading-snug">
          ¿Listo para mover el mundo con nosotros?
        </h2>
        <p className="mt-4 text-lg sm:text-xl font-light text-csl-dark">
          Contáctanos y descubre cómo podemos ayudarte a llevar tu carga más lejos.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href={
              "https://api.whatsapp.com/send?phone=+593997911447&text=Hola.%20Estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20transporte%20y%20log%C3%ADstica%20que%20ofrece%20Camacho%20S%C3%A1nchez%20Logistics.%20%C2%BFPodr%C3%ADan%20proporcionarme%20informaci%C3%B3n%20o%20una%20cotizaci%C3%B3n?%20Muchas%20gracias.%20Mi%20nombre%20es%20John"
            }
            target="_blank"
          >
          <button className="flex items-center gap-2 bg-[#DC6018] text-lg sm:text-2xl text-csl-dark font-normal rounded-sm px-6 py-3 hover:bg-[#b94c12] transition cursor-pointer">
            <Container />
            Habla con un asesor
          </button></Link>
        </div>
      </motion.div>
    </div>
  );
}
