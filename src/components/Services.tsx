import { Container, MoveHorizontal, SquaresSubtract } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section className="text-csl-dark mb-20">
      <div className="grid grid-cols-6 grid-rows-[60px,1fr, 1fr,auto] gap-x-8">
        {/* — Fila 1: Línea + título */}
        <div className="col-start-1 col-end-5 row-start-1 flex gap-4 mb-10">
          <div className="w-[20vw] h-px bg-white self-center" />
          <h2 className="text-3xl font-medium">Transporte de contenedores</h2>
        </div>

        {/* — Fila 2: contenido compuesto */}
        <div className="col-start-2 col-end-7 row-start-2  text-2xl space-y-4">
          {/* Subfila A: icono + texto y mini-imágenes */}
          <div className="items-center">
            <div className="col-span-2 flex items-center gap-2 py-20 self-center">
              <SquaresSubtract />
              <p>
                <span className="text-[#E97154]">Secos</span> o{" "}
                <span className="text-[#A9CDFF]">refrigerados</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-end-6 row-start-2 self-center">
          <div className="relative group">
            {/* Tooltip */}

            <div className="absolute bottom-full left-1/2 mb-2 w-max max-w-xs px-3 py-2 border border-[#E97154] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Carga estándar y paletizada protegida contra intemperie
            </div>

            {/* Imagen */}
            <Image
              className="block"
              src="/images/container-types.png"
              alt="container"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* — Fila 3 */}
        <div className="col-start-2 col-end-7 row-start-3  text-2xl space-y-4">
          {/* Subfila A: icono + texto y mini-imágenes */}
          <div className="items-center">
            <div className="col-span-2 flex items-center gap-2 py-20">
              <MoveHorizontal />
              <span>De 20 o 40 pies</span>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-end-6 row-start-3 self-center">
          <Image
            src="/images/container-sizes.png"
            alt="container"
            width={400}
            height={400}
          />
        </div>

        <div className="col-start-2 col-end-6 row-start-4  text-2xl space-y-4">
          {/* Subfila A: icono + texto y mini-imágenes */}
          <div className="items-center">
            <div className="col-span-2 flex py-20">
              <p>
                <b>Garantizamos el cuidado de tu carga en todo momento,</b> con
                seguimiento constante y cumplimiento en los tiempos de entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-csl-dark flex flex-col items-center">
        <h3 className="font-medium text-2xl text-center mt-20">
          También puedes alquilar con nosotros
        </h3>
        <ServicesList />
        <div className="grid grid-cols-6 grid-rows-[60px,1fr, 1fr,auto] gap-x-8">
          <span className="col-start-2 col-end-6 text-start font-semibold text-2xl">
            Viaja tranquilo, nosotros nos encargamos.
          </span>
          <p className="col-start-2 col-end-5 row-start-2 font-light text-xl">
            Tu carga, contenedores y generadores están siempre protegidos;
            nuestras pólizas de seguro garantizan la cobertura que necesitas
            frente a cualquier accidente o robo mientras estén bajo nuestro
            cuidado.
          </p>
          <div className="col-start-2 col-end-6 row-start-3 items-center content-center">
            <button className="flex items-center gap-2 mt-6 bg-[#DC6018] text-2xl md:text-xl text-white font-regular rounded-sm px-5 py-1 hover:bg-[#b94c12] transition cursor-pointer">
              <Container /> Contáctanos y cotiza ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesList() {
  return (
    <div className="">
      <ul className="flex items-start gap-16 py-20">
        {[
          {
            title: "Contenedores secos",
            src: "/images/blue-container.png",
            alt: "container",
            desc: "Ideales para carga al granel y mercancía general.",
          },
          {
            title: "Chasis para contenedores",
            src: "/images/chassis.png",
            alt: "chassis",
            desc: "Disponibles para unidades de 20 y 40 pies, listos para tus operaciones.",
          },
          {
            title: "Generadores para refrigerados",
            src: "/images/generator.png",
            alt: "generator",
            desc: "Energía confiable para mantener la temperatura de tus contenedores refrigerados.",
          },
        ].map(({ title, src, alt, desc }) => (
          <li key={title} className="flex flex-col gap-3 w-78">
            <p className="text-lg font-medium whitespace-nowrap overflow-hidden truncate">
              {title}
            </p>
            <div className="relative w-78 h-48 rounded-lg overflow-hidden">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>

            <span className="font-light text-md leading-tight w-78">
              {desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
