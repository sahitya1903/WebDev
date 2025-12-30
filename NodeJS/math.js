const g=9.8;
const PI=3.14;
const sum=(a,b)=>a+b;
const mul=(a,b)=>a*b;

const obj={
    sum:sum,
    mul:mul,
    PI:PI,
    g:g
}

module.exports=obj;

exports.k=1;  //Not works if module.exports is overwritten by new object

// module.exports={
//     name:'sahitya',
//     marks:100
// };