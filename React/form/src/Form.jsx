import { useState } from "react";

export default function Form(){
    let[fullname,setFullname]=useState("");

    let handleNameChange=(event)=>{
        setFullname(event.target.value);
    }

    return(
        <form>
            <label htmlFor="fullName">Full Name:</label>&nbsp;&nbsp;
            <input type="text" placeholder="Enter full name" value={fullname} onChange={handleNameChange} id="fullName"/>&nbsp;&nbsp;
            <button>Submit</button>
        </form>
    );
}