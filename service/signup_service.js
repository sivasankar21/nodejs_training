const express = require("express");
const router = express.Router();
const employee = require("../models/Employees");
const Joi = require("joi");
const statusCodes = require("../Util/statusCodes");
//const routes=require('../schem')
var logger=require('../Util/logger');
const jwt = require('jsonwebtoken');
//const saltRounds=100;
const bcrypt=require('bcrypt');

exports.signup = async (req, res, next) => {
    try {
        // Creating user account in the database
        const Salt = await bcrypt.genSalt(10);
        console.log(Salt);
        const hashedPassword = await bcrypt.hash(req.body.password, Salt);
        const result = await employee.create({
            Employee_Name:req.body.Employee_Name,
            email:req.body.email,
            password:hashedPassword,
            phoneNumber:req.body.phoneNumber,
            Designation:req.body.Designation,
            state: req.body.state,
            CreatedOn:new Date(),
            ModifiedOn:new Date(),
            CreatedBy:req.body.CreatedBy,
            ModifiedBy:req.body.ModifiedBy,
            IsDeleted:0
  
        })
        if (result) {
            // If the account created sucessfully
           // logger.info("Created User " + result.email + " Sucessfully")
            res.status(statusCodes.OK).send({ Data: "User Created Sucessfully", StatusCodes: statusCodes.OK })
        }
        else {
            // If the account not  created sucessfully
            logger.error("User Creation failed");
            const err =
            {
                statusCode: statusCode.INTERNAL_SERVER_ERROR,
                message: "User Creation Failed"
            }
            next(err);
        }
    } catch (err) {
        logger.error(err)
        next(err);
    }
  }
    
  