const Sequelize=require('sequelize');

const sequelize=require('../util/database');
const Employee = sequelize.define('Employees', {
Employee_Id: {
type:Sequelize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
},
Employee_Name:Sequelize.STRING,
email: {
    type:Sequelize.STRING,
    allowNull:false
},
password: {
    type:Sequelize.STRING,
    allowNull:false
},
phoneNumber: {
    type:Sequelize.INTEGER,
    allowNull:false
},
Designation: {
    type:Sequelize.STRING,
    allowNull:false
},
state: {
    type:Sequelize.STRING,
    allowNull:false
},
CreatedOn:{
    type: new Date()
},
ModifiedOn:{
    type: new Date()
},
IsDeleted:0
},
{
    timestamps: false,
    freezeTableName:true,
    tableName:'Employees'
});
module.exports=Employee;