const express = require('express');
const router=express.Router();
const loginServices=require('../service/login_service');
const signupServices=require('../service/signup_service');
const employeeServices=require('../service/secure');
const expressJoi = require('express-joi-validator');
const login = require('../schemas/login_schema');
const verifyToken = require('../middleware/jwtTokenVerify');
const signup=require('../schemas/signup_schema')
const userService =require('../service/user_service');
const retriveExcelData1  =require('../service/retriveExcelData');
//const generateExcel  =require('../service/generateExcel');

router.get('/users',userService.users);
router.post('/signup',expressJoi(signup.signupSchema),signupServices.signup); //Registration page 
router.post('/login', expressJoi(login.loginSchema) ,loginServices.login); //login page
router.get('/search/:email',employeeServices.search);    //search single user
router.get('/display', verifyToken.checkToken ,employeeServices.display);           //find all data
router.put('/update/:email',verifyToken.checkToken , employeeServices.update);     //update name using email
router.delete('/deleted/:email', verifyToken.checkToken ,employeeServices.deleted);     // delelte data
router.get('/getData', retriveExcelData1.retriveExcelData);     // delelte data
//router.post('/generateExcel', generateExcel.generateExcelFile);

module.exports=router;