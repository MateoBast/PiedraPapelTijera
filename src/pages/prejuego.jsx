  import React from 'react';
import Manos from "../componentes/manos";
import Boton from "../componentes/boton";
import "./prejuego.css";

const Prejuego = () => {

  return (
    <div className="contenedor-prejuego">
      <div className="contenedor-texto">
        <p className='titulo'>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
      </div>
      <Boton to="/juego">¡Jugar!</Boton>
      <Manos />
    </div>
  );
};

export default Prejuego;