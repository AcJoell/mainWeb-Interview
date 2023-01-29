import { Navbar } from "./components/Navbar";
import { Carrusel } from "./components/Carousel";
import { Section } from "./components/Section";
import { Aboutus } from "./components/category/Aboutus";
import { Contact } from "./components/category/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <br />
      <Carrusel />
      <br />
      <Section nombre='Sobre nosotros'>
        <Aboutus />
      </Section>
      <Section nombre='Contactanos'>
        <Contact />
      </Section>
		</>
  );
}

export { Home };
