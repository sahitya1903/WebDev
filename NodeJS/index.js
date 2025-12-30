//File used for combining data of other files and then exporting it
//index.js 

const apple=require('./Fruits/apple');
const banana=require('./Fruits/banana');
const orange=require('./Fruits/orange');

let fruits=[apple,banana,orange];

module.exports=fruits;