const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');

const users = [
    { username: 'kloiberth', email: 'kloiber@gmail.com', password: '1234' },
    { username: 'joseG', email: 'jose@gmail.com', password: '1234' },
    { username: 'kiraPr', email: 'kirakira@gmail.com', password: '1234' },
    { username: 'usterioG', email: 'useterioG@gmail.com', password: '1234' }
];

const todos = [
    { title: 'tarea1', description: 'comer comer', userId: 1 },
    { title: 'tarea2', description: 'correr correr', userId: 1 },
    { title: 'tarea1', description: 'ver pelicula', userId: 2 },
    { title: 'tarea1', description: 'pasear', userId: 3 },
    { title: 'comprar pan', userId: 4 }
];

db.sync({ force: true })
    .then(() => {

        console.log('Iniciando con el sembradio');

        users.forEach((user) => Users.create(user));

        setTimeout(() => {

            todos.forEach((todo) => Todos.create(todo));
        }, 100)
    })
    .catch((error) => console.log(error));

// const categories = [];

// const todosCategories = [];