const express = require('express')
const mongoose = require('mongoose');
const Category = require("./models/categoryModels");
const Products = require("./models/productsModels");
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/categories', async (req, res, next) => {
    try{
      const newCategory = new Category({ title: req.body.title });
      await newCategory.save();
      res.status(201).json(newCategory)
    }
    catch(error){
      console.log(error)
    }
    
  })

app.get('/categories', async (req, res, next) => {
  try{
    const categories = await Category.find({});
    res.status(200).json(categories)
  }
  catch(error){
    console.log(error)
  }
 
})  

app.get('/products', async (req, res, next) => {
  try{
     const products = await product.find({})
     res.status(200).json(products)
  }
  catch(error){
    console.log(error)
  }
})

app.post('/products', async (req, res, next) => {
  try{
     const newProducts = new Products(req.body)
     await newProducts.save();

     res.status(200).json(newProducts)
  }
  catch(error){
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(()=>console.log("db connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:n7vOTITVeVUMtnAd@cluster0.e1gedmo.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}