const express=require('express');
const app=express();
const users=require('./routes/user');
const posts=require('./routes/post')

//ROOT
app.get('/',(req,res)=>{
    res.send("Hello I'm root");
});

app.use('/users',users); //all routes for user activated and start with '/users' 

app.use('/posts',posts); //all routes for post activated and start with '/posts' 

app.listen(3000,()=>{
    console.log('Server is listening to 3000')
})