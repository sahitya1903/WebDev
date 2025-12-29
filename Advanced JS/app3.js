let h1=document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color=color;    
        resolve('Color changed')
    }, delay);
    })
}

/*

changeColor('red',1000)
    .then(()=>{
        console.log('color changed to red')
        return changeColor('orange',1000);
    })
    .then(()=>{
        console.log('color changed to orange')
        return changeColor('green',1000);
    })
    .then(()=>{
        console.log('color changed to green')
        return changeColor('blue',1000);
    })
    .then(()=>{
        console.log('color changed to blue');
    })

*/

async function greet() {
    // abc.abc();  //promise rejected as abc not defined
    // throw '404 page not found';      //return promise rejected with error
    return 'hello';     //returns promise result: hello
}


greet()
    .then((result)=>{
        console.log('promise resolved with result: ',result);
    })
    .catch((err)=>{
        console.log('promise rejected with error:',err);
    });

let func= async ()=>{           //async arrow function
    return 5;
}


function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>5){
                reject('promise rejected');
            }
            console.log(num);
            resolve('got random number');
        },1000);
    });
}

async function demo() {
    try{
        await getNum();
        await getNum();
        await getNum();
    }catch(err){
        console.log('error caught: ',err);
    }
    // await changeColor('red',1000);
    // await changeColor('green',1000);
    // await changeColor('blue',1000);
    // changeColor('pink',1000);
}

demo();
