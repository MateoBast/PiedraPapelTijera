import React from 'react';
import './Boton.css';
import { Link } from 'react-router-dom';

const Boton = ({ children, to }) => {
  return (
    <Link to={to} className="boton">
      {children}
    </Link>
  );
};

export default Boton;