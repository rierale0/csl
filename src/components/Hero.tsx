import { Container } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* — Fila 1: título + imagen */}
      <div className="py-10 pb-6 grid grid-cols-[16vw_30vw_20px_1fr] items-end z-10">
        {/* Título */}
        <h1 className="col-start-2 text-4xl md:text-[4.7vw] font-bold leading-[1.1] drop-shadow-xl">
          Movemos<br />el mundo<br />contigo
        </h1>

        {/* Imagen */}
        <div className="hidden md:block md:col-start-4 md:justify-self-end">
          <img
            src="/images/hero-containers.png"
            alt="Contenedores"
            className="w-[45vw] h-auto"
          />
        </div>
      </div>

      {/* — Fila 2: párrafo + botón */}
      <div className="grid grid-cols-[16vw_30vw_20px_1fr] z-10">
        <div className="col-start-2">
          <p className="font-light text-2xl md:text-[1.4vw]">
            Logística confiable, rápida y segura
          </p>
          <button className="flex items-center gap-2 mt-6 bg-[#DC6018] text-2xl md:text-[1.4vw] text-white font-regular rounded-sm px-5 py-1 hover:bg-[#b94c12] transition cursor-pointer">
            <Container/> Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
