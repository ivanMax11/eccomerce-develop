import ClientCarousel from "./components/ClientCarousel";

export default function Home() {
  return (
    <main>
{/* Sección Hero */}
<section className="relative h-[70vh] overflow-hidden"> {/* Altura reducida a 70% del viewport */}
  {/* Imagen de fondo */}
  <img
    src="/images/puliendo.webp" // Ruta de la imagen de pulidos
    alt="Pulidos profesionales"
    className="w-full h-full object-cover"
  />

  {/* Overlay para mejorar la legibilidad del texto */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Contenido centrado */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    {/* Título principal */}
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Pulidos Profesionales
    </h1>

    {/* Descripción */}
    <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
      Transformamos tus pisos con técnicas avanzadas de pulido y restauración. 
      Ofrecemos soluciones duraderas y de alta calidad para espacios industriales y residenciales.
    </p>

    {/* Botón de WhatsApp */}
    <a
      href="https://wa.me/2804556326" // Enlace a WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary hover:bg-secondary px-8 py-3 rounded-lg text-white text-lg font-semibold transition duration-300 transform hover:scale-105"
    >
      Contactar por WhatsApp
    </a>
  </div>
</section>
  {/* Sección Servicios */}
<section className="bg-gray-50 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      Nuestros Servicios
    </h2>

    {/* Contenedor de lista de servicios */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Servicio 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
        <span className="text-green-500 text-2xl mr-4">✔️</span>
        <h3 className="text-2xl font-bold text-gray-800">Hormigón Pulido</h3>
      </div>

      {/* Servicio 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
        <span className="text-green-500 text-2xl mr-4">✔️</span>
        <h3 className="text-2xl font-bold text-gray-800">Pisos Estampados</h3>
      </div>

      {/* Servicio 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
        <span className="text-green-500 text-2xl mr-4">✔️</span>
        <h3 className="text-2xl font-bold text-gray-800">Graníticos y Mosaicos</h3>
      </div>

      {/* Servicio 4 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
        <span className="text-green-500 text-2xl mr-4">✔️</span>
        <h3 className="text-2xl font-bold text-gray-800">Alisados con Alisadora</h3>
      </div>

      {/* Servicio 5 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
        <span className="text-green-500 text-2xl mr-4">✔️</span>
        <h3 className="text-2xl font-bold text-gray-800">Pulidos de Madera</h3>
      </div>

      {/* Servicio 6 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
        <span className="text-green-500 text-2xl mr-4">✔️</span>
        <h3 className="text-2xl font-bold text-gray-800">Epóxicos y Poliuretanos</h3>
      </div>
    </div>
  </div>

</section>
      {/* Sección Servicios */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestros Trabajos
          </h2>

          {/* Contenedor de tarjetas de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen */}
              <img
                src="/images/pisos.p.jpeg" // Ruta de la imagen
                alt="Hormigón Pulido"
                className="w-full h-48 object-cover rounded-t-lg mb-4 
          transform transition-transform duration-300 hover:scale-105
          " // Ajusta la altura y el estilo
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hormigón Pulido</h3>
              <p className="font-bold text-gray-600">
                Transformamos tus pisos con un acabado profesional y duradero.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen */}
              <img
                src="/images/estampados.jpeg" // Ruta de la imagen
                alt="Hormigón Pulido"
                className="w-full h-48 object-cover rounded-t-lg mb-4 
          transform transition-transform duration-300 hover:scale-105
          " // Ajusta la altura y el estilo
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pisos Estampados</h3>
              <p className="font-bold text-gray-600">
                Le damos a tu piso el molde que mas te gusta.
              </p>
            </div>


            {/* Tarjeta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen */}
              <img
                src="/images/graniticos-mosaicos.webp" // Ruta de la imagen
                alt="Graníticos y Mosaicos"
                className="w-full h-48 object-cover rounded-t-lg mb-4
          transform transition-transform duration-300 hover:scale-105" // Ajusta la altura y el estilo
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Graníticos y Mosaicos</h3>
              <p className="font-bold text-gray-600">
                Instalación y restauración de pisos graníticos y mosaicos.
              </p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen */}
              <img
                src="/images/alisados.webp" // Ruta de la imagen
                alt="Alisados con Alisadora"
                className="w-full h-48 object-cover rounded-t-lg mb-4
          transform transition-transform duration-300 hover:scale-105" // Ajusta la altura y el estilo
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Alisados con Alisadora</h3>
              <p className="font-bold text-gray-600">
                Alisado profesional para superficies de hormigón.
              </p>
            </div>

            {/* Tarjeta 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen */}
              <img
                src="/images/pulidos-madera.webp" // Ruta de la imagen
                alt="Pulidos de Madera"
                className="w-full h-48 object-cover rounded-t-lg mb-4
          transform transition-transform duration-300 hover:scale-105" // Ajusta la altura y el estilo
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pulidos de Madera</h3>
              <p className="font-bold text-gray-600">
                Restauración y pulido de pisos de madera.
              </p>
            </div>

            {/* Tarjeta 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen */}
              <img
                src="/images/epoxicos-poliuretanos.webp" // Ruta de la imagen
                alt="Epóxicos y Poliuretanos"
                className="w-full h-48 object-cover rounded-t-lg mb-4
          transform transition-transform duration-300 hover:scale-105" // Ajusta la altura y el estilo
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Epóxicos y Poliuretanos</h3>
              <p className="font-bold text-gray-600">
                Aplicación de recubrimientos epóxicos y poliuretanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      

{/* Sección Sobre Nosotros */}
<section className="bg-primary py-20 relative overflow-hidden">
  {/* Fondo decorativo (opcional) */}
  <div className="absolute inset-0 bg-opacity-10 bg-white"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>

  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl font-bold text-center text-white mb-12">
      Sobre Nosotros
    </h2>

    {/* Descripción de servicios */}
    <div className="max-w-3xl mx-auto text-center">
    <p className="text-white text-xl md:text-2xl mb-6 leading-relaxed font-semibold">
  En <strong className="text-secondary">DURAFLOORCRET</strong>, nos dedicamos a transformar y mejorar tus espacios a través de técnicas avanzadas en el tratamiento de pisos. Nuestra experiencia abarca una amplia gama de servicios diseñados para satisfacer las necesidades de clientes residenciales, comerciales e industriales.
</p>
<p className="text-white text-xl md:text-2xl mb-6 leading-relaxed font-semibold">
  Nos enorgullece ofrecer soluciones personalizadas, utilizando tecnología de vanguardia y materiales de la más alta calidad. Nuestro compromiso es brindar resultados duraderos, estéticos y funcionales que superen tus expectativas.
</p>
    </div>
  </div>
</section>

 {/* Sección de Clientes (Carrusel) */}
 <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Algunas de las Empresas que ya confian en Nosotros
          </h2>
          <ClientCarousel /> {/* Aquí se usa el componente del carrusel */}
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="bg-gray py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-secondary font-bold mb-6">Contáctanos</h2>
          <p className="text-xl mb-8 text-secondary">Estamos aquí para ayudarte. ¡Llámanos!</p>
          <a
            href="tel:2804556326"
            className="inline-block bg-primary hover:bg-whit px-8 py-3 rounded-lg text-white hover:text-secondary text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            2804-556326
          </a>
        </div>
      </section>
      
    </main>
  );
}