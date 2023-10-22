const express = require('express');
const Calisthenic= require('../mongoose/models/calis')
const calisthenicsRouter = express.Router();


calisthenicsRouter('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json')

})
.get((res,req,next)=>{
    Calisthenic.find()
    .then(calis=>{
        res.statusCode= 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(calis)
    })
    .catch(err => next(err));

})
.post((res,req,next)=>{
    Calisthenic.create(req.body)
    .then(cali=>{
        console.log('Calisthenics Video Created', cali);
        res.statusCode= 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(cali)

    })
    .catch(err=>next(err));


})
.put((res,req,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /calisthenics');

})
.delete((res,req,next)=>{
    Calisthenic.deleteMany();
    then(response=>{
        res.statusCode=200;
        res.setHeader("Content-Type","application/json")
    })
    .catch(err => next(err));
    
    
})

