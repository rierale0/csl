"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent px-4 sm:px-8 py-4 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center">
        <Image
          src="/images/csl.svg"
          alt="CSL Logo"
          width={52}
          height={28}
          className="h-7 w-auto"
          priority
        />
      </div>

      {/* NAVIGATION desktop 
      <nav className="hidden md:flex items-center gap-12 font-medium text-csl-dark">
        <MenuItem label="Servicios" />
        <MenuItem label="Flota" />
        <MenuItem label="Seguridad" />
      </nav>
      */}

      {/* BUTTON desktop */}
      <Link
            href={
              "https://api.whatsapp.com/send?phone=+593997911447&text=Hola.%20Estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20transporte%20y%20log%C3%ADstica%20que%20ofrece%20Camacho%20S%C3%A1nchez%20Logistics.%20%C2%BFPodr%C3%ADan%20proporcionarme%20informaci%C3%B3n%20o%20una%20cotizaci%C3%B3n?%20Muchas%20gracias.%20Mi%20nombre%20es%20John"
            }
            target="_blank"
          >
      <button
        type="button"
        className="hidden md:inline-block btn-fill text-csl-light font-semibold rounded-sm px-8 py-1 shadow relative transition-colors duration-300 ease-in cursor-pointer"
      >
        <span className="fill-bg"></span>
        <span className="relative z-10">Cotizar</span>
      </button>
      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-full bg-csl-dark rounded transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-csl-dark rounded transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-csl-dark rounded transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 font-medium text-csl-dark md:hidden z-50">
          <MenuItem label="Servicios" onClick={() => setIsOpen(false)} />
          <MenuItem label="Flota" onClick={() => setIsOpen(false)} />
          <MenuItem label="Seguridad" onClick={() => setIsOpen(false)} />
          <button
            type="button"
            className="btn-fill text-csl-light font-semibold rounded-sm px-8 py-1 shadow relative transition-colors duration-300 ease-in cursor-pointer mt-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="fill-bg"></span>
            <span className="relative z-10">Cotizar</span>
          </button>
        </nav>
      )}
    </header>
  );
}

function MenuItem({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative flex items-center gap-1 hover:text-csl-accent cursor-pointer transition-colors hover:text-[var(--csl-text-muted)] select-none"
    >
      {label}
      {label === "Servicios" && (
        <svg
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block ml-1"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
