import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Don_Bosco from "../../images/Don_Bosco.PNG";
import Don_Bosco2 from "../../images/Don_Bosco2.PNG";
import Don_Bosco3 from "../../images/Don_Bosco3.PNG";
import Don_Bosco4 from "../../images/Don_Bosco4.PNG";
import P_cristo_1 from "../../images/P_cristo_1.jpg";

const CarrouselDonBosco = () => {
  const imgStyle = {
    width: '600px',
    height: '500px',
    objectFit: 'cover',
  };

  const carouselStyle = {
    maxWidth: '1000px', // Ajusta el ancho máximo del carrusel según tus necesidades
    heigth: '1000px',
    margin: 'auto', // Centra el carrusel horizontalmente
    marginTop: '20px', // Puedes ajustar el margen superior según tus necesidades
  };

  return (
    <div style={carouselStyle}>
      <MDBCarousel showControls>
        <MDBCarouselItem itemId={1}>
          <img src={Don_Bosco} className='d-block w-100' alt='...' style={imgStyle} />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src={Don_Bosco2} className='d-block w-100' alt='...' style={imgStyle} />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={Don_Bosco3} className='d-block w-100' alt='...' style={imgStyle} />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <img src={Don_Bosco4} className='d-block w-100' alt='...' style={imgStyle} />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={5}>
          <img src={P_cristo_1} className='d-block w-100' alt='...' style={imgStyle} />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
};

export default CarrouselDonBosco;
