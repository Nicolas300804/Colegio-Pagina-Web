import React from 'react'
import style from "./AboutUsCuartaSeccion.module.css"
import niños2 from "../../images/niños2.jpeg"
//import Video_Institucioanl from "../../images/Video_Institucioanl.mp4"

const AboutUsCuartaSeccion = () => {
  return (
    <div className={style.cuarta_seccionAboutus}>
        <div className={style.contenedorcuarta_seccionAboutus}>
            <div id="cuarta_seccion_izq_About_Us" className={style.mitad}>
            <h3>Conoce nuestro manual de convivencia </h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue arcu eu arcu mollis, sed pharetra quam aliquet. Nulla ultricies gravida consectetur. Nunc dignissim est lorem, eu ornare magna sollicitudin quis. Morbi mattis lorem quis dolor facilisis, ut tristique lectus sodales.</p>
            </div>
            <div id="cuarta_seccion_der_About_Us" className={style.mitad}>
                <img src={niños2} alt="" className={style.image}/>
                {/* <video className={style.video} controls>
            <source src={Video_Institucioanl} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video> */}
            </div>
        </div>
    </div>
  )
}

export default AboutUsCuartaSeccion