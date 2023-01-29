import './Navbar.css'

const options = ["Sobre nosotros", "Servicios", "Clientes", "Contactanos"];

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <article>
          <figure>
            <img
              src="https://www.omegasolucionesweb.com/skins/page/images/logo-new.png"
              alt="Omega logo"
            />
          </figure>
        </article>
        <article className='navbar-options'>
          {options.map((element) => (
            <label>{element}</label>
          ))}
        </article>
      </nav>
    </>
  );
}

export { Navbar };