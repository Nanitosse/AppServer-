const express = require('express');
const bodyParser=require('body-parser');
const cors= require('cors');


const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use((req,res)=>{
  console.log(req.headers);
    res.statusCode=200,
    res.setHeader('Content-Type', 'application/json')
    res.end("AppSport")

})






server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});