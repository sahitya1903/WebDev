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
    res.render("home");
})