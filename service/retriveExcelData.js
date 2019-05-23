const express = require("express");
const router = express.Router();
const employee = require("../models/Employees");
const Joi = require("joi");
const statusCodes = require("../Util/statusCodes");
var logger=require('../Util/logger');
const jwt = require('jsonwebtoken');

const bcrypt=require('bcrypt');
var xlsx = require('node-xlsx');
var fs = require('fs');


exports.retriveExcelData = async (req, res, next) => {
       
    try {
        var obj = xlsx.parse(__dirname + '/sample.xlsx'); 
 
        var obj = xlsx.parse(fs.readFileSync(__dirname + '/sample.xlsx')); 
        
        res.json(obj[0].data)
        
        
     } catch (err) {
        logger.error(err);
       next(err)
     }
}  