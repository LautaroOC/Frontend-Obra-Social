const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json()); // Middleware para analizar JSON
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.post('/paciente', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT *FROM paciente WHERE Email = ? AND Password = ?';
  connection.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error on the server.');
      return;
    }
    if (results.length > 0) {
      const paciente = results[0];
      res.status(200).json({ Nombre: paciente.Nombre, Apellido: paciente.Apellido });
      return { Nombre: paciente.Nombre, Apellido: paciente.Apellido }
    } else {
      res.status(401).send('Invalid email or password');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});