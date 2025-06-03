import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MongoURI = process.env.Mongo;

mongoose
.connect(MongoURI)
.then(() => {
    console.log("MongoDB Connected")
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, ()=>{
    console.log("Server running on port 3000!")
})