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
exports.login = async (req, res, next) => {
    try { 
        //console.log(req.body.email);
        // Checking user email is in DB or not
        const result = await employee.Employee.findOne({ where: { email: req.body.email, isDeleted: 0 } })
        console.log(req.body.email);
        // Checking user email is in 
        if (result) {
            const hashedPassword = bcrypt.compare(result.password, req.body.password)
            // Checking user is authenticated or not
            // if (hashedPassword) {
                // If authenticated
                var token = jwt.sign({email : result.email},'ThisIsASecretKey',{ expiresIn: '60s' })
               // logger.info(result.email + " is logged in");
                res.status(statusCodes.OK).send({ StatusCode: statusCodes.OK, Data: "User Authenticated" , token : token});
            //}
            // else {
            //     // If not authenticated
            //     logger.error(result.email + "not authenticated");
            //     const err = {
            //         statusCode: statusCodes.BAD_REQUEST,
            //         message: "Wrong Password"
            //     }
            //     next(err);
            // }
        } else {
            // If user not found
            logger.error("invalid email");
            const err = {
                statusCode: statusCodes.NOT_FOUND,
                message : "User not found"
            }
            next(err);
        }
    } catch (err) {
        logger.error(err);
        next(err);
    }}  