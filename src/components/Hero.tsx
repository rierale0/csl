import * as motion from "motion/react-client";
import { Container } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white px-4 py-10 h-[calc(100vh-75px)] md:px-20 lg:px-0 lg:pt-25">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] items-center z-10 gap-10">
        {/* Columna izquierda: texto + subtítulo + botón */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col max-w-lg mx-auto md:mx-auto md:justify-self-center text-left gap-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-xl">
            Movemos
            <br />
            el mundo
            <br />
            contigo
          </h1>

          <p className="font-light text-xl">
            Logística confiable, rápida y segura
          </p>
          <Link
            href={
              "https://api.whatsapp.com/send?phone=+593997911447&text=Hola.%20Estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20transporte%20y%20log%C3%ADstica%20que%20ofrece%20Camacho%20S%C3%A1nchez%20Logistics.%20%C2%BFPodr%C3%ADan%20proporcionarme%20informaci%C3%B3n%20o%20una%20cotizaci%C3%B3n?%20Muchas%20gracias.%20Mi%20nombre%20es%20John"
            }
            target="_blank"
          >
            <button className="flex items-center justify-center gap-2 bg-[#DC6018] text-xl text-white font-regular rounded-sm px-5 py-1 hover:bg-[#b94c12] transition cursor-pointer max-w-max">
              <Container /> Contáctanos
            </button>
          </Link>
        </motion.div>

        {/* Columna derecha: imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-none mx-auto lg:justify-self-end"
        >
          <Image
            src="/images/hero-containers.png"
            alt="Contenedores"
            className="w-full h-auto object-contain lg:w-[60vw] lg:h-auto"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
}
