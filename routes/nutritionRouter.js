const express = require('express');
const nutritionRouter = express.Router();
const Nutrition = require('../mongoose/models/nutrition')


nutritionRouter('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json')

})
.get((res,req,next)=>{
    Nutrition.find()
    .then(nutritions=>{
        res.statusCode= 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(nutritions)
    })
    .catch(err => next(err));

})
.post((res,req,next)=>{
    Nutrition.create(req.body)
    .then(nutrition=>{
        console.log('Nutrition Video Created', cali);
        res.statusCode= 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(nutrition)

    })
    .catch(err=>next(err));


})
.put((res,req,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /Nutrition');

})
.delete((res,req,next)=>{
    Calisthenic.deleteMany();
    then(response=>{
        res.statusCode=200;
        res.setHeader("Content-Type","application/json")
    })
    .catch(err => next(err));
    
    
})

