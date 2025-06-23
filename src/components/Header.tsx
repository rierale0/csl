// src/components/Header.tsx

import Image from "next/image";

export default function Header() {
  return (
    <header className="flex gap-10 w-full pt-10 pb-6 flex items-center justify-center bg-transparent">
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

      {/* NAVIGATION */}
      <nav className="flex items-center gap-12 font-medium text-csl-dark">
        <div className="relative flex items-center gap-1 hover:text-csl-accent cursor-pointer transition-colors hover:text-[var(--csl-text-muted)]">
          Servicios
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
        </div>
        <div className="hover:text-csl-accent cursor-pointer transition-colors hover:text-[var(--csl-text-muted)]">
          Flota
        </div>
        <div className="hover:text-csl-accent cursor-pointer transition-colors hover:text-[var(--csl-text-muted)]">
          Seguridad
        </div>
      </nav>

      {/* BUTTON */}
      <button
  type="button"
  className="btn-fill text-csl-light font-semibold rounded-sm px-8 py-0.5 ml-8 shadow relative transition-colors duration-300 ease-in cursor-pointer"
>
  <span className="fill-bg"></span>
  <span className="relative z-10">Cotizar</span>
</button>

    </header>
  );
}
