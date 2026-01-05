const express=require('express');
const app=express();
const port=8080;
const path=require('path');

const {v4:uuidv4}=require('uuid');      //UUID package
const methodOverride=require('method-override');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

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

app.get('/posts/new',(req,res)=>{       //Serve the form
    res.render('new.ejs');
})

app.post('/posts',(req,res)=>{          //Add post data
    // console.log(req.body);
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    // res.send("Post request working")
    res.redirect('/posts');
})

app.get('/posts/:id',(req,res)=>{       //Get post by id
    let {id}=req.params;
    // console.log(id);
    let post=posts.find((p)=>id===p.id);        //Find post using id
    // console.log(post);
    // res.send('server working well');
    res.render('show.ejs',{post});
})

app.patch('/posts/:id',(req,res)=>{       //Update content of post
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);        //Find post using id
    post.content=newContent;
    console.log(post);
    res.redirect('/posts');
})

app.get("/posts/:id/edit",(req,res)=>{          //Edit post
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post})
})


app.delete('/posts/:id',(req,res)=>{
    let {id}=req.params;
    posts= posts.filter((p) => id !== p.id); //post deleted from posts array
    res.redirect('/posts');
})

app.listen(port,()=>{
    console.log("listening on port: ",port);
})