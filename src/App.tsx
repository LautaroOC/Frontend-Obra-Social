import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TurnosPage from './pages/TurnosPage';
import CrearTurnoPage from './pages/CrearTurnoPage';
import MedicosPage from './pages/MedicosPage';
import CrearMedicoPage from './pages/CrearMedicosPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/turnos" element={<TurnosPage />} />
        <Route path="/crear-turno" element={<CrearTurnoPage />} />
        <Route path="/medicos" element={<MedicosPage/>} />
        <Route path="/crear-medico" element={<CrearMedicoPage/>} />
        {/* Puedes agregar más rutas aquí para otras funcionalidades */}
      </Routes>
    </Router>
  );
};

export default App;