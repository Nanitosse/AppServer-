const mongoose = require('mongoose');
const  Schema = mongoose.Schema ; 



const imageSchema = new Schema({
    title: {
        type: String,
        required: true
     },
  
     
     url: {
        type: String,
        required: true,
        unique: true
      },
      

},{
    timestamps:true
})

const Img = mongoose.model('Img', imageSchema);
module.exports = Img;