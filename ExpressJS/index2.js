const express=require('express');
const app=express();

let port=8080;

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})

app.get('/',(req,res)=>{
    res.send("Hello, I'm root")
});

// app.get('/:username',(req,res)=>{
//     console.log(req.params);
//     let {username}=req.params;
//     let htmlStr=`<h1>Welcome to the page of @${username}</h1>`;
//     res.send(htmlStr);
// });

app.get('/:username/:id',(req,res)=>{
    console.log(req.params);
    let {username,id}=req.params;
    let htmlStr=`<h1>Welcome to the page of @${username}, ID:${id}</h1>`
    res.send(htmlStr);
});

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q) res.send(`<h1>Nothing searched</h1>`)
    res.send(`Search results for query:${q}`);
})