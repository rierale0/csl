import * as motion from "motion/react-client";
import { Container } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white px-4 py-10 md:px-20 lg:px-0 lg:pt-25">
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

          <button className="flex items-center justify-center gap-2 bg-[#DC6018] text-xl text-white font-regular rounded-sm px-5 py-1 hover:bg-[#b94c12] transition cursor-pointer max-w-max">
            <Container /> Contáctanos
          </button>
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
            width={300}
            height={300}
          />
        </motion.div>
      </div>
    </section>
  );
}
