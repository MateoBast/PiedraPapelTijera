import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Boton from '../componentes/boton';
import Ganador from '../componentes/cartel-ganaste';
import "./ganaste.css";

const Ganaste = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { seleccion, seleccionMaquina, resultado } = location.state || {};

  // Inicializar el score desde sessionStorage o en 0
  const [score, setScore] = useState(() => {
    const saved = sessionStorage.getItem('score');
    return saved ? JSON.parse(saved) : { vos: 0, maquina: 0 };
  });

  const yaSumado = useRef(false);

  useEffect(() => {
    if (!yaSumado.current) {
      if (resultado === 'jugador') {
        setScore(prev => ({ ...prev, vos: prev.vos + 1 }));
      } else if (resultado === 'maquina') {
        setScore(prev => ({ ...prev, maquina: prev.maquina + 1 }));
      }
      yaSumado.current = true;
    }
  }, [resultado]);

  useEffect(() => {
    sessionStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  return (
    <div className="contenedor-duelo">
      <div className="overlay-verde"></div>
      
      
      
      
      <div className='total-escore'>
        <img className='jugador-gnt' src={seleccion} alt="Selección del jugador" />
        <img className='maquina-gnt' src={seleccionMaquina} alt="Selección de la máquina" />
        <Ganador/>

       <div className="score">
        <p>Resultado</p>
        <p>Vos: {score.vos}</p>
        <p>Máquina: {score.maquina}</p>
       </div>
        <Boton to="/prejuego">Volver a jugar</Boton>
      </div>
    </div>
  );
};

export default Ganaste;