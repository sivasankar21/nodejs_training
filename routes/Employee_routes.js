const express = require('express');
const router=express.Router();
const employeeServices=require('../service/secure');
const expressJoi = require('express-joi-validator');
const login = require('../schemas/login_schema');
const signup=require('../schemas/signup_schema')
router.post('/signup',expressJoi(signup.signupSchema),employeeServices.signup); //Registration page 
router.post('/login', expressJoi(login.loginSchema) ,employeeServices.login); //login page
router.get('/search/:email', employeeServices.search);    //search single user
router.get('/display', employeeServices.display);           //find all data
router.put('/update/:email', employeeServices.update);     //update name using email
router.delete('/deleted/:email', employeeServices.deleted);     // delelte data

module.exports=router;