import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Enero from '../../images/meses del año/Enero.jpg';  // Ajusta la ruta según tu imagen
import Febrero from '../../images/meses del año/Febrero.jpg';  // Ajusta la ruta según tu imagen
import Marzo from '../../images/meses del año/Marzo.jpg';  // Ajusta la ruta según tu imagen
import Abril from '../../images/meses del año/Abril.jpg';
import Mayo from '../../images/meses del año/Mayo.jpg';
import Junio from '../../images/meses del año/Junio.jpg';
import Julio from '../../images/meses del año/Julio.jpg';
import Agosto from '../../images/meses del año/Agosto.jpg';
import Septiembre from "../../images/meses del año/Septiembre.jpg" 
import Octubre from '../../images/meses del año/Octubre.jpg';
import Noviembre from '../../images/meses del año/Noviembre.jpg';
import Diciembre from '../../images/meses del año/Diciembre.jpg';
import PrimeraSeccion from "../PrimeraSeccion/PrimeraSeccion"
// Importa imágenes adicionales según sea necesario

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Slideout() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  //const [open13, setOpen13] = React.useState(false);
  // Agrega más estados para imágenes adicionales

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);
  const handleOpen8 = () => setOpen8(true);
  const handleClose8 = () => setOpen8(false);
  const handleOpen9 = () => setOpen9(true);
  const handleClose9 = () => setOpen9(false);
  const handleOpen10 = () => setOpen10(true);
  const handleClose10 = () => setOpen10(false);
  const handleOpen11 = () => setOpen11(true);
  const handleClose11 = () => setOpen11(false);
  const handleOpen12 = () => setOpen12(true);
  const handleClose12 = () => setOpen12(false);
  /* const handleOpen13 = () => setOpen13(true);
  const handleClose13 = () => setOpen13(false); */
  // Agrega más funciones para imágenes adicionales

  return (
    <div>
      <PrimeraSeccion/>
      <div>
        <h1>LAS VIRTUDES CRISTIANAS EN LA FAMILIA</h1>
      </div>
    <div>
      <Button onClick={handleOpen1}>
        <img src={Enero} alt="Abrir modal 1" width="300px" height="300px"/>
      </Button>
      <Button onClick={handleOpen2}>
        <img src={Febrero} alt="Abrir modal 2" width="300px" height="300px" />
      </Button>
      <Button onClick={handleOpen3}>
        <img src={Marzo} alt="Abrir modal 3" width="300px" height="300px" />
      </Button>
      <Button onClick={handleOpen4}>
        <img src={Abril} alt="Abrir modal 4" width="300px" height="300px" />
      </Button>
      <Button onClick={handleOpen5}>
        <img src={Mayo} alt="Abrir modal 5" width="300px" height="300px" />
      </Button>
      <Button onClick={handleOpen6}>
        <img src={Junio} alt="Abrir modal 6"  width="300px" height="300px" />
      </Button>
      <Button onClick={handleOpen7}>
        <img src={Julio} alt="Abrir modal 7"  width="300px" height="300px" />
      </Button>
      <Button onClick={handleOpen8}>
        <img src={Agosto} alt="Abrir modal 8"  width="300px" height="300px" />
      </Button>
      <Button onClick={handleOpen9}>
        <img src={Septiembre} alt="Abrir modal 9"  width="300px" height="300px"/>
      </Button>
      <Button onClick={handleOpen10}>
        <img src={Octubre} alt="Abrir modal 10"  width="300px" height="300px"/>
      </Button>
      <Button onClick={handleOpen11}>
        <img src={Noviembre} alt="Abrir modal 11"  width="300px" height="300px"/>
      </Button>
      <Button onClick={handleOpen12}>
        <img src={Diciembre} alt="Abrir modal 12"  width="300px" height="300px"/>
      </Button>
      {/* <Button onClick={handleOpen13}>
        <img src={Image13} alt="Abrir modal 13" />
      </Button> */}
      {/* Botones para imágenes adicionales */}

      {/* Modales */}
      <Modal
        aria-labelledby="transition-modal-title-1"
        aria-describedby="transition-modal-description-1"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del primer modal */}
        <Fade in={open1}>
          <Box sx={style}>
            <Typography id="transition-modal-title-1" variant="h6" component="h2">
               LA FÉ EN EL SACRAMENTO
            </Typography>
            <Typography id="transition-modal-description-1" sx={{ mt: 2 }}>
              "Grande es el matrimonio yo hablo con respecto a cristo y a la iglesia" , nos dice san Pablo 
              (Efesios Mv,32). De una manera especial, los esposos deben creer en "la gracia del matrimonio"
              que emana del corazón de nuestro señor jesucristo y que esta simbolizado por su sacrificio"
              (Monseñor Lefebvre). El matrimonio es la unión de las voluntades para cumplir la voluntad de Dios
              y no la propia
            </Typography>
          </Box>
        </Fade>
      </Modal>
      
      {/* Modales adicionales */}
      <Modal
        aria-labelledby="transition-modal-title-2"
        aria-describedby="transition-modal-description-2"
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del segundo modal */}
        <Fade in={open2}>
          <Box sx={style}>
            <Typography id="transition-modal-title-2" variant="h6" component="h2">
               LA ESTUDIOSIDAD
            </Typography>
            <Typography id="transition-modal-description-2" sx={{ mt: 2 }}>
              "¿Y por que?", pregunta el niño que, inconsientemente, tiene sed de conocer a Dios, fuente 
              de todas las maravillas (las cuales debemos ver como Dios las ve). pues bien, la estudiosidad moderna
              esta sed de conocer, ordenandola y conduciendola a la verdad.
              ¿Como podemos amar y servir a Dios sin conocerlo? ¿como podemos pretender transmitir la vida natural
              sin conocer al que es autor y fin de la vida? "la vida eterna es: que te conozcan a ti, solo Dios verdadero,
              y a Jesucristo enviado tuyo" (San Juan XVII,3)
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open3}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
              LA RELIGIÓN
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              La virtud de religión nos reune con Dios principalmente por medio de la oración, de los
              sacramentod y de la santa misa.
              "Los esposos que asisten frecuentemente a la renovación del sacrificio de la cruz(acto de religión 
              por exelencia...) renuevan la gracia de su matrimonio y aumenta la gracia particualr que nesecitan para cumplir dignamente,
              como verdaderos cristianos, lo que se les pide en el matrimonio"(Monseñor Marcel Lefebvre).
              La familia que reza unida permanece unida.
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open4}
        onClose={handleClose4}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open4}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
               EL AMOR AL SACRIFICIO 
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              El espiritu de la iglesia es un espiritu de amor y de sacrificio. "¿Que hace un padre y 
              una madre de familia  sino sacrificarse por amor a su familia, y el uno por el otro?
              hay que sacrificarse porque, si no, no hay amor. el sacrificio es una condición del amor,
              y nuestro señor nos lo demostró muy bien con lo brazos extendidos en la cruz, con sus manos
              y sus pies atravesados y con su corazón traspasado" (Monseñor Marcel Lefebvre). 
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open5}
        onClose={handleClose5}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open5}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
               LA LABORIOSIDAD
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              La laboriosidad es la virtud que cumple con diligencia(amor, atención y esmero) las actividades
              necesarias para alcanzar progresivamente su propia madurez natural y sobrenatural, y ayuda a los demas
              a hacer lo mismo, en el trabajo profesional y en el cumplimiento de los demás deberes. El diligente
              aprovecha al maximo el Tiempo y los talentos que Dios le ha dado.
              San José, modelo de los trabajadores, ruega por nosotros.
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open6}
        onClose={handleClose6}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open6}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
               LA CARIDAD 
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              Santo Tomás De Aquino dice: "Tengo que amar al projimo por lo que hay de Dios en el".
              la reciprocidad de este amor es la caridad.
              "Hemos de mirar a nuestro projimo con la mirada de Dios, dichosos de verlo en Dios;
              O con el deseo de verlo en el si aún no lo está, persuadidos de que, mientras aún no se halla
              muerto, puede llegar a estarlo"(Monseñor Marcel Lefebvre).
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open7}
        onClose={handleClose7}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open7}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
               LA DULZURA Y LA HUMANIDAD
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              "Venid  mi todos los agobiados y los cargados, y yo os haré descansar. Tomad sobre nosotros el
              yugo mio, y dejaos instruir por mi, porque manso soy y humilde en el corazón; Y encontrareis 
              reposo para nuestras vidad. Porque mi yugo es exelente; y mi carga es liviana" (San Mateo XI,28-29).
              Jesus, manso y humilde de corazón haz nuestro corazón semejante al tuyo.
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open8}
        onClose={handleClose8}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open8}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
               LA ESPERANZA
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              Acto de esperanza: Dios mio, espero con firme confianza que me has de dar, por los meritos de
              jesucristo, tu gracia en este mundo y, observano tus mandamientos, tu gloria en el otro; porque 
              así me lo has prometido y eres todo poderoso, bueno y fiel a tus promesas.
              la esperanza nos recuerda que todos los sufrimientos de esta vida no son nada en comparación de la gloria
              que nos espera en el cielo
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open9}
        onClose={handleClose9}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open9}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
               LA OBEDIENCIA Y LA PUREZA
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              Nadie entrará en el cielo sin ser como un niño, nos dice nuestro señor. la obediencia,"santidad de los niños",
              es fuente de pureza para todos. nos mantiene en el buen camino, haciendonos reflejar la majestad
              de Dios, del cual somos imagenes, y nos aleja de las ocasiones de pecar. en la familia, la obendiencia
              del jefe a Dios y a sus mandamientos facilita una sumisón amorosa de la esposa y, de esta manera, ambos 
              fomentan la obediencia en los hijos.
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open10}
        onClose={handleClose10}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open10}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
               AMOR A LA POBREZA 
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open11}
        onClose={handleClose11}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open11}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
              Text in modal 3
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title-3"
        aria-describedby="transition-modal-description-3"
        open={open12}
        onClose={handleClose12}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Contenido del tercer modal */}
        <Fade in={open12}>
          <Box sx={style}>
            <Typography id="transition-modal-title-3" variant="h6" component="h2">
              Text in modal 3
            </Typography>
            <Typography id="transition-modal-description-3" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Agrega más modales para imágenes adicionales */}
    </div>
    </div>
  );
}
