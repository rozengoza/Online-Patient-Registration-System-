const express = require('express')// commonjs way of importing
const mongoose =require('mongoose')

const app=express()
//import react from 'react'; // es6 import method 
app.use(express.json()) //body readable format hudaina. tesaile express ko  body lai  Json banaideko 
const port = 3000
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/bFinder');
//mongoose schema

const productSchema = new Schema({
  productName: String, // String is shorthand for {type: String}
  productPrice: Number,
  productCategory: String,
  description: String,
  image: Number
});
const Products = mongoose.model('Product', productSchema);
app.post ('/products',(req,res)=>{
  try{
    Products.create(req.body)
  // res.json({
  //   msg:"Product has been added successfully."
  // })
}
catch(err){
  res.json({
    msg:"Product addition failed."
  })
  console.log("Product addition failed.")
}
})

app.get ('/products',async(req,res)=>{
  const data= await Products.find()
  if (data) res.json(data)
  
})

app.put('/products/:id',async (req,res)=>{
  await Products.findByIdAndUpdate(req.params.id,req.body)
})

app.delete('/products/:id',async(req,res)=>{
  await Products.findByIdAndDelete(req.params.id)
})
// app.put ('/products',async(req,res)=>{
//   const data= await Products.find()
//   if (data) res.json(data)
// })
// const usersList= [
//     {id:2,name:'hari',age:32},
//     {id:5,name:'shyam',age:33},
//     {id:9,name:'gopal',age:13},
//     {id:3,name:'chris',age:41},
// ]

// app.get('/users', (req, res) => {
//     //age < 30  
//     const onlyAgeArr = usersList.filter(item=>{
//         if(item.age <30 ){
//             return item
//         }
//     })
//     res.json({
//         users:onlyAgeArr
//     })
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })