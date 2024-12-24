import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className='logo'><h1>Controll Automatización</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/automatismos">Automatismos</Link></li>
                <li><Link className="menu-link" to="/productos/portones">Portones</Link></li>
                <li><Link className="menu-link" to="/productos/puertas">Puertas</Link></li>
                <li><Link className="menu-link" to="/productos/cortinas">Cortinas</Link></li>
                <li><Link className="menu-link" to="/productos/garages">Garages</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;