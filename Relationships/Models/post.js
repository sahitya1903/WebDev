const mongoose=require('mongoose');
const {Schema}=mongoose;

main()
    .then(console.log('Connection successful'))
    .catch(err=>console.log(err));

async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}


//One to Squillion Relation (Approach 3)
const userSchema= new Schema({
    username:String,
    email:String,
})

const postSchema= new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
}) 

const User=mongoose.model("User",userSchema); 
const Post=mongoose.model("Post",postSchema);

const addData=async () => {
    // let user1=new User({
    //     username:'XYZ',
    //     email:'xyz@abc.com'
    // })
    // await user1.save();

    let user=await User.findOne({username:'XYZ'});

    let post=new Post({
        content:'Bye Bye',
        likes:7,
    })

    post.user=user;
    await post.save();
}

// addData();

const getData=async()=>{
    let result=await Post.findOne({}).populate('user','username');
    console.log(result);
}
getData();
