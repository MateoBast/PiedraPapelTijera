  import React, { useState } from 'react';
  import Manos from "../componentes/manos";
  import ContadorRegresivo from "../componentes/contador";
  import { useNavigate } from 'react-router-dom';
  import "./juego.css"

  const Juego = () => {
    const navigate = useNavigate();
    const [seleccion, setSeleccion] = useState(null); // Estado para la selección del jugador

    const manejarSeleccion = (opcion) => {
      setSeleccion(opcion); // Guardar la selección del jugador
    };

   const handleTerminar = () => {
  navigate('/duelo', { state: { seleccion } }); // Asegúrate de que seleccion tenga el valor correcto
};

    return (
      <div className='contenedor-juego'>
        <ContadorRegresivo tiempoInicial={3} onTerminar={handleTerminar} />
        <Manos manejarSeleccion={manejarSeleccion} />
      </div>
    );
  };

  export default Juego;