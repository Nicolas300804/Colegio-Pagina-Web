import React from 'react'
import Dia_de_los_santos from "../../images/Dia_de_los_santos.jpeg"
import Salidas_ludicas from "../../images/Salidas_ludicas.jpeg"
import style from "./TerceraSeccion.module.css"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const TerceraSeccion = () => {
  return (
    <div className={style.tercera_seccion}>
            <div className={style.titulo}>
                <h2>Eventos destacados</h2>
                <hr />
            </div>

            <div className={style.container_tercera_seccion}>
                <div className={style.img_tercera}>
                    <img src={Dia_de_los_santos} alt="" />
                    <h6>Dia de los santos</h6>
                    <p>
                        El "Día de los Santos" es una celebración educativa y creativa donde los niños eligen un santo, investigan sobre su vida, y se disfrazan para aprender y expresar su admiración por estas figuras religiosas.  
                    </p>
                    <Link to="#" className={style.btn_verde} >Mas Información </Link>
                </div>

                <div className={style.img_tercera}>
                    <img src={Salidas_ludicas} alt="" />
                    <h6>Salidas lúdicas</h6>
                    <p>
                        Las salidas lúdicas ofrecen a los estudiantes experiencias educativas fuera del aula, fomentando el aprendizaje práctico y el desarrollo social mientras disfrutan de actividades recreativas y enriquecedoras.  
                    </p>
                    <Link to="#" className={style.btn_verde} >Mas Información</Link>
                </div>

               
            </div>
        </div>
  )
}

export default TerceraSeccion