import { useEffect, useState } from "react";

export default function Joker(){
    let[joke,setJoke]=useState({});

    const url='https://official-joke-api.appspot.com/random_joke';
    const getNewJoke=async()=>{
        let response=await fetch(url);
        let jsonResponse=await response.json();
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
    }

    useEffect(()=>{
        getNewJoke();
    },[]);



    return(
        <div>
            <h3>Joke!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    );
}