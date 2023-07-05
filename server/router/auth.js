const express = require("express");
const jwt  = require('jsonwebtoken');
const router = express.Router();
const bycrpt = require("bcryptjs");
const authenticate  = require("../middleware/authenticate");


const cookieParser = require("cookie-parser");
router.use(cookieParser());

require("../db/conn");
const User = require("../model/userSchema");
const { default: mongoose } = require("mongoose");

router.get("/", (req, res) => {
  res.send("Hi Express connected with router");
});


//using promises
// router.post("/register", (req, res) => {

//   //check empty fields
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Please filled required filed" });
//   }

//   //check users email entered is already exist ?
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already Exist" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "Failed to registered" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });



router.post("/register", async (req, res) => {
  //check empty fields
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please filled required filed" });
  }
  try {
    //check users email entered is already exist ?
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      //get new data and save in collection
      const user = new User({ name, email, phone, work, password, cpassword });

      //use bycrpt before save

      await user.save();

      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});



router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please filled empty data" });
    }
    const userlogin = await User.findOne({ email: email });
    // console.log(userlogin);

    if(userlogin){
      //check hashing password to our entered password
    const isMatch  = await bycrpt.compare(password, userlogin.password);

    const token = await userlogin.generateAuthToken();
    console.log(token);
      //add token in cookie
      res.cookie("jwtoken", token, {
        expires:new Date(Date.now()+ 15000000000),
        httpOnly: true
      });
      


    if (!isMatch) {
      res.status(400).json({ error: "invalid Credentials" });
    } else {
      res.json({ message: "user SignIn Successfully" });
    }
    }else{
      res.status(400).json({ error: "invalid Credentials" });
    }

    
  } catch (err) {
    console.log(err);
  }
});

router.get('/about', authenticate, (req, res) =>{
  console.log("Server side About Page");
  res.send(req.rootUser);
});


//get user data for contact us and home page
router.get('/getdata', authenticate, (req, res)=>{
  // res.cookie("Testcookie", "surajcokkie");
  // res.send("Hello this is contact page");
  console.log("Server side contact Page");
  res.send(req.rootUser);
});

router.post('/contact',authenticate, async(req,res)=>{
  try{
    const {name, email, phone, message} = req.body;
    if(!name|| !email || !phone || !message){
      console.log("error in contact form");
      return res.json({
        error:"plzz filled the contact form" 
      });
    }

    const userContact = await User.findOne({_id: req.userID});
    if(userContact){
      const userMessage = await userContact.addMessage(name, email, phone, message);
      await userContact.save();
      res.status(201).json({ message:"user Contact successfully"});
    }
  }catch(err){
    console.log(err);
  }
});

//Logout page
router.get('/logout', (req, res) =>{
  console.log("Server side Logout Page");
  res.clearCookie('jwtoken', {path:'/'});
  res.status(200).send('User Logout');
  
});

module.exports = router;
