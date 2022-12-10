const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('./patinetes.js')

app.use(bodyParser.json())

const patinetes = mongoose.model("Patinetes")

const uri = "mongodb+srv://aritz:eV5lFFW6GQszztiD@cluster0.suz9g08.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,{
  useNewUrlParser:true,
  useUnifiedTopology: true,
})

mongoose.connection.on("connected", () => {
  console.log("Connected to Database");
})

mongoose.connection.on("error", (err) => {
  console.log("Error: ", err);
})

app.get('/',(req,res)=>{
  res.send("Welcome to node js")
})

app.post('/send-data',(req,res)=>{
  const Patinetes = new patinetes({
    id: req.body.id,
    name: req.body.name,
    speed: req.body.speed,
  })
  Patinetes.save()
  .then(data => {
    console.log(data)
  })
  res.send("posted")
})

app.listen(3000,()=>{
  console.log("listening on port 3000")
})