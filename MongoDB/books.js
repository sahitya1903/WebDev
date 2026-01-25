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
        maxLength:20
    },
    author: String,
    price: {
        type: Number,
        // min:1
        min:[1,"Price too low for amazon selling"]
    },
    discount:{
        type:Number,
        default:0,
    },
    genre:[String],
    category:{
        type:String,
        enum:['fiction','non-fiction'],
    }
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

// let book2=new Book({
//     title:'Mathematics Class XI',
//     author:'RD Sharma',
//     price:'299',    //implicitly typecasted to number
// })

// book2.save()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

// let book3=new Book({
//     title:'Mathematics Class X',
//     author:'RD Sharma'
// })

// book3.save()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

let book4=new Book({
    title:'Mathematics Class IX',
    author:'RD Sharma',
    genre:['maths','study'],
    category:'non-fiction'
})

book4.save()
    .then(res=>console.log(res))
    .catch(err=>console.log(err));