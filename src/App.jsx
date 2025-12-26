import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Juego from './pages/juego';
import Prejuego from './pages/prejuego';
import Duelo from './pages/duelo';
import Ganaste from './pages/ganaste';
import Perdiste from './pages/perdiste';
import Empate from './pages/empate';
import Ausente from "./pages/ausente";
import React from 'react';

const App = () => {
  return (
    <Router basename="/piedra-papel-tijera">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/prejuego" element={<Prejuego />} />
        <Route path="/duelo" element={<Duelo />} />
        <Route path="/ganaste" element={<Ganaste />} />
        <Route path="/perdiste" element={<Perdiste />} />
        <Route path="/empate" element={<Empate />} />
        <Route path="/ausente" element={<Ausente />} />
      </Routes>
    </Router>
  );
};

export default App;