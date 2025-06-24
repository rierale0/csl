import * as motion from "motion/react-client"
import { Container } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white px-4 py-10 md:px-0">
      {/* — Fila 1: título + imagen */}
      <div className="grid grid-cols-1 md:grid-cols-[16vw_30vw_20px_1fr] items-end z-10 gap-6 md:gap-0">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-[4.7vw] font-bold leading-tight drop-shadow-xl text-center md:text-left"
        >
          Movemos<br />el mundo<br />contigo
        </motion.h1>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="block md:col-start-4 md:justify-self-end"
        >
          <img
            src="/images/hero-containers.png"
            alt="Contenedores"
            className="w-full max-w-sm mx-auto md:w-[45vw] h-auto"
          />
        </motion.div>
      </div>

      {/* — Fila 2: párrafo + botón */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-[16vw_30vw_20px_1fr] z-10 mt-6 md:mt-0"
      >
        <div className="text-center md:text-left md:col-start-2">
          <p className="font-light text-xl sm:text-2xl md:text-[1.4vw]">
            Logística confiable, rápida y segura
          </p>
          <button className="flex items-center justify-center md:justify-start gap-2 mt-6 bg-[#DC6018] text-2xl md:text-[1.4vw] text-white font-regular rounded-sm px-5 py-1 hover:bg-[#b94c12] transition cursor-pointer mx-auto md:mx-0">
            <Container /> Contáctanos
          </button>
        </div>
      </motion.div>
    </section>
  );
}
