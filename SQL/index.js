const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require('express');
const app=express();
const port=8080;
const path=require('path');
const methodOverride=require('method-override');

const { v4: uuidv4 } = require("uuid");

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'college',
  password:'root'
});


//Single Row insertion
// let q="INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)"; 
// let user=['123','123_new','abc@gmail.com','abc'];

//Multiple rows insertion
// let users=[
//   ['123b','123b_new','abcd@gmail.com','abcd'],
//   ['123c','123c_new','bc@gmail.com','bc']
// ];


// let getRandomUser=()=>{
  // return {                         //object key value pair fake data
  //   userId: faker.string.uuid(),
  //   username: faker.internet.username(),
  //   email: faker.internet.email(),
  //   password: faker.internet.password()
  // };
// };



// let getRandomUser=()=>{
//   return [                            //array of fake data values
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password()
//   ];
// };

// //Inserting new fake data
// let q="INSERT INTO user (id,username,email,password) VALUES ? ";
// let data=[];
// for(let i=0;i<100;i++){
//   data.push(getRandomUser());   //100 users fake data
// }

// try{
//     connection.query(q,[ data ] ,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         console.log(result.length);
//     });
// } catch(err){
//     console.log(err);
// }
// connection.end();


// app.get('/',(req,res)=>{
//   res.send("Welcome to home page");
// })

//Home Route
app.get('/',(req,res)=>{
  try{
    let q="SELECT count(*) FROM user";
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let count=result[0]["count(*)"];
        res.render('home.ejs',{count}) ;
    });
  } catch(err){
      console.log(err);
      res.send("Some error in DB");
  }
});


//Show Route
app.get("/user",(req,res)=>{
  try{
    let q="SELECT id,username,email FROM user";
    connection.query(q,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.render('showusers.ejs',{result}) ;
    });
  } catch(err){
      console.log(err);
      res.send("Some error in DB");
  }
})

//Edit Route
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        // console.log(result[0]);
        let user=result[0];
        res.render('edit.ejs',{user}) ;
    });
  } catch(err){
      console.log(err);
      res.send("Some error in DB");
  }
})

//Update (DB) Route
app.patch('/user/:id',(req,res)=>{
  let {id}=req.params;
  let {password:formPass,username:newUsername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user=result[0];
        if(formPass != user.password){
          res.send("Wrong Password",formPass);
        }else{
          let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
          connection.query(q2,(err,result)=>{
              if(err) throw err;
              // res.send(result);
              res.redirect('/user');
          });
        }
    });
  } catch(err){
      console.log(err);
      res.send("Some error in DB");
  }
})

//Serve new user form
app.get('/user/new',(req,res)=>{
  res.render('new.ejs');
});
//Add new user to database
app.post('/user/new',(req,res)=>{
  let {username,email,password}=req.body;
  let id=uuidv4();
  let q=`INSERT INTO user (id,username,email,password) values ('${id}','${username}','${email}','${password}')`;
  try{
    connection.query(q,(err,result)=>{
      if (err) throw err;
      console.log('added user');
      res.redirect('/user');
    });
  }catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
})


app.listen(port,()=>{
  console.log('Listening on port:',port);
});