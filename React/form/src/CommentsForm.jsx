import { useState } from "react";

export default function CommentsForm({addNewComment}){
    let[formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handleInputChange=(event)=>{
        setFormData((currdata)=>{
            return {...currdata,[event.target.name]:event.target.value};
        })
    }

    let handleSubmit=(event)=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5
        });
    }

    return(
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>&nbsp;&nbsp;
                <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleInputChange}/>
                <br /><br />
                <label htmlFor="remarks">Remarks:</label>&nbsp;&nbsp;
                <textarea placeholder="remarks" name="remarks" value={formData.remarks} onChange={handleInputChange}>Remarks</textarea>
                <br /><br />
                <label htmlFor="rating">Rating:</label>&nbsp;&nbsp;
                <input type="number" placeholder="rating" name="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange}/>
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
}