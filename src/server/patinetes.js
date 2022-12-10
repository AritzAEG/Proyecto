const mongoose = require('mongoose');
const patinetesSchema = new mongoose.Schema({
  id: String,
  name: String,
  speed: String,
})

mongoose.model("Patinetes", patinetesSchema);