import image1 from "../assets/banners-01.jpg";
import image2 from "../assets/banners-02.jpg";
import image3 from "../assets/banners-03.jpg";
import down from '../assets/down.svg'
import { Carousel } from "flowbite-react";
import "./Navbar.css";

function Carrusel() {
  return (
    <>
      <div className="h-[220px] sm:h-[500px] xl:h-[650px] 2xl:h-[1150px]">
        <Carousel>
          <img
            src={image1}
            alt="..."
          />
          <img
            src={image2}
            alt="..."
          />
          <img
            src={image3}
            alt="..."
          />
        </Carousel>
      </div>
      
      {/* Down Arrow */}
      <div className='flex justify-center'>
        <img className='w-36' src={down} />
      </div>
    </>
  );
}

export { Carrusel };
