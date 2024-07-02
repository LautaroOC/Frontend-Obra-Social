import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Avatar ,Toolbar, IconButton,AppBar,Box} from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { Medico } from '../types/types';


const MedicosPage: React.FC = () => {
    const [medicos, setMedicos] = useState<Medico[]>([]);
  
    useEffect(() => {
      const fetchMedicos = async () => {
        try {
          const response = await api.get<Medico[]>('/medicos');
          setMedicos(response.data);
        } catch (error) {
          console.error('Error al obtener médicos:', error);
        }
      };
      fetchMedicos();
    }, []);
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' ,minWidth:'100vw'}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Especialistas</Button>
          <Button color="inherit">Turnos</Button>
          <Button color="inherit">Recetas</Button>
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container sx={{marginTop:'30vh'}}>
        <Typography variant="h4" gutterBottom>
          Administrar Médicos
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button component={Link} to="/crear-medico" variant="contained" color="primary">
              Crear Médico
            </Button>
          </Grid>
          {medicos.map((medico) => (
            <Grid key={medico.id} item xs={12} sm={6} md={4} container justifyContent="center" alignItems="center" spacing={1}>
              <Grid item>
                <Avatar
                  alt={`${medico.nombre} ${medico.apellido}`}
                  src={medico.foto}
                  sx={{ width: 100, height: 100 }}

                />
              </Grid>
              <Grid item>
                <Typography variant="body1" align="center" gutterBottom>
                  {medico.nombre} {medico.apellido}
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  Especialidad: {medico.especialidadDto.areaEspecialidad}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box component="footer" sx={{textAlign:'center', py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
          <Container maxWidth="sm">
            <Typography variant="body1">Obra Social © {new Date().getFullYear()}</Typography>
          </Container>
        </Box>
      </Box>
    );
  };
  
  export default MedicosPage;