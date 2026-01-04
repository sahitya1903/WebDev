const express=require('express');
const app=express();
const port=8080;
const path=require('path');

const {v4:uuidv4}=require('uuid');      //UUID package


app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

let posts=[
    {
        id: uuidv4(),
        username:"apnacollege",
        content:"I love coding",
    },
    {
        id: uuidv4(),
        username:"shradha",
        content:"Hardwork is the key to success",
    },
    {
        id: uuidv4(),
        username:"sahitya",
        content:"I love travelling",
    },
]



app.get('/',(req,res)=>{
    res.send('Server working well!');
})

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
})


app.listen(port,()=>{
    console.log("listening on port: ",port);
})