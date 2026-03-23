const express=require('express');
const router=express.Router();

//Routes for users

//INDEX
router.get('/',(req,res)=>{
    res.send('GET for user')
})

//SHOW
router.get('/:id',(req,res)=>{
    res.send('GET for user id')
})

//CREATE
router.post('/',(req,res)=>{
    res.send('POST for user')
})

//DESTROY
router.delete('/',(req,res)=>{
    res.send('DELETE for user')
})

module.exports=router;