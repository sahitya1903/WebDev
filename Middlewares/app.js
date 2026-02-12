const express=require('express');
const app=express();


//MiddleWare Chaining
app.use((req,res,next)=>{
    console.log('Hey, I am Middleware 1');
    // res.send('Middleware ends');
    next();
})

app.use((req,res,next)=>{
    console.log('Hey, I am Middleware 2');
    // res.send('Middleware ends');
    next();
})



app.get('/',(req,res)=>{
    res.send('Hey, I am root');
})

app.get('/random',(req,res)=>{
    res.send('random page');
})

app.listen(8080,()=>{
    console.log('listening on port 8080');
})