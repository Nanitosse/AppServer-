const express = require('express');
const calisthenicsRouter = express.Router();


calisthenicsRouter('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json')

})
.get((res,req,next)=>{

})
.post((res,req,next)=>{

})
.put((res,req,next)=>{

})
.delet((res,req,next)={
    
})

