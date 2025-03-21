import React from 'react'

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Sección de Contacto */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Contáctanos
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Información adicional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto md:mx-0 text-primary mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-700 font-semibold">Correo electrónico</p>
                  <p className="text-gray-600">info@pulidosdehormigon.com</p>
                </div>

                <div className="text-center md:text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto md:mx-0 text-primary mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-700 font-semibold">Teléfono</p>
                  <p className="text-gray-600">+54 2804-556326</p>
                </div>

                <div className="text-center md:text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto md:mx-0 text-primary mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-700 font-semibold">Dirección</p>
                  <p className="text-gray-600">Calle Falsa 123, Bahía Blanca, Argentina</p>
                </div>
              </div>

              {/* Mapa de Google Maps */}
              <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.340739797625!2d-65.29195592304879!3d-43.26523686481088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe0144d42f880aa9%3A0x9ec00e5601c9c57!2sAv.%20Hip%C3%B3lito%20Yrigoyen%201963%2C%20U9100%20Trelew%2C%20Chubut!5e0!3m2!1ses!2sar!4v1742522798910!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="max-w-2xl mx-auto">
              <form
                action="mailto:tucorreo@example.com" // Reemplaza con tu correo electrónico
                method="GET"
                encType="text/plain"
                className="space-y-6"
              >
                {/* Campo de nombre */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                {/* Campo de correo electrónico */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tucorreo@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                {/* Campo de mensaje */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>

                {/* Botón de enviar */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Children (contenido adicional si es necesario) */}
      {children}
    </div>
  );
}