const mongoose=require('mongoose');

main()
    .then(()=> console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema=new mongoose.Schema({      //define schema
    // title: String,
    title:{
        type:String,
        required:true,
    },
    author: String,
    price: Number
})

const Book=mongoose.model("Book",bookSchema);

// let book1=new Book({
//     title:'Mathematics Class XII',
//     author:'RD Sharma',
//     price:1200
// })

// book1.save()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

let book2=new Book({
    title:'Mathematics Class XI',
    author:'RD Sharma',
    price:'299',    //implicitly typecasted to number
})

book2.save()
    .then(res=>console.log(res))
    .catch(err=>console.log(err));