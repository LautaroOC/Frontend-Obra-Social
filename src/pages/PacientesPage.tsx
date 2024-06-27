import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { Paciente } from '../types/types'; // Ajusta la ruta según la ubicación de tu archivo de tipos

const PacientesPage: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await api.get<Paciente[]>('/pacientes');
        setPacientes(response.data);
      } catch (error) {
        console.error('Error al obtener pacientes:', error);
      }
    };
    fetchPacientes();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Administrar Pacientes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button component={Link} to="/crear-paciente" variant="contained" color="primary">
            Crear Paciente
          </Button>
        </Grid>
        {pacientes.map((paciente) => (
          <Grid key={paciente.id} item xs={12} sm={6} md={4} container justifyContent="center" alignItems="center" spacing={1}>
            <Grid item>
             
              <Avatar alt={`${paciente.nombre} ${paciente.apellido}`} sx={{ width: 100, height: 100 }}>
                {paciente.nombre[0].toUpperCase()}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center" gutterBottom>
                {paciente.nombre} {paciente.apellido}
              </Typography>
              <Typography variant="body2" align="center" color="textSecondary">
                Email: {paciente.email}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PacientesPage;