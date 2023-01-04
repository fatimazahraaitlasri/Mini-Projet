const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  fullName: 
  {
    type: String,
    required: true,
  },
  email:
  {
    type: String, 
    required: true,
  },
  password:
  {
    type: String, 
    required: true,
  },
  name: String, 
  img: {
    data: Buffer,
    contentType: String,  
  },
});

module.exports = ImageModel = mongoose.model("Image", imgSchema);
