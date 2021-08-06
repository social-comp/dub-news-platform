const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/',async(req,res)=>{
    try {
        var url = 'https://newsapi.org/v2/everything?domains=apnews.com&apiKey=80ca1d17c157402fa1ac57fe7240bbd7'
        const news_get =await axios.get(url)
        res.render('article',{articles:news_get.data.articles})




    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})



module.exports=newsr