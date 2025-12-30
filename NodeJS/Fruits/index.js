//File used for combining data of other files and then exporting it
//index.js 

const apple=require('./apple');
const banana=require('./banana');
const orange=require('./orange');

let fruits=[apple,banana,orange];

module.exports=fruits;