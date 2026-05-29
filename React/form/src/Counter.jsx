import { useState,useEffect, use } from "react"

export default function Counter(){
    let [countX,setCountX]=useState(0);
    let [countY,setCountY]=useState(0);

    let handleClickX=()=>{
        console.log(countX);
        setCountX(countX+1);
    }
    let handleClickY=()=>{
        console.log(countY);
        setCountY(countY+1);
    }

    useEffect(function print(){
        console.log("Side effect");
    },[countX]); //side effect triggered only for countX
    //if empty array, side effect triggered only once

    return(
        <div>
            <p>{countX}</p>
            <button onClick={handleClickX}>+X</button>
            <p>{countY}</p>
            <button onClick={handleClickY}>+Y</button>
        </div>
    )
}