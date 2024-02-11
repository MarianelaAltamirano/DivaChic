import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'><h1>DivaChic</h1></Link>
      <ul className='menu'>
        <li className='menu-link'><Link to="/">Inicio</Link></li>
        <li className='menu-link'><Link to="/productos">Productos</Link></li>
        <li className='menu-link'><Link to="/productos/blazers">Blazers</Link></li>
        <li className='menu-link'><Link to="/productos/pantalones">Pantalones</Link></li>
        <li className='menu-link'><Link to="/productos/remeras">Remeras</Link></li>
        <li className='menu-link'><Link to="/productos/camisas">Camisas</Link></li>
        <li className='menu-link'><Link to="/nosotros">Nosotros</Link></li>
        <li className='menu-link'><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
