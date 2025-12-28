//Call stack


function hello(){
    console.log('inside hello');
}

function demo(){
    console.log('inside demo');
    console.log('calling hello');
    hello();
    console.log('demo');
}

console.log('calling demo');
demo();


function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans=two()+one();
    console.log(ans);
}

three();