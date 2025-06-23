import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camacho Sánchez Logistics",
  description: "Soluciones integrales y seguras en transporte de carga pesada en Ecuador.",
  icons: {
    icon: '/favicon.svg',         
    shortcut: '/favicon.svg',     
    apple: '/favicon.svg',         
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased bg-csl-main text-csl-light">
        {children}
      </body>
    </html>
  );
}
