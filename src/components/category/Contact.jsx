import { Button } from "flowbite-react";

function Contact() {
  return (
    <>
      <article className="m-0 pb-0 bg-[#9CFF2E]">
        <h3 className="text-3xl mt-20 mb-0 font-bold text-[#111]">
          ¡Seremos un gran equipo para el crecimiento digital de tu empresa!
        </h3>
        <div className="mt-16 flex gap-[60px] justify-center">
          <button className="text-2xl rounded-full p-4 text-white bg-[#2192FF] border-0 hover:bg-[#2192FF] hover:font-bold hover:p-3.5">
            Contactanos
          </button>
        </div>
      </article>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="m-0"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#9CFF2E"
          fill-opacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <article className="m-0 pb-0">
        <h3 className="text-xl mb-0 font-bold text-[#111]">
          Plataforma realizada unicamente como medio audivisual. @acjoell
        </h3>
      </article>
    </>
  );
}

export { Contact };
