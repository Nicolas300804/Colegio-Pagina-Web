import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de tener la importación correcta para el CSS de Bootstrap
/* import Catequesis_de_iniciación from "../../images/Libros/Catequesis_de_iniciación.jpg";
import Iniciar_en_el_misterio_de_la_Fé from "../../images/Libros/Iniciar_en_el_misterio_de_la_Fé.jpg"
import Catequizar_para_la_vida from "../../images/Libros/Catequizar_para_la_vida.jpg"
import Catequetica from "../../images/Libros/Catequetica.jpg" */
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
                src="https://images.cdn2.buscalibre.com/fit-in/360x360/3b/bc/3bbc0cb6a4bb1bd176c8f692c63271fd.jpg"
                className="card-img-top" width="300px" height="420px"
                alt="Catequesis de iniciación"
              />
              <div className="card-body">
                <h5 className="card-title">Las Glorias De María</h5>
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
                src="https://pictures.abebooks.com/isbn/9789872590796-es.jpg"
                width="300px" height="420px"
                className="card-img-top"
                alt="Catequesis de iniciación"
              />
              <div className="card-body">
                <h5 className="card-title">Catesismo Mayor</h5>
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
                src="https://images.cdn3.buscalibre.com/fit-in/360x360/60/f3/60f363fed309bb81f480af3271dd3838.jpg"
                width="300px" height="420px"
                className="card-img-top"
                alt="Catequesis de iniciación"
              />
              <div className="card-body">
                <h5 className="card-title">Preparación Para La Muerte</h5>
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
                src="https://paulinas.org.co/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-17-at-11.11.21-AM.jpeg"
                width="300px" height="420px"
                className="card-img-top"
                alt="Catequesis de iniciación"
              />
              <div className="card-body">
                <h5 className="card-title">Combate Espiritual</h5>
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
