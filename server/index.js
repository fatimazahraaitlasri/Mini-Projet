const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const port = 5000;
const fs = require("fs");
const imageModel = require("./Models/Imagemodel");
const { Console } = require("console");
app.use(cors()); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectDB = async () => { 
   
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/UploadImages')


    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
connectDB();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("testImage"), (req, res) => {
  console.log("res has a file")
  console.log(res.file)
  const saveImage =  imageModel({
    fullName:req.body.fullName,
    email:req.body.email,
    password:req.body.password,
    name: req.body.name,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
});

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await imageModel.findOne({ email })
  
  if (user && password==user.password) {
      res.json({
          _id: user.id,
          message: "User loged successfully"
          
      })
      Console.log('User loged successfully')
  } else {
      res.status(400)
      throw new Error('Invalid user data'),
      console.log('rzrzrzfsncd') 
  } 
};


app.get('/',async (req,res)=>{
  const allData = await imageModel.find()
  res.json(allData)
})
app.post('/login',login)
  
app.listen(port, () => {
  console.log("server running successfully");
});
