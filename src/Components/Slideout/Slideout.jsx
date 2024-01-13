import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import P_cristo_1 from '../../images/P_cristo_1.jpg';  // Ajusta la ruta según tu imagen
import inmaculado_corazon_maria from '../../images/inmaculado_corazon_maria.png';  // Ajusta la ruta según tu imagen
import Logo_colegio from '../../images/Logo_colegio.PNG';  // Ajusta la ruta según tu imagen
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
  // Agrega más estados para imágenes adicionales

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  // Agrega más funciones para imágenes adicionales

  return (
    <div>
      {/* Botones para abrir modales */}
      <Button onClick={handleOpen1}>
        <img src={P_cristo_1} alt="Open modal 1" />
      </Button>
      <Button onClick={handleOpen2}>
        <img src={inmaculado_corazon_maria} alt="Open modal 2" />
      </Button>
      <Button onClick={handleOpen3}>
        <img src={Logo_colegio} alt="Open modal 3" />
      </Button>
      {/* Agrega más botones para imágenes adicionales */}

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
              Text in modal 1
            </Typography>
            <Typography id="transition-modal-description-1" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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
              Text in modal 2
            </Typography>
            <Typography id="transition-modal-description-2" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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
  );
}
