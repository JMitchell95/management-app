const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        Title:{
            type: DataTypes.STRING,
            allowNull:false,
        },

        Salary:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },

        Department_ID:{
            type: DataTypes.INTEGER,
            references: {
                model: 'departments',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'role',
    }
);

module.exports = Role;