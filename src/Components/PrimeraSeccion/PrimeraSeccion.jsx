import React from 'react'
import style from "./PrimeraSeccion.module.css"
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

const PrimeraSeccion = () => {
  return (
    <div className={style.primera_seccion}>
        <div className={style.barra_navegacion}>
          <p className={style.logo}>
            Proyecto educativo{" "}
            <span Style="Color: #fff8dc;">
              San Juan Bosco
            </span>
          </p>
          <Nav />
        </div>

        <div className={style.primera_seccion_contenido}>
          <p>Educación de Calidad</p>

          <hr />

          <h1>Educación en valores</h1>

          <Link to="/aboutus" className={style.btn_verde}>
            Mas Información{" "}
          </Link>
        </div>
        <br />
      </div>
  )
}

export default PrimeraSeccion