const mongoose =require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    fullName: {type:String, required:true}, // String is shorthand for {type: String}
    phoneNumber: {type:Number, required:true},
    email: String,
    password: String,
    confirmPassword: String,
    mode: { type:String, default:"Patient"},
    age: Number,
    gender: String,
    city:String
    // vehicleDetails: Object
  });
  const Users = mongoose.model('Users', userSchema);

  module.exports =Users