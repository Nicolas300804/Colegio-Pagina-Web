import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from '../Carrousel/Carrousel';
import PrimeraSeccion from "../PrimeraSeccion/PrimeraSeccion"

const Contact = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/enviar-correo', formulario);

      if (response.status === 200) {
        alert('¡Correo enviado con éxito!');
      } else {
        alert('Hubo un error al enviar el correo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el correo.');
    }
  };

  return (
    <div className="container mt-5">
        <PrimeraSeccion/>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Nombre:
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Correo Electrónico:
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formulario.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Mensaje:
                <textarea
                  className="form-control"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
        <div className="col-md-6">
          <Carrousel />
        </div>
      </div>
    </div>
  );
};

export default Contact;
