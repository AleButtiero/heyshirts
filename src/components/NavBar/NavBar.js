import CartWidget from '../CartWidget/CartWidget';

import "./NavBar.css";


const NavBar = () => {
  return (
    <div className='navBar'>
      <div>
      <img alt="logo" src="./images/heyshirts_logo.png" width="150px"></img>
      </div>
      <div>
        <ul className='navList'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Comprar</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      </div>
      <div>
        <CartWidget/>
      </div>
      
    </div>
  )
}

export default NavBar
