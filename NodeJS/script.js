console.log('hello');
for(let i=0;i<4;i++){
    console.log(i);
}
console.log('exit');

let args=process.argv;
for(let i=2;i<args.length;i++){
    console.log(args[i]);
}

const math=require("./math");
console.log(math);

console.log(math.sum(2,3));

const info=require("./Fruits");
console.log(info);