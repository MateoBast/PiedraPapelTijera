import React, { useState, useEffect } from 'react';
import './contador.css'; // Asegúrate de tener este archivo CSS

const ContadorRegresivo = ({ tiempoInicial = 3, onTerminar }) => {
  const [tiempo, setTiempo] = useState(tiempoInicial);

  useEffect(() => {
    if (tiempo === 0) {
      if (onTerminar) onTerminar();
      return;
    }
    const timerId = setTimeout(() => {
      setTiempo(tiempo - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [tiempo, onTerminar]);

  return (
    <div className="contador">
      <div className="circulo">
        <span className="numero">{tiempo}</span>
      </div>
    </div>
  );
};

export default ContadorRegresivo;