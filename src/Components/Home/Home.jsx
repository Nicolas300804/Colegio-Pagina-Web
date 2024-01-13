import React from "react";
/* import Nav from "../Nav/Nav";
import { Link } from "react-router-dom"; */
import style from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimeraSeccion from "../PrimeraSeccion/PrimeraSeccion";
import TerceraSeccion from "../Tercera_seccion/TerceraSeccion";
import CuartaSeccion from "../Cuarta seccion/CuartaSeccion";
import QuintaSeccion from "../Quinta seccion/QuintaSeccion";
import Footer from "../Footer/Footer";
import CarrouselDonBosco from "../Carrousel/CarrouselDonBosco";

const Home = () => {
  return (
    <div>
      
      <PrimeraSeccion/>
      
      {/*Segunda Sección*/}

      <div className={style.segunda_seccion}>
        <p className={style.frase}>
          Un colegio con los mejores estandares en educación catolica
        </p>
      </div>

      {/*tercera Sección*/}
      <div>
        <TerceraSeccion />
      </div>

      {/*cuarta Sección*/}
      <div>
        <CuartaSeccion />
      </div>

      <CarrouselDonBosco/>

      {/*Quinta Sección*/}
      <div>
        <QuintaSeccion />
      </div>

      {/*Footer*/}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
