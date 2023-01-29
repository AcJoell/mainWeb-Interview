import "../Section.css";
import { Card } from "flowbite-react";

const datos = [
  {
    imagen: "https://flowbite.com/docs/images/blog/image-1.jpg",
    titulo: "TÚ ERES NUESTRA IDEA",
    descripcion:
      "La mejor forma de iniciar nuestro proceso creativo es inspirarnos en ti y en lo grandioso que eres.",
  },
  {
    imagen: "https://flowbite.com/docs/images/blog/image-1.jpg",
    titulo: "NOS ADAPTAMOS A TI",
    descripcion:
      "Realizamos cualquier diseño pensando en tu experiencia como usuario, ofreciéndote simplicidad y eficiencia.",
  },
  {
    imagen: "https://flowbite.com/docs/images/blog/image-1.jpg",
    titulo: "TE REPRESENTAMOS",
    descripcion:
      "Desarrollamos a tu medida con el fin de que tus nuevas herramientas sean una fiel representación de tu empresa.",
  },
  {
    imagen: "https://flowbite.com/docs/images/blog/image-1.jpg",
    titulo: "TE ACOMPAÑAMOS",
    descripcion:
      "¡No te vamos a dejar solo! Tienes toda nuestra atención y soporte post-venta para resolver cualquier duda.",
  },
];

function Cards({ imagen, titulo, descripcion }) {
  return (
    <Card imgSrc={imagen}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        {titulo}
      </h5>
      <p className="font-normal text-black dark:text-gray-400">{descripcion}</p>
    </Card>
  );
}

function Aboutus() {
  return (
    <>
      <article className="m-0 pt-10 pb-5 bg-[#2192FF]">
        <h3 className="text-3xl mb-10 mt-7 font-bold text-[#FDFF00]">
          ¡En Omega Soluciones Web queremos darte la bienvenida!
        </h3>
        <label className="lg:pl-60 lg:pr-60 flex justify-center text-xl font-light leading-9 text-white">
          Crecimos con el firme propósito de ser un aliado para nuestros
          clientes en este universo tecnológico que hoy en día es tan necesario
          abarcar para cualquier empresa y estamos orgullosos de los años que
          nos ha tomado llegar a donde estamos; queremos invitarte a ser parte
          de este gran equipo de trabajo en el que desarrollaremos tu página
          web, tu CRM o incluso sistemas personalizados para tus procedimientos
          internos o cualquier necesidad puntual que tengas para tu empresa.
        </label>
      </article>
      <svg
        className="m-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2192FF"
          fill-opacity="1"
          d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,117.3C672,139,768,149,864,154.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <article className="m-0 pb-10 -mt-20">
        <h3 className="text-3xl mb-3 font-bold text-[#111]">
          ¿Quieres saber cómo lo hacemos?
        </h3>
        <div className="p-10 flex gap-[60px] flex-col md:flex-row space-between">
          {datos.map(({ imagen, titulo, descripcion }) => (
            <Cards imagen={imagen} titulo={titulo} descripcion={descripcion} />
          ))}
        </div>
      </article>
    </>
  );
}

export { Aboutus };
