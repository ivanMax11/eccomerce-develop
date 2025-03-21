interface Service {
    id: number;
    title: string;
    description: string;
  }
  
  const services: Service[] = [
    { id: 1, title: 'Pulido de Hormigón', description: 'Deja tus pisos como nuevos.' },
    { id: 2, title: 'Restauración', description: 'Recupera el brillo de tus superficies.' },
    { id: 3, title: 'Mantenimiento', description: 'Cuidado profesional para tu hormigón.' },
  ];
  
  export default function Servicios() {
    return (
      <div className="services">
        <h1>Nuestros Servicios</h1>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }