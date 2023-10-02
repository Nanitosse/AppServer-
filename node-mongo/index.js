
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/';
const fs = require('fs')

const client= new MongoClient(url,{useNewUrlParser:true, useUnifiedTopology:true});

async function MongoConnect(){
    try{
        await client.connect();
        console.log("connected correctly to the server ")
    }catch (err){
        console.log('error Connecting to db ',err)
    }
}

async function VideoCollection(){
    try{
        const db =client.db('sport');
        const collection = db.collection('Videos');

        const ReadVideo = fs.readFileSync('./videosFile/video.mp4');
        
        const videoDocument={
            name:'video1',
            data:'ReadVideo'
        };

        const result = await collection.insertOne(videoDocument);
        console.log(`Video inserted with ID: ${result.insertedId}`);
    }catch (err){
        console.error("Error inserting video:", err);
        
    } finally {
        
        await client.close();
    }
}

MongoConnect();
VideoCollection()