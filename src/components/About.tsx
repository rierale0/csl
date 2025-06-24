import Image from "next/image";

export default function About() {
  return (
    <div className="mt-20 pb-16 pt-16 bg-[#EBF3FE] text-csl-light px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-6 gap-y-10 sm:grid-rows-[60px,auto,auto,auto]">
      <div className="sm:col-start-2 sm:col-end-3 flex justify-center sm:justify-start">
        <Image
          src="/images/csl-logo-light.svg"
          alt="Camacho Sánchez Logistics logo"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      <div className="sm:col-start-2 sm:col-end-6 font-light text-base sm:text-xl leading-relaxed">
        <p>
          <b>En Camacho Sánchez Logistics C. LTDA.</b> somos una empresa de transporte
          de carga pesada que opera bajo los más altos estándares legales y de
          calidad. Contamos con todos los permisos y autorizaciones requeridos
          por las autoridades gubernamentales y cumplimos de manera estricta con
          las leyes nacionales, ordenanzas municipales y normativas tributarias,
          garantizando un servicio responsable.
        </p>
      </div>

      <div className="sm:col-start-2 sm:col-end-6 font-light text-base sm:text-xl leading-relaxed">
        <p>
          <b>Nuestra misión es ofrecer soluciones integrales de transporte de
          carga,</b> asegurando la eficiencia, seguridad y calidad en cada
          operación. Apostamos por el desarrollo profesional de nuestro equipo y
          por procesos que contribuyen al éxito de nuestros clientes y socios
          estratégicos.
        </p>
      </div>

      <div className="sm:col-start-2 sm:col-end-6 font-light text-base sm:text-xl leading-relaxed">
        <p>
          <b>Nuestra visión es ser la empresa líder y referente en el transporte de
          carga pesada en Ecuador:</b> la opción preferida del mercado, un modelo de
          gestión en el sector y una compañía rentable y sostenible.
        </p>
      </div>
    </div>
  );
}
