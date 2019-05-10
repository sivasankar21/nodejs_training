const express = require("express");
const router = express.Router();
const employee = require("../models/Employees");
const Joi = require("joi");
const statusCodes = require("../Util/statusCodes");
//const routes=require('../schem')
var logger=require('../Util/logger');
exports.login = async (req, res) => {
  //login page
  try {
    let result = await employee.findAll({
      where: { email: req.body.email, password: req.body.password }
    });

    if (result.length) {
      res.status(statusCodes.OK).send({
        statusCode: statusCodes.OK,

        info: "Successfully login",

        employees: result[0]
      });
    } else {
      logger.error("details not found");
      res.status(statusCodes.NOT_FOUND).send({
        statusCode: statusCodes.NOT_FOUND,

        info: "no user"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.search = async (req, res) => {
  //display the data
  try {
    const result = await employee.findAll({ where: { email: req.params.email } });

    if (result.length>0) {
      res.status(statusCodes.OK).send({
        statusCode: statusCodes.OK,

        info: "Successfully login",

        employees: result
      });
    } else {
      logger.error("details not found");
      res.status(statusCodes.NOT_FOUND).send({
        statusCode: statusCodes.NOT_FOUND,

        info: "no data found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.display = async (req, res) => {
  //display the data
  try {
    const result = await employee.findAll({ where: { IsDeleted: 0 } });
    // res.status(200).send({ Employees: result })
    // return result;
    if (result) {
      res.status(statusCodes.OK).send({
        statusCode: statusCodes.OK,

        info: "Successfully login",
count:result.length,
        employees: result
      });
    } else {
      logger.error("details not found");
      res.status(statusCodes.NOT_FOUND).send({
        statusCode: statusCodes.NOT_FOUND,

        info: "no data found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.update = async (req, res) => {
  //updtae employee name

  try {
    const Employees = {
      Employee_Name: req.body.Employee_Name,
      ModifiedOn: new Date()
    };
    let result = await employee.update(Employees, {
      where: { email: req.params.email }
    });

    if (result) {
      res.status(statusCodes.OK).send({
        statusCode: statusCodes.OK,

        info: "Successfully updated"
      });
    } else {
      logger.error("details not found");
      res.status(statusCodes.NOT_FOUND).send({
        statusCode: statusCodes.NOT_FOUND,

        info: "no data found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.deleted = async (req, res) => {
  //delete data
  try {
    const data = { IsDeleted: 1 };
    let result = await employee.update(data, {
      where: { email: req.params.email }
    });
    if (result) {
      res.status(statusCodes.OK).send({
        statusCode: statusCodes.OK,
        info: "Successfully deleted",
        employees: result
      });
    } else {
      logger.error("details not found");
      res.status(statusCodes.NOT_FOUND).send({
        statusCode: statusCodes.NOT_FOUND,
        info: "no data found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.signup = async (req, res) => {
  //registration page

  const result = await employee.create({
    //  Employee_Id:6,
    Employee_Name: req.body.Employee_Name,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    Designation: req.body.Designation,
    state: req.body.state,
    CreatedOn: new Date(),
    ModifiedOn: new Date(),
    IsDeleted: 0
  });
  if (result) {
    res.status(statusCodes.OK).send({
      statusCode: statusCodes.OK,

      info: "Successfully inserted",

      employees: result
    });
  } else {
   // logger.error("details not found");
    res.status(statusCodes.NOT_FOUND).send({
      statusCode: statusCodes.NOT_FOUND,

      info: "no data found"
    });
  }
};
