import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { Turno } from '../types/types';

const TurnosPage: React.FC = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await api.get<Turno[]>('/turnos');
        setTurnos(response.data);
      } catch (error) {
        console.error('Error fetching turnos:', error);
      }
    };

    fetchTurnos();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Administrar Turnos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button component={Link} to="/crear-turno" variant="contained" color="primary">
            Crear Turno
          </Button>
        </Grid>
        <Grid item xs={12}>
          <List>
            {turnos.map((turno) => (
              <ListItem key={turno.id}>
                <ListItemText
                  primary={`Turno ID: ${turno.id} - Motivo: ${turno.motivo}`}
                  secondary={`Paciente ID: ${turno.pacienteid} - Fecha y Hora: ${turno.fecha_hora} - Estado: ${turno.estado}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TurnosPage;