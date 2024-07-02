import  React from 'react'
import Box from '@mui/material/Box'
import { Button, TextField, Typography, Container} from '@mui/material'

const Login: React.FC = () => {


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
}

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth:'100vw' }}>

  
        <Container component="main" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            width: '100%',
            maxWidth: '400px'
          }}>
            <Typography component='h1' variant='h5' sx={{ marginBottom: '30px' }}>Iniciar Sesión</Typography>
            <Box component='form' onSubmit={handleSubmit}>
              <TextField autoComplete='none' type='email' fullWidth id='inp_email' name='email' label="Email" required variant='standard' sx={{ marginBottom: '30px' }} />
              <TextField autoComplete='none' type='password' fullWidth id='inp_password' name='password' label="Password" required variant='standard' sx={{ marginBottom: '30px' }} />
              <Button type='submit' fullWidth variant='contained'>Iniciar Sesión</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    
  )
}

export default Login