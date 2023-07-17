const mongoose =require('mongoose')
const dbConfig= require('../config/dbConfig.json')
console.log(`${dbConfig.MONGODB_CONNECTION_URI}/${dbConfig.MONGODB_DATABASE_NAME}`)
const connection = async()=>{
    try{
    const res =await mongoose.connect(`${dbConfig.MONGODB_CONNECTION_URI}/${dbConfig.MONGODB_DATABASE_NAME}`);
    if (res) console.log("Connected to MongoDB");
    }catch(err){
        console.log(err)
    }
}
module.exports= connection