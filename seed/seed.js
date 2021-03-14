const Models= require('../models/index');
const Inquirer = require('inquirer');



const departmentData = Models.Department;
const employeeData = Models.Employee;
const roleData = Models.Role;

// Department:  Department Name
//Employee:   First and Last Name  Manager ID(if manager)
//Role:  Title Salary  

const runapp = () =>{
const start = () => {
    Inquirer
      .prompt({
        name: 'appstart',
        type: 'list',
        message: 'Welcome! Menu Options: Hiring, Position Update, Layoff',
        choices: ['HIRE', 'UPDATE','LAYOFF'],
      })
      .then((answer) => {
        if (answer.appstart === 'HIRE') {
          hireEmployee();
        } else if (answer.appstart === 'UPDATE') {
          updateEmployee();
        } else if (answer.appstart === 'LAYOFF') {
          layoffEmployee();
        } else {
            console.log("stop!")
        }
      });
  }

  const hireEmployee = () => {
      console.log(departmentData);
      console.log(employeeData);
      console.log(roleData);

      
    Inquirer
      .prompt([
        {
          name: 'department_name',
          type: 'input',
          message: 'What is the name of the department the employee is entering?',
        },
        {
          name: 'first_name',
          type: 'input',
          message: "What is the employee's first name?",
        },
        {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?",
        },
        {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?",
        },
        {
            name: 'manager',
            input: 'list',
            message: "What is the manager ID if applicable? (if not a manager enter 0)",
            validate(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              },
        },
        {
            name: 'job_title',
            type: 'input',
            message: "What is the employee's job title?",
        },
        {
            name: 'salary',
            type: 'input',
            message: "What is the employee's salary?",
            validate(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              },
        },
      ])
      .then((answer) => {

        departmentData.create({
            Department_Name: answer.department_name,
        });

        
        employeeData.create({
            First_Name: answer.first_name,
            Last_Name: answer.last_name,
            Manager_ID: answer.manager,
        });


        roleData.create({
            Title: answer.job_title,
            Salary: answer.salary
        })


        console.log('Employee succesfully added to the database!');
        start();

      });
  };
  
const layoffEmployee = ()=> {
    Inquirer
    .prompt({
        name: 'layoff',
        type: 'input',
        message: 'Type the ID of the employee you wish to Layoff',
        validate(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          },
    })
    .then((answer) =>{
        employeeData.destroy({
            where: {
                id: layoff.answer
            }
        });

    });
    start();
};

const updateEmployee = () =>{
    
    Inquirer
    .prompt([
      {
        name: 'department_name',
        type: 'input',
        message: 'What is the name of the department the employee is movinvg too?',
      },
      {
          name: 'manager',
          input: 'list',
          message: "What is the manager ID if applicable? (if not a manager enter 0)",
          validate(value) {
              if (isNaN(value) === false) {
                return true;
              }
              return false;
            },
      },
      {
          name: 'job_title',
          type: 'input',
          message: "What is the employee's new job title?",
      },
      {
          name: 'salary',
          type: 'input',
          message: "What is the employee's new salary?",
          validate(value) {
              if (isNaN(value) === false) {
                return true;
              }
              return false;
            },
      },
    ])
    .then((answer) => {

      departmentData.update({
          Department_Name: answer.department_name,
      });

      
      employeeData.update({
          Manager_ID: answer.manager,
      });


      roleData.update({
          Title: answer.job_title,
          Salary: answer.salary
      })


      console.log('Employee succesfully updated!');
      start();

    });
};

    start();
};


module.exports = runapp;