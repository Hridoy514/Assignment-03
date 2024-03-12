//Basic Import
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

//Security Middleware Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

//Database Library Import
const mongoose = require('mongoose');

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

//Body-Parser Implement
app.use(bodyParser.json());

//Rate-Limit Implement
const limiter = rateLimit({windowsMs:15*60*10000,max:3000});
app.use(limiter);

//MongoDB DataBase Connect
let URI="mongodb://127.0.0.1:27017/TodoList";
let OPTION={user:'',pass:'',autoIndex:true}
mongoose.connect(URI,OPTION,(erorr)=>{
    console.log("Connection Success");
    console.log(erorr);
})

//Routing Implement
app.use("/api/v1",router)

//Undeined Route
app.use("*",(req,res)=>{
    res.status(404).json({status:"Failed",data:"Data Not Found"})
})


module.exports = app;