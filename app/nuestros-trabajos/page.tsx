import React from "react";
 

export default function NuestrosTrabajosPage() {
  return (
    <div>
      {/* Sección Nuestros Trabajos */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestros Trabajos
          </h2>

          {/* Contenedor de tarjetas de trabajos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="/images/trabajos/trabajo1.jpg" // Ruta de la imagen
                alt="Hormigón Pulido en Residencia"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Hormigón Pulido en Residencia
                </h3>
                <p className="text-gray-600 mb-4">
                  Realizamos el pulido de hormigón en una residencia moderna, logrando un acabado brillante y duradero.
                </p>
                <a
                  href="/trabajos/hormigon-pulido-residencia" // Enlace a más detalles
                  className="text-primary hover:text-secondary font-semibold transition duration-300"
                >
                  Ver más detalles →
                </a>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="/images/trabajos/trabajo2.jpg" // Ruta de la imagen
                alt="Pisos Estampados en Comercio"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Pisos Estampados en Comercio
                </h3>
                <p className="text-gray-600 mb-4">
                  Diseñamos pisos estampados para un local comercial, combinando durabilidad y estética.
                </p>
                <a
                  href="/trabajos/pisos-estampados-comercio" // Enlace a más detalles
                  className="text-primary hover:text-secondary font-semibold transition duration-300"
                >
                  Ver más detalles →
                </a>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="/images/trabajos/trabajo3.jpg" // Ruta de la imagen
                alt="Alisados en Edificio Industrial"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Alisados en Edificio Industrial
                </h3>
                <p className="text-gray-600 mb-4">
                  Alisamos superficies de hormigón en un edificio industrial, logrando un acabado uniforme y profesional.
                </p>
                <a
                  href="/trabajos/alisados-industrial" // Enlace a más detalles
                  className="text-primary hover:text-secondary font-semibold transition duration-300"
                >
                  Ver más detalles →
                </a>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="/images/trabajos/trabajo4.jpg" // Ruta de la imagen
                alt="Graníticos en Espacio Público"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Graníticos en Espacio Público
                </h3>
                <p className="text-gray-600 mb-4">
                  Instalamos pisos graníticos en un espacio público, combinando resistencia y diseño clásico.
                </p>
                <a
                  href="/trabajos/graniticos-espacio-publico" // Enlace a más detalles
                  className="text-primary hover:text-secondary font-semibold transition duration-300"
                >
                  Ver más detalles →
                </a>
              </div>
            </div>

            {/* Tarjeta 5 */}
            <div className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="/images/trabajos/trabajo5.jpg" // Ruta de la imagen
                alt="Pulidos de Madera en Residencia"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Pulidos de Madera en Residencia
                </h3>
                <p className="text-gray-600 mb-4">
                  Restauramos y pulimos pisos de madera en una residencia, devolviéndoles su brillo y belleza natural.
                </p>
                <a
                  href="/trabajos/pulidos-madera-residencia" // Enlace a más detalles
                  className="text-primary hover:text-secondary font-semibold transition duration-300"
                >
                  Ver más detalles →
                </a>
              </div>
            </div>

            {/* Tarjeta 6 */}
            <div className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="/images/trabajos/trabajo6.jpg" // Ruta de la imagen
                alt="Epóxicos en Estacionamiento"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Epóxicos en Estacionamiento
                </h3>
                <p className="text-gray-600 mb-4">
                  Aplicamos recubrimientos epóxicos en un estacionamiento, garantizando resistencia y durabilidad.
                </p>
                <a
                  href="/trabajos/epoxicos-estacionamiento" // Enlace a más detalles
                  className="text-primary hover:text-secondary font-semibold transition duration-300"
                >
                  Ver más detalles →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}