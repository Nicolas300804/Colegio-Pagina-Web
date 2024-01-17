import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
        <p>
            Bogotá - Colombia email: correo@gmail.com
        </p>
        <p>Copyright 2023 <span Style="Color: #20bf6b;">Proyecto Educativo San Juan Bosco</span></p>
    </footer>
  )
}

export default Footer