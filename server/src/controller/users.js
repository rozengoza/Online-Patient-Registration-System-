const Users = require('../models/users')

const registerUser=async (req,res)=>{
    // console.log(req.body)
    try{
      Users.create(req.body)
    res.json({
      msg:"User has been added successfully.",
      success:true
    })
  }
  catch(err){
    res.json({
      msg:"User Registration failed."
    })
    console.log("User Registration failed.")
  }
  
  }

  
const checkIfUserExists = async(req,res)=>{
    const data= await Users.findOne({phoneNumber:req.params.phoneNumber})
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


module.exports ={checkIfUserExists, registerUser}