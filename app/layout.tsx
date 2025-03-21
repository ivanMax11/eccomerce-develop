'use client'; // Esto es necesario para usar hooks en Next.js 13+

import { useState } from 'react';
import { Inter } from 'next/font/google'; // Importa la fuente Inter
import './globals.css'; // Importa los estilos globales

// Configura la fuente Inter
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="es">
      {/* Aplica la fuente al body */}
      <body className={inter.className}>
        {/* Navbar */}
        <header className="bg-secondary shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="text-xl font-bold text-primary">
              DURAFLOORCRET
            </a>

            {/* Enlaces de navegación (visible en pantallas grandes) */}
<div className="hidden md:flex space-x-8">
  <a href="/" className="text-primary hover:text-white">
    Inicio
  </a>
  <a href="/nuestros-trabajos" className="text-primary hover:text-white">
    Nuestros Trabajos
  </a>
  <a href="/contacto" className="text-primary hover:text-white">
    Contacto
  </a>
</div>

{/* Botón de menú para móviles */}
<button
  className="md:hidden text-primary focus:outline-none"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>
          </nav>

          {/* Menú desplegable para móviles */}
          {isMenuOpen && (
            <div className="md:hidden bg-primary shadow-md">
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Inicio
              </a>
              <a href="/trabajos" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Nuestros Trabajos
              </a>
              <a href="/contacto" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Contacto
              </a>
            </div>
          )}
        </header>

        {/* Contenido principal */}
        <main>{children}</main>

       {/* Footer */}
<footer className="bg-secondary text-white py-8">
  <div className="container mx-auto px-4 text-center">
    {/* Texto de derechos reservados */}
    <p className="mb-4">
      © {new Date().getFullYear()} Durafloorcret | Todos los derechos reservados.
    </p>

    {/* Enlaces de política y términos */}
    <div className="flex justify-center space-x-6 mb-6">
      <a href="/politica-de-privacidad" className="hover:text-gray-400">
        Política de Privacidad
      </a>
      <a href="/terminos-y-condiciones" className="hover:text-gray-400">
        Términos y Condiciones
      </a>
    </div>

    {/* Iconos de redes sociales */}
    <div className="flex justify-center space-x-6">
      {/* Icono de Facebook */}
       

      {/* Icono de Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>  
    </div>
    <p className="mb-4">
     Desarrollado por MonteStack
    </p>
  </div>
</footer>
      </body>
    </html>
  );
}