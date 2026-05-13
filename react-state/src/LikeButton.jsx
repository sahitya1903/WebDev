import { useState } from "react";

export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    let [click,setClick]=useState(0);

    let toggleLike=()=>{
        setIsLiked(!isLiked);
        setClick(click+1);
        console.log('clicked')
    }


    let likeStyle={color:'red'};

    return(
        <p onClick={toggleLike}>
            {/* {isLiked.toString()} */}
            No. of Clicks: {click}
            {
                isLiked ? (<i className="fa-solid fa-heart" style={likeStyle}></i>):(<i className="fa-regular fa-heart"></i>)
            }
        </p>
    );
}