const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const databaseName ='sport';
const collectionName= 'Images'

async function createCollection(){
    const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true });
    try{
        await client.connect ();
        const db = client.db(databaseName);
        await db.createCollection(collectionName);
        console.log(`Collection '${collectionName}' created successfully.`);
    }catch(err){
        console.log('Error',err)
    }finally{
        client.close();
    }
}

createCollection();
module.exports={createCollection};