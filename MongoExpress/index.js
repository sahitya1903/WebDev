const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const methodOverride=require('method-override')
const ExpressError=require('./ExpressError')
const Chat=require('./models/chat.js')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));   //parse post req data

app.use(methodOverride('_method'));

main()
.then(console.log('connection successful'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1=new Chat({
//     from:'neha',
//     to:'priya',
//     msg:'hi',
//     created_at: new Date()      //date in UTC format
// })
// chat1.save()
// .then(res=>console.log(res))
// .catch(err=>console.log(err));


//Index Route
app.get('/chats',async (req,res)=>{
    let chats=await Chat.find();
    // console.log(chats);
    res.render('index.ejs',{chats});
})

//New Route
app.get('/chats/new',(req,res)=>{
    // throw new ExpressError(404,'page not found');       //Synchronous Error
    res.render('new.ejs')
})

//Create Route
app.post('/chats',(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save().then(res=>console.log('chat was saved'))
    .catch(err=>console.log(err));

    res.redirect('/chats')
})

//Show Route - Async Error Handling
app.get('/chats/:id',async (req,res,next)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    if(!chat){
        // throw new ExpressError(404,'page not found');  Wrong way for Asynchronous errors
        next(new ExpressError(404,'page not found'));
    }
    res.render('edit.ejs',{chat});
})

//Edit Route
app.get('/chats/:id/edit',async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render('edit.ejs',{chat});
})

//Update Route
app.put('/chats/:id',async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect('/chats');
})

//Destroy Route
app.delete('/chats/:id/',async(req,res)=>{
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats')
})

app.get('/',(req,res)=>{
    res.send('root is working');
})

//Error Handling Middleware
app.use((err,req,res,next)=>{
    let {status=500,message='some error occured'}=err;
    res.status(status).send(message);
})

app.listen(8080,()=>{
    console.log('Server listening on port 8080');
})