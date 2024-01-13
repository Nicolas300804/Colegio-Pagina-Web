import React from "react";
import style from "./AboutUs.module.css";
import { useState } from "react";
import niños2 from "../../images/niños2.jpeg"
import AboutUsCuartaSeccion from "./AboutUsCuartaSeccion";
import PrimeraSeccion from "../PrimeraSeccion/PrimeraSeccion";

const AboutUs = () => {
  const [mostrarVision, setMostrarVision] = useState(false);
  const [mostrarMision, setMostrarMision] = useState(false);
  const [mostrarPedagogia, setMostrarPedagogia] = useState(false);

  return (
    <div className={style.about_us_container}>
      {/*<h2>Nuestra Visión y Misión</h2>*/}
      <div>
        <PrimeraSeccion/>
      </div>
      <div>
      <div className={style.primera_seccionAboutus}>
      </div>
      </div>

      <div className={style.segunda_seccionAboutus}>
        <p className={style.frase}>
        Trabajamos de la mano de las familias para
        dar una instrucción religiosa adecuada de
        acuerdo a las verdades reveladas.
        Nuestro objetivo es mantener viva una
        educación católica, pero
        verdaderamente católica.
        </p>
      </div>

      <div className={style.about_us_content}>
        <div
          className={style.mision}
          onMouseEnter={() => setMostrarMision(true)}
          onMouseLeave={() => setMostrarMision(false)}
        >
          <h3>Misión</h3>
          {mostrarMision && (
            <p>
              Inspirados por la verdad tenemos la misión de cultivar mentes y
              corazones conforme a los principios cristianos, buscando la
              formación integral de los estudiantes, en un ambiente arraigado en
              la fe, la moral y la excelencia académica.{" "}
            </p>
          )}
        </div>
        <div
          className={style.vision}
          onMouseEnter={() => setMostrarVision(true)}
          onMouseLeave={() => setMostrarVision(false)}
        >
          <h3>Visión</h3>
          {mostrarVision && (
            <p>
              Nuestra visión es forjar una institución que se erija como un faro
              de educación integral. Aspiramos a cultivar mentes y corazones
              llenos de virtud, conocimiento y amor. Guiando a nuestros
              estudiantes hacia una plenitud espiritual y académica
            </p>
          )}
        </div>
        <div
          className={style.pedagogia}
          onMouseEnter={() => setMostrarPedagogia(true)}
          onMouseLeave={() => setMostrarPedagogia(false)}
        >
          <h3>Pedagogía</h3>
          {mostrarPedagogia && (
            <p>
              En este centro de apoyo educativo trabajamos de la mano con Ianua
              Caeli. Ellos tienen más de 15 años de experiencia en educación y
              son los que nos brindan material integralmente católico. Gracias a
              esta alianza podemos certificar a nuestros estudiantes con una
              acreditación internacional
            </p>
          )}
        </div>
      </div>

      <div className={style.tercera_seccionAboutus}>
        <div className={style.contenedorTercera_seccionAboutus}>
            <div id="cuarta_seccion_izq_About_Us" className={style.mitad}>
              <img src={niños2} alt="" className={style.image}/>
            </div>
            <div id="cuarta_seccion_der_About_Us" className={style.mitad}>
                <h3>Perfil de nuestros estudiantes </h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue arcu eu arcu mollis, sed pharetra quam aliquet. Nulla ultricies gravida consectetur. Nunc dignissim est lorem, eu ornare magna sollicitudin quis. Morbi mattis lorem quis dolor facilisis, ut tristique lectus sodales.</p>
            </div>
        </div>
    </div>

    <div>
      <AboutUsCuartaSeccion/>
    </div>
        
    </div>
  );
};

export default AboutUs;
