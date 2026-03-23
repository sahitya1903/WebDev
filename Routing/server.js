const express=require('express');
const app=express();
const users=require('./routes/user');
const posts=require('./routes/post')
const cookieParser=require('cookie-parser');

// app.use(cookieParser());
app.use(cookieParser('secretcode'));

app.get('/getsignedcookies',(req,res)=>{
    res.cookie('made-in','india',{signed:true});
    res.send('signed cookie sent');
})

app.get('/verify',(req,res)=>{
    console.dir(req.cookies);
    console.dir(req.signedCookies);
    res.send('verified'); 
})

app.get('/getcookies',(req,res)=>{
    res.cookie('greet','hello');
    res.cookie('apple','made in india')
    res.send('sent you some cookies');
})

app.get('/greet',(req,res)=>{
    let {name='anonymous'}=req.cookies;
    res.send(`Hello,I am ${name}`)
})

//ROOT
app.get('/',(req,res)=>{
    console.dir(req.cookies);
    res.send("Hello I'm root");
});

app.use('/users',users); //all routes for user activated and start with '/users' 

app.use('/posts',posts); //all routes for post activated and start with '/posts' 

app.listen(3000,()=>{
    console.log('Server is listening to 3000')
})