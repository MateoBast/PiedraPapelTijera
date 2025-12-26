import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import Manos from '../componentes/manos';
import Boton from '../componentes/boton';
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='contenedor-home'>
      <div className='contenedor-titulo'>

       <p className='titulo1'>Piedra </p>
       <p className='titulo2'>Papel ó  </p>
       <p className='titulo3'>Tijera </p>
      </div>
      <Boton to="/prejuego">Empezar</Boton>
      <Manos />
    </div>
  );
};

export default Home;