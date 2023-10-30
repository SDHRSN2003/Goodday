import mongoose from "mongoose";
import { Router } from "express";
import { Todo } from "./Model/Todoschema.js";

const route = Router();

route.get('/',async(request,response)=>{
    try{
        const todo = await Todo.find({});
        response.status(200).json({data:todo,count:todo.length}); 
    }catch(error){
        console.log(error.message);
        response.status(404).send({message:error.message});
    }
});

route.get('/:id', async(request,response)=>{
    try{
        const todoid = request.params.id;
        const todo = await Todo.findById(todoid);   
        return response.status(200).json(todo);
    }catch(error){
        console.log(error.message);
        return response.status(404).send({message: error.message});
    }
});


route.post('/',async(request,response)=>{
    try{
        if(!request.body.Day || !request.body.Work)
        {
            response.status(400).send({message: 'please fill all necessaries.'});
        }
        const newlist = {
            Day : request.body.Day,
            Work : request.body.Work,
        };
        const todo = await Todo.create(newlist);
        return response.status(200).send("Success");
    }
    catch(error){
        console.log(error.message);
        return response.status(500).send({message:error.message});
    }
});

route.delete('/:id',async(request,response)=>{
    try{
        const todoid = request.params.id;
        const todo = await Todo.findById(todoid);
        if(!todo)
        {
            response.status(505).send({message:"No work today"});
        }else{
            await Todo.deleteOne({_id: todoid});
            response.status(200).send({message:"Deleted successfully"});
        }
    }catch(error){
        console.log(error.message);
        response.status(404).send({message:error.message});
    }
});

route.put('/:id/update',async(request,response)=>{
    try{
        const todoid = request.params.id;
        const todo = await Todo.findById(todoid);
        if(!todo)
        {
            return response.status(505).send({message:"List not found"});
        }
        else{
            const{Day,Work} = request.body;
            todo.Day = Day;
            todo.Work = Work;       
            await Todo.updateOne({_id:todoid},todo);
            return response.status(500).send({message:"Updated the List"});
        }
    }catch(error)
    {
        console.log(error.message);
        return response.status(404).send({message:error.message});
    }
})

export default route;