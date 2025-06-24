"use client"
import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import {
  Container,
  MoveHorizontal,
  PowerIcon,
  Shield,
  SquaresSubtract,
} from "lucide-react";
import Image from "next/image";

export default function Services() {
  const titleRef = useRef(null);
  const secoRef = useRef(null);
  const secoImgRef = useRef(null);
  const piesRef = useRef(null);
  const piesImgRef = useRef(null);
  const shieldRef = useRef(null);
  const footerRef = useRef(null);

  const titleInView = useInView(titleRef, { amount: 0.3 });
  const secoInView = useInView(secoRef, { amount: 0.3 });
  const secoImgInView = useInView(secoImgRef, { amount: 0.3 });
  const piesInView = useInView(piesRef, { amount: 0.3 });
  const piesImgInView = useInView(piesImgRef, { amount: 0.3 });
  const shieldInView = useInView(shieldRef, { amount: 0.3 });
  const footerInView = useInView(footerRef, { amount: 0.3 });

  return (
    <section className="text-csl-dark mb-20 px-4 sm:px-8">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-6 gap-x-8 gap-y-10"
      >
        <div className="sm:col-start-1 sm:col-end-5 flex gap-4 mb-10 items-center justify-center sm:justify-start">
          <div className="w-24 h-px bg-white self-center hidden sm:block" />
          <h2 className="text-2xl sm:text-3xl font-medium flex items-center gap-2 text-center sm:text-left">
            Transporte de contenedores
          </h2>
        </div>

        <motion.div
          ref={secoRef}
          initial={{ opacity: 0, x: -30 }}
          animate={secoInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="sm:col-start-2 sm:col-end-4 flex items-center gap-2 text-xl sm:text-2xl max-w-xl justify-center sm:justify-start leading-normal"
        >
          <SquaresSubtract className="flex-shrink-0" />
          <p className="m-0">
            <span className="text-[#E97154]">Secos</span> o{" "}
            <span className="text-[#A9CDFF]">refrigerados</span>
          </p>
        </motion.div>

        <motion.div
          ref={secoImgRef}
          initial={{ opacity: 0, x: 30 }}
          animate={secoImgInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sm:col-start-4 sm:col-end-6 relative group flex justify-center sm:justify-start"
        >
          <div className="absolute bottom-full left-1/2 mb-2 max-w-xs px-3 py-2 border border-[#E97154] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 whitespace-normal">
            Carga estándar y paletizada protegida contra intemperie
          </div>
          <Image
            className="block"
            src="/images/container-types.png"
            alt="container"
            width={200}
            height={200}
            sizes="(min-width: 640px) 300px, 200px"
          />
        </motion.div>

        <motion.div
          ref={piesRef}
          initial={{ opacity: 0, x: -30 }}
          animate={piesInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="sm:col-start-2 sm:col-end-4 flex items-center gap-2 text-xl sm:text-2xl max-w-xl justify-center sm:justify-start leading-normal"
        >
          <MoveHorizontal className="flex-shrink-0" />
          <span>De 20 o 40 pies</span>
        </motion.div>

        <motion.div
          ref={piesImgRef}
          initial={{ opacity: 0, x: 30 }}
          animate={piesImgInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="sm:col-start-4 sm:col-end-6 flex justify-center sm:justify-start"
        >
          <Image
            src="/images/container-sizes.png"
            alt="container"
            width={300}
            height={300}
            sizes="(min-width: 640px) 400px, 300px"
          />
        </motion.div>

        <motion.div
          ref={shieldRef}
          initial={{ opacity: 0, y: 20 }}
          animate={shieldInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="sm:col-start-2 sm:col-end-6 text-base sm:text-xl space-y-4 text-center sm:text-left"
        >
          <p className="py-10">
            <Shield size={20} className="inline-block mr-2" />
            <strong>
              Garantizamos el cuidado de tu carga en todo momento
            </strong>{" "}
            con seguimiento constante y cumplimiento en los tiempos de entrega.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        ref={footerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-csl-dark flex flex-col items-center px-4 sm:px-8"
      >
        <h3 className="font-medium text-xl sm:text-2xl text-center mt-20">
          También puedes alquilar con nosotros
        </h3>
        <div className="lg:items-center">
          <ServicesList />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-6 grid-rows-[auto,auto,auto] mt-10 gap-y-6">
          <span className="sm:col-start-2 sm:col-end-6 text-center sm:text-left font-semibold text-xl sm:text-2xl">
            Viaja tranquilo, nosotros nos encargamos.
          </span>
          <p className="sm:col-start-2 sm:col-end-5 font-light text-base sm:text-xl text-center sm:text-left">
            Tu carga, contenedores y generadores están siempre protegidos;
            nuestras pólizas de seguro garantizan la cobertura que necesitas
            frente a cualquier accidente o robo mientras estén bajo nuestro
            cuidado.
          </p>
          <div className="sm:col-start-2 sm:col-end-6 sm:flex sm:justify-start">
            <button className="flex items-center justify-center gap-2 mt-6 bg-[#DC6018] text-white text-lg sm:text-xl font-normal rounded-sm px-6 py-3 w-full max-w-xs shadow-md hover:bg-[#b94c12] transition cursor-pointer">
              <Container />
              Contáctanos y cotiza hoy
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ServicesList() {
  const listRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const [visibleIndices, setVisibleIndices] = React.useState<number[]>([]);

  React.useEffect(() => {
    listRefs.current = listRefs.current.slice(0, 3);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            const index = Number(target.getAttribute("data-index"));
            if (!visibleIndices.includes(index)) {
              setVisibleIndices((v) => [...v, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    listRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      listRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [visibleIndices]);

  return (
    <div className="w-full overflow-x-auto">
      <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-16 py-10 sm:py-20">
        {[
          {
            title: "Contenedores secos",
            icon: Container,
            src: "/images/blue-container.png",
            alt: "container",
            desc: "Ideales para carga al granel y mercancía general.",
          },
          {
            title: "Chasis para contenedores",
            icon: MoveHorizontal,
            src: "/images/chassis.png",
            alt: "chassis",
            desc: "Disponibles para unidades de 20 y 40 pies, listos para tus operaciones.",
          },
          {
            title: "Generadores",
            icon: PowerIcon,
            src: "/images/generator.png",
            alt: "generator",
            desc: "Energía confiable para mantener la temperatura de tus contenedores refrigerados.",
          },
        ].map(({ icon, title, src, alt, desc }, index) => (
          <motion.li
            key={title}
            data-index={index}
            ref={(el) => {
              listRefs.current[index] = el;
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={visibleIndices.includes(index) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col gap-3 w-full sm:w-72 flex-shrink-0"
          >
            <p className="text-lg font-medium truncate flex items-center gap-2">
              {icon && React.createElement(icon)} {title}
            </p>
            <div className="relative w-full sm:w-72 h-48 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 288px, 100vw"
              />
            </div>
            <span className="font-light text-base leading-tight">{desc}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
