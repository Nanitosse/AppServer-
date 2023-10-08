const mongoose = require('mongoose');
const  Schema = mongoose.Schema ; 

const commentSchema = new Schema({
    text:{
        type:String,
        require:true
    },
    author: {
        type: String,
        required: true
    },

    
},{
    timestamps:true
})


const nutritionSchema = new Schema({
    title: {
        type: String,
        required: true
     },
     description:String,
     
     url: {
        type: String,
        required: true,
        unique: true
      },
      tags:[String],
      views: {
        type: Number,
        default: 0
      },
      likes: {
        type: Number,
        default: 0
      },
      comments:[commentSchema]


},{
    timestamps:true,
})  

const Nutrition =  mongoose.model('Nutrition', nutritionSchema);

module.exports = Nutrition;