//importaciones
const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const Users = require('./models/users.model');
const Todos = require('./models/todos.model');

const app = express();

app.use(express.json());

const PORT = 8000;

// conexion a la base de datos
db.authenticate()
    .then(() => console.log('Autenticacion exitosa'))
    .catch((error) => console.log(error))

initModels();

db.sync({ alter: false })
    .then(() => console.log('Base de dato sincronizada'))
    .catch((error) => console.log(error));

app.get('/', (req, res) => {

    res.status(200).json({ message: "Bienvenido al servidor" })
});

// rutas de los enpoints(ep)
// consulta de usuarios --> /users
// consulta de tareas --> /todos

app.get('/users', async (req, res) => {

    try {

        const result = await Users.findAll();
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
    }
});

app.get('/users/:id', async (req, res) => {

    try {

        const { id } = req.params;
        const result = await Users.findByPk(id);
        res.status(200).json(result)

    } catch (error) {
        console.log(error);
    }
});

// creando usuario
app.post('/users', async (req, res) => {

    try {

        const user = req.body;
        const result = await Users.create(user);
        res.status(201).json(result);

    } catch (error) {
        console.log(error)
    }
});

// actualizar usuario
app.put('/users/:id', async (req, res) => {

    try {

        const { id } = req.params;
        const field = req.body;

        const result = await Users.update(field, {
            where: { id }
        });
        res.status(200).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

// elimar usuario
app.delete('/users/:id', async (req, res) => {

    try {

        const { id } = req.params;
        const result = await Users.destroy({
            where: { id }
        });
        res.status(200).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

// obtener todos
app.get('/todos', async (req, res) => {

    try {

        const result = await Todos.findAll();
        res.status(200).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

// obtener todos por id
app.get('/todos/:id', async (req, res) => {

    try {

        const { id } = req.params;
        const result = await Todos.findByPk(id);
        res.status(200).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

// crear todos
app.post('/todos', async (req, res) => {

    try {

        const todo = req.body;
        const result = await Todos.create(todo);
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

// actualizar todo
app.put('/todos/:id', async (req, res) => {

    try {

        const { id } = req.params;
        const field = req.body;

        const result = await Todos.update(field, {
            where: { id }
        });
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

// eliminar todos
app.delete('/todos/:id', async (req, res) => {

    try {

        const { id } = req.params;
        const result = await Todos.destroy({
            where: { id }
        });
        res.status(200).json(result);

    } catch (error) {
        res.status(400).json(error.message);
    }
});

app.listen(PORT, () => {

    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
