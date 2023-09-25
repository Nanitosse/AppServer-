const express = require('express');
const bodyParser=require('body-parser');
const cors= require('cors');
const http = require('http');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());

const server= http.createServer((req,res)=>{
    console.log(req.headers);
    res.statusCode=200,
    res.end("AppSport")
})



server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});