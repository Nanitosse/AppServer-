const express = require('express');
const weightRouter = express.Router();
const Gym = require('../mongoose/models/gym');


weightRouter('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json')

})
.get((res,req,next)=>{
    Gym.find()
    .then(gyms=>{
        res.statusCode= 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(gyms)
    })
    .catch(err => next(err));

})
.post((res,req,next)=>{
    Gym.create(req.body)
    .then(gym=>{
        console.log('Weights Video Created', cali);
        res.statusCode= 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(gym)

    })
    .catch(err=>next(err));


})
.put((res,req,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /Weights');

})
.delete((res,req,next)=>{
    Gym.deleteMany();
    then(response=>{
        res.statusCode=200;
        res.setHeader("Content-Type","application/json")
    })
    .catch(err => next(err));
    
    
})

