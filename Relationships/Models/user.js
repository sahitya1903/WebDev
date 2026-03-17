const mongoose=require('mongoose');
const {Schema}=mongoose;

main()
    .then(console.log('Connection successful'))
    .catch(err=>console.log(err));

async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}


//One to Few Relation (Approach 1)
const userSchema= new Schema({
    username: String,
    addresses: [
        {
            _id: false,     //No id for inner address object, else present
            location: String,
            city: String
        },
    ],
})

const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
        username:'sherlock',
        addresses: [{
            location:'12B Baker Stret',
            city: 'London'
        }]
    });

    user1.addresses.push({
        location:'13B Wall Stret',
        city: 'London'
    });

    let res=await user1.save();
    console.log(res);
}

addUsers();