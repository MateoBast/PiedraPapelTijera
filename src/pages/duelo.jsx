import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import manoPiedra from '../imagenes/piedra.png';
import manoPapel from '../imagenes/papel.png';
import manoTijera from '../imagenes/tijera.png';
import "./duelo.css"

const Duelos = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { seleccion } = location.state || {}; // Selección del jugador

  const opciones = [manoPiedra, manoPapel, manoTijera];
  const seleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)]; // Selección de la máquina

  const urlANombre = (url) => {
    if (url === manoPiedra) return 'piedra';
    if (url === manoPapel) return 'papel';
    if (url === manoTijera) return 'tijera';
    return null;
  };

  const determinarGanador = (jugador, maquina) => {
    if (jugador === maquina) return 'empate';
    if (
      (jugador === 'piedra' && maquina === 'tijera') ||
      (jugador === 'papel' && maquina === 'piedra') ||
      (jugador === 'tijera' && maquina === 'papel')
    ) {
      return 'jugador';
    }
    return 'maquina';
  };

 useEffect(() => {
  if (!seleccion) {
    navigate('/ausente');
    return; // Salimos para no seguir con el resto
  }

  const jugador = urlANombre(seleccion);
  const maquina = urlANombre(seleccionMaquina);
  const resultado = determinarGanador(jugador, maquina);

  const timer = setTimeout(() => {
    if (resultado === 'jugador') {
      navigate('/ganaste', { state: { seleccion, seleccionMaquina, resultado: 'jugador' } });
    } else if (resultado === 'maquina') {
      navigate('/perdiste', { state: { seleccion, seleccionMaquina, resultado } });
    } else if (resultado === 'empate') {
      navigate('/empate', { state: { seleccion, seleccionMaquina, resultado } });
    }
  }, 2000);

  return () => clearTimeout(timer);
}, [seleccion, seleccionMaquina, navigate]);

  return (
    <div className='contenedor-duelo'>
      <div>
        {seleccion ? (
          <img className='jugador' src={seleccion} alt="Selección del jugador" />
        ) : (
          <p>No se seleccionó ninguna opción.</p>
        )}
      </div>
      <div>
        <img className='maquina' src={seleccionMaquina} alt="Selección de la máquina" />
      </div>
    </div>
  );
};

export default Duelos;