import { ShieldCheck, Ship, SquaresSubtract, Users } from "lucide-react";
import Image from "next/image";

export default function Objectives() {
  return (
    <div className="bg-[#EBF3FE] text-csl-light grid grid-cols-6 grid-rows-[60px,auto,auto,auto] space-y-10">
      <div className="col-start-2 col-end-5 row-start-1 flex gap-4 mb-10">
        <h2 className="text-3xl font-medium">Nuestros objetivos</h2>
      </div>
      <div className="text-xl font-light flex col-start-2 col-end-5 row-start-2 gap-3 items-center">
        <ShieldCheck size={24} className="flex-shrink-0" />{" "}
        <p>
          Brindar un servicio eficiente, seguro y alineado con los estándares
          <br></br>
          BASC (Business Alliance for Secure Commerce).
        </p>
      </div>
      <div className="pl-12 row-start-2 col-start-5 col-end-8">
        <Image src={"/images/basc.png"} width={300} height={300} alt="BASC" />
      </div>

      <div className="text-xl font-light flex col-start-2 col-end-5 row-start-3 gap-3 mb-12">
        <Ship size={24} className="flex-shrink-0" />{" "}
        <p>
          Expandir nuestras operaciones hacia los puertos de Manta y Esmeraldas.
        </p>
      </div>
      <div className="pl-12 row-start-3 col-start-5 col-end-8">
        <Image src={"/images/manta-esmeraldas-ports.png"} width={300} height={300} alt="BASC" />
      </div>
      <div className="col-start-2 col-end-5 row-start-4 mb-12 space-y-4">
  {/* — Icono + texto en línea */}
  <div className="flex items-center gap-3 text-xl font-light">
    <Users size={24} className="flex-shrink-0" />
    <p>
      Impulsar el crecimiento y desarrollo de nuestro mayor recurso: el
      talento humano.
    </p>
  </div>

  {/* — Imagen siempre debajo */}
  <div className="w-full flex justify-start gap-2">
    <Image
      src="/images/staff.png"
      width={490}
      height={300}
      alt="CSL staff"
    />
  </div>
</div>

      <div className="pl-12 row-start-4 col-start-5 col-end-8">
        <Image src={"/images/csl-driver.png"} width={300} height={300} alt="CSL driver" />
      </div>
    </div>
  );
}
