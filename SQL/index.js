const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'college',
  password:'root'
});

try{
    connection.query("SELECT * FROM TEACHER",(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
}catch(err){
    console.log(result);
}

let getRandomUser=()=>{
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

// console.log(getRandomUser());