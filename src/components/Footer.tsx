import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-csl-dark">
      {/* — Fondo full-width */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-no-repeat bg-bottom bg-cover z-0"
        style={{ backgroundImage: "url('/images/footer-bg.svg')" }}
      />    

      {/* — Contenido encima */}
      <div className="relative z-20 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-center self-center">
            <Image
              src="/images/csl-logo-dark.svg"
              alt="CSL Camacho-Sánchez Logistics"
              width={180}
              height={60}
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contáctanos</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+593997911447" className="hover:underline">
                  (+593) 99 791 1447
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:lcamacho@csl.ec" className="hover:underline">
                  lcamacho@csl.ec
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={20} />
                <a
                  href="https://facebook.com/camachosanchez.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  camachosanchez.ec
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={20} />
                <a
                  href="https://instagram.com/camachosanchez.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  camachosanchez.ec
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Map */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Dirección</h3>
            <p>Perimetral Km. 14 Guayaquil, Guayas</p>
            <div className="w-full aspect-[16/5] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1798101023733!2d-79.94857892431355!3d-2.083840137019398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d0d12124cfaf3%3A0x308117722b4c70b5!2sCamacho%20Sanchez%20Logist%20C.%20Ltda.!5e0!3m2!1sen!2ses!4v1750384230165!5m2!1sen!2ses"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center space-y-2 relative z-20">
          <p>© 2025 Camacho Sánchez Logistics · Todos los derechos reservados</p>
          <a
            href="https://riera.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            Desarrollado por riera.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
