const express = require('express');
const router = express.Router();
const employee =require('../models/Employees');

const statusCodes=require('../Util/statusCodes');

router.post('/login/:email,:password', async  (req,res) => {         //login page
  try{
    let result = await employee.findAll({where : {email : req.params.email, password:req.params.password}})
  
    if (result.length) {
    res.status(statusCodes.OK).send({

        "statusCode": statusCodes.OK,
    
        "info": "Successfully login",
    
        "employees": result[0]
    
  })
}
else{
    res.status(statusCodes.NOT_FOUND).send({

        "statusCode": statusCodes.NOT_FOUND,
    
        "info": "no user",
 
})
}}
  catch(err){
      console.log(err);
  }
})
router.get('/search/:email',async (req,res) => {                              //display the data
    try {
         const result = await employee.findAll({where : {email : req.params.email}});
        
        if (result) {
            res.status(statusCodes.OK).send({
        
                "statusCode": statusCodes.OK,
            
                "info": "Successfully login",
            
                "employees": result
            
          })
        }
        else{
            res.status(statusCodes.NOT_FOUND).send({
        
                "statusCode": statusCodes.NOT_FOUND,
            
                "info": "no data found",
         
        })
        }
    }
    catch (err) {
        console.log(err);
    }
    })

router.get('/display',async (req,res) => {                              //display the data
try {
     const result = await employee.findAll({where : {IsDeleted : 0}});
    // res.status(200).send({ Employees: result })
    // return result;
    if (result) {
        res.status(statusCodes.OK).send({
    
            "statusCode": statusCodes.OK,
        
            "info": "Successfully login",
        
            "employees": result
        
      })
    }
    else{
        res.status(statusCodes.NOT_FOUND).send({
    
            "statusCode": statusCodes.NOT_FOUND,
        
            "info": "no data found",
     
    })
    }
}
catch (err) {
    console.log(err);
}
})
router.put('/update/:email',async (req,res) => {    //updtae employee name

try{
const Employees={"Employee_Name" :req.body.Employee_Name, ModifiedOn:new Date()};
let result = await employee.update(Employees, {where : {email:req.params.email}})

    if (result) {
        res.status(statusCodes.OK).send({
    
            "statusCode": statusCodes.OK,
        
            "info": "Successfully updated",
        
         
      })
    }

else{
    res.status(statusCodes.NOT_FOUND).send({
    
        "statusCode": statusCodes.NOT_FOUND,
    
        "info": "no data found",
})}
}catch(err){
    console.log(err);
}

})



router.delete('/delete/:email',async (req,res) => {         //delete data
    try{
        const Employees={"IsDeleted" :1};
        let result = await employee.update(data, {where : {email:req.params.email}})
        if (result) {
            res.status(statusCodes.OK).send({
        
                "statusCode": statusCodes.OK,
            
                "info": "Successfully deleted",
            
                "employees": result
            
          })
        }
        else{
            res.status(statusCodes.NOT_FOUND).send({
    
                "statusCode": statusCodes.NOT_FOUND,
            
                "info": "no data found",
        })}
    }catch(err){
            console.log(err);
        }

})


router.post('/signup', async (req,res) => {         //registration page
    
        const result = await employee.create({
        //Employee_Id:1,
        Employee_Name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        Designation:req.body.Designation,
        state:req.body.state,
        CreatedOn:new Date(),
   ModifiedOn:new Date(),
        IsDeleted:0
        
        });
        if(result){
        res.status(statusCodes.OK).send({
        
            "statusCode": statusCodes.OK,
        
            "info": "Successfully deleted",
        
            "employees": result})}
            else{
                res.status(statusCodes.NOT_FOUND).send({
        
                    "statusCode": statusCodes.NOT_FOUND,
                
                    "info": "no data found",
            })}
});


module.exports = router;