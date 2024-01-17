import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de tener la importación correcta para el CSS de Bootstrap
import Catequesis_de_iniciación from "../../images/Libros/Catequesis_de_iniciación.jpg";
import Iniciar_en_el_misterio_de_la_Fé from "../../images/Libros/Iniciar_en_el_misterio_de_la_Fé.jpg"
import Catequizar_para_la_vida from "../../images/Libros/Catequizar_para_la_vida.jpg"
import Catequetica from "../../images/Libros/Catequetica.jpg"
import { Link } from "react-router-dom";
import PrimeraSeccion from "../PrimeraSeccion/PrimeraSeccion";

const Books = () => {
  return (
    <div>
        <PrimeraSeccion/>
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Repite este bloque para cada libro */}
          <div className="col">
            <div className="card h-100">
              <img
                src={Catequesis_de_iniciación}
                className="card-img-top"
                alt="Catequesis de iniciación"
              />
              <div className="card-body">
                <h5 className="card-title">Catequesis de iniciación</h5>
                <p className="card-text">Descripción del libro...</p>
                <Link href="#" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={Catequetica}
                className="card-img-top"
                alt="Catequesis de iniciación"
              />
              <div className="card-body">
                <h5 className="card-title">Catequetica</h5>
                <p className="card-text">Descripción del libro...</p>
                <Link href="#" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={Iniciar_en_el_misterio_de_la_Fé}
                className="card-img-top"
                alt="Catequesis de iniciación"
              />
              <div className="card-body">
                <h5 className="card-title">Iniciar en el misterio de la Fé</h5>
                <p className="card-text">Descripción del libro...</p>
                <Link href="#" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={Catequizar_para_la_vida}
                className="card-img-top"
                alt="Catequesis de iniciación"
              />
              <div className="card-body">
                <h5 className="card-title">Catequizar para la vida</h5>
                <p className="card-text">Descripción del libro...</p>
                <Link href="#" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
          {/* Fin del bloque del libro */}
        </div>
      </div>
    </div>
  );
};

export default Books;
