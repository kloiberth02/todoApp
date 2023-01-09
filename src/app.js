//importaciones
const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');

const app = express();

const PORT = 8000;

// conexion a la base de datos
db.authenticate()
    .then(() => console.log('Autenticacion exitosa'))
    .catch((error) => console.log(error))

initModels();

db.sync({alter: true})
    .then(() => console.log('Base de dato sincronizada'))
    .catch((error) => console.log(error));

app.get('/', (req, res) => {

    res.status(200).json({ message: "Bienvenido al servidor" })
});

app.listen(PORT, () => {

    console.log(`Servidor corriendo en el puerto ${PORT}`);
});