let h1=document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color=color;    
        resolve('Color changed')
    }, delay);
    })
}

let request=changeColor('red',1000);
console.log(request);

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