import 'reflect-metadata';
import express, { request, response } from 'express';
import "./database";
import {router} from "./router";


const app = express();

app.use(express.json())
app.use(router);

app.get("/", (request, response) => {
    return response.json({message:"hello bro"});
})


app.post("/", (request,response)=>{
    return response.json({message: "Os dados foram salvos"});
})
app.listen(3333, () => console.log('UP!'))

