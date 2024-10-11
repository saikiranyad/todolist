const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');
const dotenv = require('dotenv').config()


const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGOURI).then(()=>console.log("db is connected")).catch(err=>console.log(err))


app.get('/get',(req,res)=>{
    TodoModel.find().then(result=>res.json(result)).catch(err=>res.json(err))
})
app.post('/add',(req,res)=>{
    const task = req.body.task
TodoModel.create({
    task:task
}).then(result =>res.json(result)).catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);
    TodoModel.findByIdAndUpdate({_id:id},{done:true}).then(result =>res.json(result)).catch(err=>console.log(err))


})
app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id}).then(result => res.json(result)).catch(err=>res.json(mongoose.Error))
})


app.listen(3001,()=>{
    console.log("Server is running",3001)
})