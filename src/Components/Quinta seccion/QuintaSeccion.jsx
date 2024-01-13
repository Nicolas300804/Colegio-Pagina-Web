import React from "react";
import style from "./QuintaSeccion.module.css";
import { Link } from "react-router-dom";
import niños from "../../images/niños.jpeg"
import niños2 from "../../images/niños2.jpeg"
import niños3 from "../../images/niños3.jpeg"
import niños4 from "../../images/niños4.jpeg"

const QuintaSeccion = () => {
  return (
    <div className={style.quinta_seccion}>
      <div className={style.quinta_seccion_izquierda}>
        <h3>Lorem Ipsum</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          congue arcu eu arcu mollis, sed pharetra quam aliquet. Nulla ultricies
          gravida consectetur. Nunc dignissim est lorem, eu ornare magna
          sollicitudin quis. Morbi mattis lorem quis dolor facilisis, ut
          tristique lectus sodales.
        </p>
        <Link to="#" className={style.btn_verde}>
          Mas Información
        </Link>
      </div>

      <div className={style.quinta_seccion_derecha}>
        <img src={niños} alt="" />
        <img src={niños2} alt="" />
        <img src={niños3} alt="" />
        <img src={niños4} alt="" />
      </div>
    </div>
  );
};

export default QuintaSeccion;
