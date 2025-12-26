import miImagen from '../imagenes/ganaste.png'; // Importar imagen local
import React from 'react';
const Ganador = () => {
  return (
    <div>
      <img
        className='cartel-ganador'
        src={miImagen} 
        alt="Descripción de la imagen" 
      />
    </div>
  );
};

export default Ganador;