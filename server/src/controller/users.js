const bcrypt = require('bcrypt');
const saltRounds = 10;
const Users = require('../models/users')
const jwt = require('jsonwebtoken')
const cookie = require('cookie')
// const token = jwt.sign({ phoneNumber:req.body.phoneNumber}, process.env.SECRET_KEY);
// require('crypto').randomBytes(64).toString('hex')



const registerUser=async (req,res)=>{
  // check if user already exists
try{
  const data= await Users.findOne({phoneNumber:req.body.phoneNumber})
  if(data){
    res.status(409).json({
      msg:"User with given phone number already exists.",
      success:false
    })
  }else{
    req.body.password = await bcrypt.hash(req.body.password, saltRounds)
    const token = jwt.sign({ phoneNumber:req.body.phoneNumber},process.env.SECRET_KEY);
    const info = await Users.create(req.body) 
    if(info){
      const {password, ...otherFields}  = info._doc
      console.log(otherFields)
    res.json({
      msg:"User has been added successfully.",
      success:true,
      token:token,
      userDetails:otherFields,

    })
  }

  }
}
    
  catch(err){
    res.json({
      msg:"User Registration failed."
    })
    console.log("User Registration failed.")
  }
  }


  // Setup cookie 

  const handleCookie=()=>{
    const secureCookie = true;
    const httpOnlyCookie = true;
    const cookieOptions = {
      secure: secureCookie,
      httpOnly: httpOnlyCookie,
    };
    const cookieString = cookie.serialize('jwtToken', token, cookieOptions);
  
    // Set the cookie in the response header
    res.setHeader('Set-Cookie', cookieString);
  }


  
const checkIfUserExists = async(req,res)=>{
  // check if user already exists
    const data= await Users.findOne({phoneNumber:req.body.phoneNumber})
    console.log(req.params.phoneNumber)
    if (data){
        res.json({
        msg:"Phone Number already exists",
        validPhoneNo:false
    })
}else{
    res.json({
        validPhoneNo:true
    })
}   
}

const checkIfCorrectUsernameAndPassword = async(req,res)=>{
  const data = await Users.findOne({phoneNumber})
}

module.exports ={checkIfUserExists, registerUser}