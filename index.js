const express = require('express')
const app=express()
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;


/*
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    phone:Number,
    telephone:Number
}) ;
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);
*/


  
  
// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',require('./routes/news'))
app.use('/article',require('./routes/article'))
app.use('/login',require('./routes/login'))
app.use('/register',require('./routes/register'))


app.set('views','./views')

app.listen(port,()=> console.log("started"))





