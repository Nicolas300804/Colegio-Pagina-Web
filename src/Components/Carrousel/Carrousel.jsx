import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Dia_de_los_santos from "../../images/Dia_de_los_santos.jpeg";
import Salidas_ludicas from "../../images/Salidas_ludicas.jpeg";
import niños2 from "../../images/niños2.jpeg";

const Carrousel = () => {
  const imgStyle = {
    width: '400px',
    height: '500px',
    objectFit: 'cover',
  };

  const carouselStyle = {
    maxWidth: '800px', // Ajusta el ancho máximo del carrusel según tus necesidades
    heigth: '800px',
    margin: 'auto', // Centra el carrusel horizontalmente
    marginTop: '20px', // Puedes ajustar el margen superior según tus necesidades
  };

  return (
    <div style={carouselStyle}>
      <MDBCarousel showControls>
        <MDBCarouselItem itemId={1}>
          <img src={Dia_de_los_santos} className='d-block w-100' alt='...' style={imgStyle} />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src={Salidas_ludicas} className='d-block w-100' alt='...' style={imgStyle} />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={niños2} className='d-block w-100' alt='...' style={imgStyle} />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
};

export default Carrousel;
