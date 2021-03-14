// import models  and export to server to do the thing pog!

const e = require('express');
const Department = require('./Department');
const Employee = require('./Employee');
const Role = require('./Role');


// depatments will have many employees 
// employee has one department
// role has one department id 

Department.hasMany(Role ,{
    foreignKey: 'department_id',
    onDelete:'CASCADE',
});
Role.hasOne(Employee,{
    foreignKey: "role_id",
    onDelete: 'CASCADE',
});




// department will be the main tbale to associate with roles and employers
// refer back to car database from this weeks example 

module.exports = {Department, Employee, Role};