const express =require('express')
const app=express()
require('dotenv').config()
require('./model/config').dbconnection()
const userRoute=require("./routes/userRoute")

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/user',userRoute)


app.all("*",function(req,res,next){

  res.status(404).json({succeses:false,message:`${req.url} route not found`,})


})


//server
app.listen(process.env.PORT, () => {
    console.log(` listening on port ${process.env.PORT}`)
  })