const Sequelize = require("sequelize");

const sequelize = require("../util/database");


const Employee = sequelize.define("Employees",{
    Employee_Id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    Employee_Name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Designation: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    CreatedOn: {
      type: new Date()
    },
    ModifiedOn: {
      type: new Date()
    },
    CreatedBy: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    ModifiedBy: {
      type: Sequelize.STRING,
      allowNull: false
    },
    IsDeleted: 0
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "Employees"
  });
  //return Employee;

 module.exports = {
  Employee:Employee
 }
// const Sequelize = require("sequelize");



// const database = require("../util/database");





// module.exports = (database, DataTypes) => {

// const Employee = database.define(

//   "Employees",

//   {

//     Employee_Id: {

//       type: Sequelize.INTEGER,

//       autoIncrement: true,

//       allowNull: false,

//       primaryKey: true

//     },

//     Employee_Name: Sequelize.STRING,

//     email: {

//       type: Sequelize.STRING,

//       allowNull: false

//     },

//     password: {

//       type: Sequelize.STRING,

//       allowNull: false

//     },

//     phoneNumber: {

//       type: Sequelize.INTEGER,

//       allowNull: false

//     },

//     Designation: {

//       type: Sequelize.STRING,

//       allowNull: false

//     },

//     state: {

//       type: Sequelize.STRING,

//       allowNull: false

//     },

//     CreatedOn: {

//       type: new Date()

//     },

//     ModifiedOn: {

//       type: new Date()

//     },

//     CreatedBy: {

//       type: Sequelize.STRING,

//       allowNull: false 

//     },

//     ModifiedBy: {

//       type: Sequelize.STRING,

//       allowNull: false

//     },

//     IsDeleted: 0

//   },

//   {

//     timestamps: false,

//     freezeTableName: true,

//     tableName: "Employees"

//   });

// //  return Employee;

// };

//module.exports = Employee;
