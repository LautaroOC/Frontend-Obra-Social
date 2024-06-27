import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../services/api';

const CrearPacientePage: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCrearPaciente = async () => {
    try {
      const nuevoPaciente = { nombre, apellido, email, password };
      await api.post('/paciente', nuevoPaciente);
      // Puedes mostrar una notificación o redirigir a la página de administrar pacientes
      console.log('Paciente creado exitosamente:', nuevoPaciente);
    } catch (error) {
      console.error('Error al crear paciente:', error);
      // Manejo de errores: mostrar mensaje de error o implementar lógica de manejo de errores
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Crear Paciente
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellido"
            fullWidth
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
        <Button onClick={handleCrearPaciente} variant="contained">
           Crear Paciente
        </Button>
        <Button component={Link} to="/pacientes" variant="contained">
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CrearPacientePage;