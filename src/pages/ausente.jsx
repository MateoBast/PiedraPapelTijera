  import React from 'react';
import Boton from "../componentes/boton";
import "./ausente.css";

const Ausente = () => {

  return (
    <div className="contenedor-prejuego-aus">
      <div className="contenedor-texto-aus">
        <p className='titulo-aus'>No selecciono ninguna opcion,precione el boton para volver a jugar.</p>
      </div>
      <Boton to="/prejuego">¡volver a jugar!</Boton>
    </div>
  );
};

export default Ausente;