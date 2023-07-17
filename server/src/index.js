const express = require('express')// commonjs way of importing

require('dotenv').config()
const connection = require('./db/connection')
const Users =require('./models/users')
connection()
const app=express()
app.use(express.json())
const cors=require('cors');
app.use(cors());
//body readable format hudaina. tesaile express ko  body lai  Json banaideko 
//import react from 'react'; // es6 import method 
// const port = process.env.PORT
// console.log(process.env)


//mongoose schema


app.post ('/register',async (req,res)=>{
  // console.log(req.body)
  try{
    Users.create(req.body)
  res.json({
    msg:"User has been added successfully."
  })
}
catch(err){
  res.json({
    msg:"User Registration failed."
  })
  console.log("User Registration failed.")
}

})

app.get ('/register',async(req,res)=>{
  const data= await Users.find()
  if (data) res.json(data)
  
})

app.put('/register/:id',async (req,res)=>{
  await Users.findByIdAndUpdate(req.params.id,req.body)
})

app.delete('/register/:id',async(req,res)=>{
  try{
  await Users.findByIdAndDelete(req.params.id)
  res.json({
    msg:"User has been deleted successfully."
  })
}
catch(err){
  res.json({
    msg:"User deletion failed."
  })
  console.log("User deletion failed.")
}

})

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })