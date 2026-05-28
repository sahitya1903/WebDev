import { useState } from "react";

export default function Form(){
    // let[fullname,setFullname]=useState("");
    let[formData,setFormData]=useState({
        fullname:"",
        username:"",
        password:""
    });

    let handleInputChange=(event)=>{
        setFormData((currdata)=>{
            return {...currdata, [event.target.name]:event.target.value };
        });
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData(
            {
                fullname:"",
                username:"",
                password:""
            }
        )
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name:</label>&nbsp;&nbsp;
            <input type="text" placeholder="Enter full name" value={formData.fullname} id="fullname" onChange={handleInputChange} name="fullname"/><br /><br />
            <label htmlFor="username">User Name:</label>&nbsp;&nbsp;
            <input type="text" placeholder="Enter user name" value={formData.username} id="username" onChange={handleInputChange} name="username"/><br /><br />
            <label htmlFor="password">Password:</label>&nbsp;&nbsp;
            <input type="password" placeholder="Enter password" value={formData.password} id="password" onChange={handleInputChange} name="password"/><br /><br />            <button>Submit</button>
        </form>
    );
}