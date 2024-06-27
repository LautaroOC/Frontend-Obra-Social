import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import api from '../services/api';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CrearTurnoPage: React.FC = () => {
  const [form, setForm] = useState({
    disponibilidadId: '',
    estado: '',
    motivo: '',
    pacienteid: '',
    fecha_hora: '',
    idmedico: ''
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post('/turnos', form);
      console.log('Turno creado:', response.data);
      setOpen(true); 
      
    } catch (error) {
      console.error('Error creando el turno:', error);
    }
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Crear Turno
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="disponibilidadId"
              label="ID Disponibilidad"
              value={form.disponibilidadId}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="estado"
              label="Estado"
              value={form.estado}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="motivo"
              label="Motivo"
              value={form.motivo}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="pacienteid"
              label="ID Paciente"
              value={form.pacienteid}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="fecha_hora"
              label="Fecha y Hora"
              value={form.fecha_hora}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="idmedico"
              label="ID Medico"
              value={form.idmedico}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Crear Turno
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Turno creado exitosamente!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CrearTurnoPage;