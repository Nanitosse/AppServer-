const mongoose = require('mongoose');
const  image = require('./models/image')

const url = 'mongodb://localhost: 27017/sport';

const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {
    console.log('Connected  correctly to the server ');

    const Images = [
        {

            title: 'splash',  
            url: '../imageFile/soccer.png',
        },
        {
            title:"GYM",
            url: "../imageFile/gym.jpg"
        },
        {
            title:"nutrition",
            url: "../imageFile/nutrution.jpg"
        },
        {
            title:"calisthenics",
            url: "../imageFile/street.jpg"
        },
        {
            title:"drawerlogo",
            url: "../imageFile/logo.jpg"
        },
        
    ]

    

    image.insertMany(Images)
    .then(image=>{
        console.log("images inserted succesfully", image)
    })
    .catch(error=>{
        console.log("error inserting videos",error);
        mongoose.connection.close();
       
    });

   
})