import { useState } from "react";

function init(){
    console.log('init executed')
    return Math.random();
}

export default function Counter(){
    let [count,setCount]=useState(init);    //initialisation
    console.log('component rendered');
    // console.log(`${count}`)

    let incCount=()=>{
        // setCount(count+1);      //async behaviour
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

        setCount((curr)=>{      //sync behaviour
            return curr+1;
        })
        // setCount((curr)=>{
        //     return curr+1;
        // })
        // console.log(count);
    }

    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>Increase Counter</button>
        </div>
    )
}