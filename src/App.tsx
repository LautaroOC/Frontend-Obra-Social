import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TurnosPage from './pages/TurnosPage';
import CrearTurnoPage from './pages/CrearTurnoPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/turnos" element={<TurnosPage />} />
        <Route path="/crear-turno" element={<CrearTurnoPage />} />
        {/* Puedes agregar más rutas aquí para otras funcionalidades */}
      </Routes>
    </Router>
  );
};

export default App;