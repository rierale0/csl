import { ShieldCheck, Ship, Users } from "lucide-react";
import Image from "next/image";

export default function Objectives() {
  return (
    <div className="bg-[#EBF3FE] text-csl-light px-4 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-6 gap-y-10 sm:grid-rows-[60px,auto,auto,auto]">
      <div className="sm:col-start-2 sm:col-end-5 flex justify-center sm:justify-start mb-6">
        <h2 className="text-3xl font-medium">Nuestros objetivos</h2>
      </div>

      {/* Objetivo 1 */}
      <div className="sm:col-start-2 sm:col-end-5 flex items-center gap-3 text-xl font-light">
        <ShieldCheck size={24} className="flex-shrink-0" />
        <p>
          Brindar un servicio eficiente, seguro y alineado con los estándares
          <br />
          BASC (Business Alliance for Secure Commerce).
        </p>
      </div>
      <div className="sm:col-start-5 sm:col-end-8 flex justify-center sm:justify-start">
        <Image src="/images/basc.png" width={300} height={300} alt="BASC" />
      </div>

      {/* Objetivo 2 */}
      <div className="sm:col-start-2 sm:col-end-5 flex items-center gap-3 text-xl font-light">
        <Ship size={24} className="flex-shrink-0" />
        <p>Expandir nuestras operaciones hacia los puertos de Manta y Esmeraldas.</p>
      </div>
      <div className="sm:col-start-5 sm:col-end-8 flex justify-center sm:justify-start">
        <Image
          src="/images/manta-esmeraldas-ports.png"
          width={300}
          height={300}
          alt="Puertos de Manta y Esmeraldas"
        />
      </div>

      {/* Objetivo 3 */}
      <div className="sm:col-start-2 sm:col-end-5 space-y-4">
        <div className="flex items-center gap-3 text-xl font-light">
          <Users size={24} className="flex-shrink-0" />
          <p>Impulsar el crecimiento y desarrollo de nuestro mayor recurso: el talento humano.</p>
        </div>
        <div className="w-full flex justify-center sm:justify-start">
          <Image src="/images/staff.png" width={490} height={300} alt="CSL staff" />
        </div>
      </div>
      <div className="sm:col-start-5 sm:col-end-8 flex justify-center sm:justify-start">
        <Image src="/images/csl-driver.png" width={300} height={300} alt="CSL driver" />
      </div>
    </div>
  );
}
