import miImagen from '../imagenes/perdiste.png'; // Importar imagen local
import React from 'react';

const Perdiste = () => {
  return (
    <div>
      <img 
        src={miImagen} 
        alt="Descripción de la imagen" 
        style={{ width: '100px', height: '100px' }} // Ajusta el tamaño según necesites
      />
    </div>
  );
};

export default Perdiste;