import React, { useState } from 'react';
import manoPiedra from '../imagenes/piedra.png';
import manoPapel from '../imagenes/papel.png';
import manoTijera from '../imagenes/tijera.png';
import "./manos.css";

const Manos = ({ manejarSeleccion }) => {
  const [seleccion, setSeleccion] = useState(null);

  const seleccionar = (opcion) => {
  let imagenSeleccionada;

  if (opcion === 'piedra') imagenSeleccionada = manoPiedra;
  else if (opcion === 'papel') imagenSeleccionada = manoPapel;
  else if (opcion === 'tijera') imagenSeleccionada = manoTijera;

  setSeleccion(opcion,imagenSeleccionada);
  manejarSeleccion(imagenSeleccionada,opcion);
};  

  return (
    <div className='contenedor-manos'>
      <img
        className={`mano piedra ${
          seleccion === 'piedra' ? 'seleccionada' : seleccion ? 'no-seleccionada' : ''
        }`}
        src={manoPiedra}
        alt="Piedra"
        onClick={() => seleccionar('piedra')}
      />
      <img
        className={`mano papel ${
          seleccion === 'papel' ? 'seleccionada' : seleccion ? 'no-seleccionada' : ''
        }`}
        src={manoPapel}
        alt="Papel"
        onClick={() => seleccionar('papel')}
      />
      <img
        className={`mano tijera ${
          seleccion === 'tijera' ? 'seleccionada' : seleccion ? 'no-seleccionada' : ''
        }`}
        src={manoTijera}
        alt="Tijera"
        onClick={() => seleccionar('tijera')}
      />
    </div>
  );
};

export default Manos;