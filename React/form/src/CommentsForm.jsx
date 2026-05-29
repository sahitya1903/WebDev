import { useState } from "react";
import {useFormik} from 'formik';

export default function CommentsForm({addNewComment}){
    // let[formData,setFormData]=useState({
    //     username:"",
    //     remarks:"",
    //     rating:5
    // });

    const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username Required';
    }
    return errors;
    };

    const formik = useFormik({
        initialValues: {
        username: '',
        remarks:'',
        rating:5
        },
        validate, 
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });

    // let handleInputChange=(event)=>{
    //     setFormData((currdata)=>{
    //         return {...currdata,[event.target.name]:event.target.value};
    //     })
    // }

    // let handleSubmit=(event)=>{
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username:"",
    //         remarks:"",
    //         rating:5
    //     });
    // }

    return(
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username:</label>&nbsp;&nbsp;
                <input type="text" placeholder="username" name="username" value={formik.values.username} onChange={formik.handleChange}/>
                {formik.errors.username ? <p style={{color:'red'}}>{formik.errors.username}</p> : null}
                <br /><br />
                <label htmlFor="remarks">Remarks:</label>&nbsp;&nbsp;
                <textarea placeholder="remarks" name="remarks" value={formik.values.remarks} onChange={formik.handleChange}>Remarks</textarea>
                <br /><br />
                <label htmlFor="rating">Rating:</label>&nbsp;&nbsp;
                <input type="number" placeholder="rating" name="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange}/>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}