import React from 'react'
import Box from '@mui/material/Box'
import { Button,IconButton, Typography, Container,AppBar,Toolbar} from '@mui/material'

const Receta: React.FC = () =>  {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth:'100vw' }}>
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
    <Box component="footer" sx={{textAlign:'center', py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
    <Container maxWidth="sm">
      <Typography variant="body1">Obra Social © {new Date().getFullYear()}</Typography>
    </Container>
  </Box>
</Box>
  )
}

export default Receta