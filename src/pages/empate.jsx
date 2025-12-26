import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import manoPiedra from '../imagenes/piedra.png';
import manoPapel from '../imagenes/papel.png';
import manoTijera from '../imagenes/tijera.png';
import Boton from '../componentes/boton';
import "./empate.css";

const Empate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { seleccion, seleccionMaquina } = location.state || {};

  return (
    <div className="contenedor-duelo-emp">
      <div className="overlay-amarillo-emp"></div>


      <div className='total-escore-emp'>
        <img className='jugador-gnt-emp' src={seleccion} alt="Selección del jugador" />
        <img className='maquina-gnt-emp' src={seleccionMaquina} alt="Selección de la máquina" />
      </div>

       <div className="contenedor-titulo-emp">
        <h1 className='titulo-emp'>Empate, presione el boton para volver a jugar</h1>
       </div>
            <Boton to="/prejuego">Volver a jugar</Boton>
    </div>
  );
};

export default Empate;