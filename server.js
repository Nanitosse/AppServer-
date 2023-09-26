const express = require('express');
const bodyParser=require('body-parser');
const cors= require('cors');
const calisthenicsRouter = require('./routes/calisthenicsRouter');
const nutritionRouter = require('./routes/nutritionRouter');
const weightRouter = require('./routes/weightRouter');


const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/calisthenics', calisthenicsRouter);
app.use('/nutritions', nutritionRouter);
app.use('/weights',weightRouter);

app.use((req,res)=>{
  console.log(req.headers);
    res.statusCode=200,
    res.setHeader('Content-Type', 'application/json')
    res.end("AppSport")

})






server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});