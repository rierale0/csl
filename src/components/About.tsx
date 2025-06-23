import Image from "next/image";

export default function About() {
  return (
    <div className="mt-40 pb-30 bg-[#EBF3FE] text-csl-light grid grid-cols-6 grid-rows-[60px,auto,auto,auto]">
      <div className="col-start-2 col-end-3 mt-30 mb-10">
        <Image
          src={"/images/csl-logo-light.svg"}
          alt="container"
          width={300}
          height={300}
        />
      </div>
      <div className="col-start-2 col-end-6 row-start-2 mb-4 font-light text-xl">
        <p>
          <b>En Camacho Sánchez Logistics C. LTDA.</b> somos una empresa de transporte
          de carga pesada que opera bajo los más altos estándares legales y de
          calidad. Contamos con todos los permisos y autorizaciones requeridos
          por las autoridades gubernamentales y cumplimos de manera estricta con
          las leyes nacionales, ordenanzas municipales y normativas tributarias,
          garantizando un servicio responsable.
        </p>
      </div>
      <div className="col-start-2 col-end-6 row-start-3 mb-4 font-light text-xl">
        <p>
        <b>Nuestra misión es ofrecer soluciones integrales de transporte de
          carga,</b> asegurando la eficiencia, seguridad y calidad en cada
          operación. Apostamos por el desarrollo profesional de nuestro equipo y
          por procesos que contribuyen al éxito de nuestros clientes y socios
          estratégicos.
        </p>
      </div>
      <div className="col-start-2 col-end-6 row-start-4 mb-4 font-light text-xl">
        <p>
        <b>Nuestra visión es ser la empresa líder y referente en el transporte de
          carga pesada en Ecuador:</b> la opción preferida del mercado, un modelo de
          gestión en el sector y una compañía rentable y sostenible.
        </p>
      </div>
    </div>
  );
}
