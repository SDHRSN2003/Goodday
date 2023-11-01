import express from "express";
import { mongourl, port } from "./config.js";
import mongoose from "mongoose";
import { Todo } from "./Model/Todoschema.js";
import route from "./routerFile.js";
import cors from "cors";
const app = express();
app.use(express.json());

app.use(cors());
app.use('/todo',route);


app.get('/',(request,response)=>{
    console.get("Hello world");
    return response.status(202).send('Hello world');
})

mongoose.connect(mongourl,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Database is connected');
    app.listen(port,()=>{
        console.log("Welcome to database");
    });
}).catch((error)=>{
    console.log(error.message);
    
});