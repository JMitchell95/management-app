const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Departments extends Model {}

// ID  and  NAME

Departments.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        Department_Name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'departments',
    }
);

module.exports = Departments;