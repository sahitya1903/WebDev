const express=require('express');
const app=express();

console.dir(app);

let port=8080;  //or 3000

app.listen(port, ()=>{
    console.log(`app listening on port${port}`);
})

app.use((req,res)=>{
    console.log("Request received");
    let code="<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>";

    res.send(code);
})