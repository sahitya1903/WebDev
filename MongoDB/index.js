const mongoose=require('mongoose');

main()
    .then(()=> console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({      //define schema
    name: String,
    email: String,
    age: Number
})

const User=mongoose.model("User",userSchema);

// const user1=new User({
//     name:'adam',
//     email:'adam@gmail.com',
//     age:48
// });

// user1.save();        //returns a promise

// const user2=new User({
//     name:'eve',
//     email:'eve@gmail.com',
//     age:23
// });

// user2
//     .save()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

User.insertMany([
    {name:'Tony',email:'tony@gmail.com',age:18},
    {name:'Bruce',email:'bruce@gmail.com',age:19},
    {name:'Peter',email:'peter@gmail.com',age:17},
]).then(res=>console.log(res))
.catch(err=>console.log(err));