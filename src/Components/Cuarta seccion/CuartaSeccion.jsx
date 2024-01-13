import React from 'react'
import style from "./CuartaSeccion.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CuartaSeccion = () => {
  return (
    <div className={style.cuarta_seccion}>
        <div className={style.contenedor}>
            <div id="cuarta_seccion_izq" className={style.mitad}></div>
            <div id="cuarta_seccion_der" className={style.mitad}>
                <h3>El mejor colegio con estandares en educación catolica </h3>
                <hr />
                <p>Con la meta de llegar a cada rincón del país</p>
                <Link to="#" className={style.btn_verde} >Mas Información</Link>
            </div>
        </div>
    </div>
  )
}

export default CuartaSeccion