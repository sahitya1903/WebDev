const express=require('express');
const app=express();

// console.dir(app);

let port=8080;  //or 3000

app.listen(port, ()=>{
    console.log(`app listening on port${port}`);
})

// app.use((req,res)=>{
//     console.log("Request received");
//     let code="<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>";
//     res.send(code);
// })

app.get("/",(req,res)=>{
    res.send("You contacted root path by get request");
})

app.get("/apple",(req,res)=>{
    res.send("You contacted apple path by get request");
})

app.get("/orange",(req,res)=>{
    res.send("You contacted orange path by get request");
})

app.get("/:username",(req,res)=>{
    console.log(req.params);
    res.send("Hello,I'm root");
})

app.post('/',(req,res)=>{
    res.send("You sent a post request to root path");
})


//All other kind of requests (Always put in last)
app.use((req,res)=>{
    res.send("This path does not exist");
})