const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Categories = require('./categories.model');
const Todos = require('./todos.model');

const TodosCategories = db.define('todos_categories', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id",
        references: {
            model: Categories,
            key: "id"
        }
    },
    todoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "todo_id",
        references: {
            model: Todos,
            key: "id"
        }
    }
},
{
    timestamps: false
});

module.exports = TodosCategories;