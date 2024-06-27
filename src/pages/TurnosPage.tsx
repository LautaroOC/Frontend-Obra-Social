import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const TurnosPage: React.FC = () => {
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
       
      </Grid>
    </Container>
  );
};

export default TurnosPage;