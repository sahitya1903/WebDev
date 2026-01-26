const mongoose=require('mongoose');
const Chat=require('./models/chat');

main()
.then(res=>console.log('connection successful'))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

let allChats=[
  {
    from: 'neha',
    to: 'priya',
    msg: 'hi',
    created_at: new Date()
  },
  {
    from: 'priya',
    to: 'neha',
    msg: 'hey!',
    created_at: new Date()
  },
  {
    from: 'rahul',
    to: 'neha',
    msg: 'are you free today?',
    created_at: new Date()
  },
  {
    from: 'neha',
    to: 'rahul',
    msg: 'yes, after 6',
    created_at: new Date()
  },
  {
    from: 'amit',
    to: 'priya',
    msg: 'project done?',
    created_at: new Date()
  },
  {
    from: 'priya',
    to: 'amit',
    msg: 'almost, final review left',
    created_at: new Date()
  },
  {
    from: 'rohit',
    to: 'neha',
    msg: 'movie tonight?',
    created_at: new Date()
  },
  {
    from: 'neha',
    to: 'rohit',
    msg: 'can’t today 😅',
    created_at: new Date()
  },
  {
    from: 'priya',
    to: 'rohit',
    msg: 'send notes please',
    created_at: new Date()
  },
  {
    from: 'rohit',
    to: 'priya',
    msg: 'sent on whatsapp',
    created_at: new Date()
  },
  {
    from: 'amit',
    to: 'rahul',
    msg: 'meeting at 10',
    created_at: new Date()
  },
  {
    from: 'rahul',
    to: 'amit',
    msg: 'ok, I’ll be there',
    created_at: new Date()
  },
  {
    from: 'neha',
    to: 'priya',
    msg: 'lunch?',
    created_at: new Date()
  },
  {
    from: 'priya',
    to: 'neha',
    msg: 'sure!',
    created_at: new Date()
  },
  {
    from: 'rahul',
    to: 'priya',
    msg: 'good luck for exam 👍',
    created_at: new Date()
  }
]


Chat.insertMany(allChats);
