import React from 'react'
import {Link} from "react-router-dom"
import style from "./Nav.module.css"

const Nav = () => {
  return (
    <div>
        <nav className={style.nav}>
            <Link to="/">Inicio</Link>
            <Link to="/aboutus">Sobre Nosotros</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="#">Noticias</Link>
            <Link to="/familia">Familia</Link>
            <Link to="/libros">Libros</Link>
        </nav>
    </div>
  )
}

export default Nav