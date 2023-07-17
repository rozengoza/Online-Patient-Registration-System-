const mongoose =require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    fullName: String, // String is shorthand for {type: String}
    phoneNumber: Number,
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