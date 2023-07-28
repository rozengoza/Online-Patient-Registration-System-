const bcrypt = require('bcrypt');
const saltRounds = 10;
const Users = require('../models/users')
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
      await Users.create(req.body)     
    res.json({
      msg:"User has been added successfully.",
      success:true
    })

  }
}
    
  catch(err){
    res.json({
      msg:"User Registration failed."
    })
    console.log("User Registration failed.")
  }

  
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