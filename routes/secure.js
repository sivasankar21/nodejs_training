const express = require('express');
const router = express.Router();
const employee =require('../models/Employees');



router.post('/login', async  (req,res) => {
  try{
    let result = await employee.findOne({where : {email : req.body.email}})
    if(result){
        res.status(200).send({Employees : "User Authenticated ", StatusCode : 200})
    }
    else{
        res.status(401).send({Employees : "User Not Authenticated ", StatusCode : 401})
    } 
  }catch(err){
      console.log(err);
  }
})
router.get('/display',async (req,res) => {
try {
    const result = await employee.findAll({where : {IsDeleted : 0}});
    res.status(200).send({ Employees: result })
    return result;
}
catch (err) {
    console.log(err);
}
})
router.put('/update/:email',async (req,res) => {

try{
const Employees={"Employee_name" :req.body.name};
let result = await employee.update(Employees, {where : {email:req.params.email}})
if(result){
    console.log(result)
    res.status(200).send({Employees : "User updated", StatusCode : 200})
}
else{
    res.status(401).send({Employees : "User Not updated ", StatusCode : 401})
}
}catch(err){
    console.log(err);
}

})



router.delete('/delete/:email',async (req,res) => {
    try{
        const Employees={"IsDeleted" :1};
        let result = await employee.update(data, {where : {email:req.params.email}})
        if(result){
            res.status(200).send({Employees : "User updated", StatusCode : 200})
        }
        else{
            res.status(401).send({Employees : "User Not updated ", StatusCode : 401})
        }
        }catch(err){
            console.log(err);
        }

})


router.post('/signup', (req,res) => {
    
        employee.create({
        //Employee_id:7,
        Employee_name:req.body.Employee_name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        Designation:req.body.Designation,
        state:req.body.state,
        IsDeleted:0
        
        });
        if(res)
        res.status(200).send({Employees : "User created ", StatusCode : 200})
        else
        res.status(401).send({Employees : "User Not created ", StatusCode : 401})
});


module.exports = router;