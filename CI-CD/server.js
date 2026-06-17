import express from "express";
import sum from './sum.js';

const app=express();
const port=8000;


app.get('/home',async(req,res)=>{
    res.json({
        msg:"I am root!"
    })
})

app.get('/sum/:a/:b',async(req,res)=>{
    const {a,b}=req.params;
    res.send(sum(parseInt(a),parseInt(b)));
})

app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})