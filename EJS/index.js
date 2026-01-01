const express=require('express');
const app=express();

const port=8080;

const path=require('path');

app.set('views',path.join(__dirname,'/views'));     //set ejs path

app.set('view engine','ejs');

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})

app.get("/",(req,res)=>{
    // res.send("This is home");
    res.render("home");     //send home.ejs file as response
})

app.get("/hello",(req,res)=>{
    res.send("hello");
})

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ diceVal });
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const followers=['a','b','c','d'];
    res.render('ig.ejs',{username,followers});
})