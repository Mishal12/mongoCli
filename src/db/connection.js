require("dotenv").config();
const {MongoClient} = require("mongodb")

const client = new MongoClient(process.env.MONGO_URI)

const connect= async ()=>{
   try {
    await client.connect();
    const db = client.db("m42Mongodb")
    return db.collection("Movie")
   } catch (error) {
        console.log(error)
   } 
}

module.exports = {client, connect};