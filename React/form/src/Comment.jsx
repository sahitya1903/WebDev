import { useState } from "react";
import './Comment.css';
import CommentsForm from "./CommentsForm";

export default function Comment(){
    let [comments,setComments]=useState([{
        username:"@sk",
        remarks:'Good',
        rating:5
    }])

    let addNewComment=(comment)=>{
        setComments((currComments)=>[...currComments,comment])
    }

    return(
        <div>
            <h3>All comments</h3>
            {comments.map((comment,idx)=>(
            <div className="comment" key={idx}>
                <span>{comment.remarks}</span> <br />
                <span>Rating: {comment.rating}</span> {'\u2605'} &nbsp;<br />
                <span>--{comment.username}</span> &nbsp;
            </div>
            ))

            }

            <hr /><hr />
            <CommentsForm addNewComment={addNewComment}/>
        </div>
    )
}