//importarciones
const { Sequelize } = require('sequelize');

// crear instancia de configuracion
// credenciales de la database
const db = new Sequelize({

    database: "todoapp",
    username: "kloiberth",
    host: "localhost",
    port: "5432",
    password: "60540742",
    dialect: "postgres"
});

module.exports = db;