const express=require('express');
const app=express();
const ExpressError=require('./ExpressError');

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

//Logger
app.use((req,res,next)=>{
    req.datetime=new Date(Date.now()).toString();
    req.date=new Date(Date.now()).toDateString();
    req.time=new Date(Date.now()).toTimeString();
    console.log(req.method,req.hostname,req.path,req.datetime);
    next();
})

//Middleware for path starting with random
app.use('/random',(req,res,next)=>{
    console.log('Path starts with random');
    next();
})

//Login Middleware for api route- Method 1
// app.use('/api',(req,res,next)=>{
//     let {token}=req.query;
//     if(token=='giveaccess'){
//         next();
//     }
//     res.send("access denied");
// })

// app.get('/api',(req,res)=>{
//     res.send('data');
// })

//Login Middleware for api route- Method 2
const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token=='giveaccess'){
        next();
    }else{
        // throw new Error("access denied");
        throw new ExpressError(401,'ACCESS DENIED');
    }
};

app.get('/api',checkToken,(req,res)=>{
    res.send('data');
})

app.get('/random',(req,res)=>{
    res.send('random page');
})

app.get('/err',(req,res)=>{
    abcd=abcd;
})

app.get('/admin',(req,res)=>{
    throw new ExpressError(403,'Some error');
})

//Custom Error Handling Middleware
app.use((err,req,res,next)=>{
    let {status=500,message='Some Error Occured'}=err;
    console.log("---ERROR---");
    res.status(status).send(message);
    // next(err);
})

// app.use((err,req,res,next)=>{
//     console.log("---ERROR MIDDLEWARE 2---");
//     next(err);
// })

//404 Not found Middleware
app.use((req,res)=>{
    res.status(404).send("Page not found");
})
app.listen(8080,()=>{
    console.log('listening on port 8080');
})