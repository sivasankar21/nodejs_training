const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Employee = sequelize.define('Employees', {
Employee_id: {
type:Sequelize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true
},
Employee_name:Sequelize.STRING,
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
IsDeleted:0
},
{
    timestamps: false,
    freezeTableName:true,
    tableName:'Employees'
});
module.exports=Employee;