const mongoose = require('mongoose');
const Calisthenic = require('./models/calis');
const Gym = require("./models/gym");
const Nutrition = require('./models/nutrition');

const url = 'mongodb://localhost: 27017/sport';

const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {
    console.log('Connected  correctly to the server ');

    const Videos = [
        {
            title: 'Video1',
            description: 'calisthenics  Video 1',
            url: './VideoFile/videoplayback.mp4',
            tags: [''],
            views: 1,
            likes: 1,
            comment: [
              { text: '', author: 'User1' },
            ],
          },
        
    ]

    const nutritionVideo =[
        {
            title: 'Video2',
            description: 'Nutrition Video ',
            url: './VideoFile/videoplayback1.mp4',
            tags: [''],
            views: 0,
            likes: 0,
            comment: [
                { text: '', author: '' },
                { text: '', author: '' },
            ],

        }

    ]

    Calisthenic.insertMany(Videos)
    .then(videos=>{
        console.log("videos inserted succesfully", videos)
    })
    .catch(error=>{
        console.log("error inserting videos",error);
       
       
    });

    Nutrition.insertMany(nutritionVideo)
    .then(videos=>{
        console.log("videos inserted succesfully", videos)
    })
    .catch(err=>{
        console.log("error inserting videos",err);
        mongoose.connection.close();
    })

})