const express = require('express');
const Img= require('../mongoose/models/image');
const imageRouter = express.Router();

imageRouter('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json')

})
.get((res,req,next)=>{
    Img.find()
    .then(images=>{
        res.statusCode= 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(images)
    })
    .catch(err => next(err));

})