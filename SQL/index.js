const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// let getRandomUser=()=>{
  // return {                         //object key value pair fake data
  //   userId: faker.string.uuid(),
  //   username: faker.internet.username(),
  //   email: faker.internet.email(),
  //   password: faker.internet.password()
  // };
// };

let getRandomUser=()=>{
  return [                            //array of fake data values
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};


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

let q="INSERT INTO user (id,username,email,password) VALUES ? ";

//Inserting new fake data
let data=[];
for(let i=0;i<100;i++){
  data.push(getRandomUser());   //100 users fake data
}

try{
    connection.query(q,[ data ] ,(err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(result.length);
    });
} catch(err){
    console.log(err);
}
connection.end();


