const express = require('express')
const newsr=express.Router()



newsr.get('/',async(req,res)=>{
    try {
      
      
        res.render('register')




    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})



module.exports=newsr