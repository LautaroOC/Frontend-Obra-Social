import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TurnosPage from './pages/TurnosPage';
import CrearTurnoPage from './pages/CrearTurnoPage';
import MedicosPage from './pages/MedicosPage';
import CrearMedicoPage from './pages/CrearMedicosPage';
import PacientesPage from './pages/PacientesPage';
import CrearPacientePage from './pages/CrearPacientesPage';
import Login from './pages/Login';
import Receta from './pages/Receta';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/turnos" element={<TurnosPage />} />
        <Route path="/crear-turno" element={<CrearTurnoPage />} />
        <Route path="/medicos" element={<MedicosPage/>} />
        <Route path="/crear-medico" element={<CrearMedicoPage/>} />
        <Route path="/pacientes" element={<PacientesPage/>} />
        <Route path="/crear-paciente" element={<CrearPacientePage/>} />
        <Route path="/recetas" element={<Receta />} />
      </Routes>
    </Router>
  );
};

export default App;