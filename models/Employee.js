const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },


        First_Name:{
            type: DataTypes.STRING,
            allowNull:false,
        },

        Last_Name:{
            type: DataTypes.STRING,
            allowNull:false,
        },

        Role_Id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'role',
                key: 'id',
            },
        },
        
        Manager_ID:{
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee',
    }
);

module.exports = Employee;