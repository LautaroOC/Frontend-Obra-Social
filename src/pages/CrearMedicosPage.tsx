import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const CrearMedicoPage: React.FC = () => {
    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory
  
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [foto, setFoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const response = await api.post('/medicos', {
          idEspecialidad: 1, // Reemplaza por el valor correcto según tu lógica
          nombre,
          apellido,
          foto,
          email,
          password,
        });
        console.log('Médico creado:', response.data);
        // Redirigir a la página de médicos luego de crear exitosamente
        navigate('/medicos'); // Usa navigate en lugar de history.push
      } catch (error) {
        console.error('Error al crear médico:', error);
        setError('Error al crear médico. Por favor, revisa los datos.');
      }
    };
  
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Crear Médico
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Foto"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Crear Médico
              </Button>
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </Container>
    );
  };
  
  export default CrearMedicoPage;