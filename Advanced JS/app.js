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


let h1=document.querySelector('h1');

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

// changeColor('red',1000);
// changeColor('orange',2000);
// changeColor('green',3000);


// Callback Hell or Callback Nesting 
changeColor('red',1000,()=>{
    changeColor('orange',1000,()=>{
        changeColor('green',1000,()=>{
            changeColor('blue',1000);
        });
    });
});


// Callback Hell 2

function savetoDb(data,success,failure){
    let speed=Math.floor(Math.random()*10)+1;
    if (speed>4) {
        success();
    }else{
        failure();
    }
}

savetoDb(
    'apna college',
    ()=>{
        console.log('success: data saved');
        savetoDb(
            'hello world',
            ()=>{
                console.log('success2: data saved');
                
            },
            ()=>{
                console.log("failure2: Weak connection. Data not saved");
            });
        },
    ()=>{
        console.log("failure: Weak connection. Data not saved");
    });


    