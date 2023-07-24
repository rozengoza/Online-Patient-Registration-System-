const express=require('express')
const router=express.Router()
const UsersController=require('../controller/users')
router.post ('/register',UsersController.registerUser)


router.get ('/checkIfUserExists/:phoneNumber',UsersController.checkIfUserExists)

module.exports=router;