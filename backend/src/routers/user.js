const express = require("express");
const multer = require('multer')
const sharp = require('sharp')
const User = require("../models/user");
const auth = require("../middleware/authentication");
const {sendWelcomeEmail, sendCancelationEmail} = require('../emails/account')
const router = new express.Router();

router.post("/users", async (req, res) => {
  // creating new instance of User
  // console.log(req.body);
  const user = new User(req.body);
    try {
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.status(201).send({user, token});
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email,req.body.password);
    const token = await user.generateAuthToken();
    
    res.send({user, token});
  } catch (e) {
    res.status(400).send();
  }
});

// if user logs out, the auth token will be removed from tokens array
router.post("/users/logout", auth, async(req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token
    })
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  } 
})
/* This route deletes all the tokens, if a user logs out from a device it logs out 
    from all the devices that the user previously logged in*/
router.post('/users/logoutAll', auth, async(req, res) => {
  try {
    req.user.tokens = []
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  }
})

// This function is going to run if the user is actually authenticated
router.get("/users/me", auth, async (req, res) => { 
   res.send(req.user);
});

// Update user profile
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    // findByIdAndUpdate method bypasses mongoose. It performs a direct operation on the database
    // const user = await User.findById(req.params.id);

    // we use bracket notation to access a property dynamically
    updates.forEach(update => (req.user[update] = req.body[update]));

    await req.user.save();

    // if (!user) {
    //   return res.status(404).send();
    // }
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/users/me", auth, async (req, res) => {

  // const user = await User.findByIdAndDelete(req.user._id);
  // try {
  //   if (!user) {
  //     return res.status(404).send();
  //   }
  
  /* we don't need above lines since we verify the existence of use
     in auth middleware. So I used an async mongoose method to remove
     the profile of an authenticated user. */
  try{
    await req.user.remove()
    sendCancelationEmail(req.user.email, req.user.name)
    res.send(req.user); //Since we don't have a stand alone user variable I returned req.user
  } catch (e) {
    res.status(500).send();
  }
});

const upload = multer({
    limits: {
    fileSize:1000000
  },
  fileFilter(req, file, callback){
    if(!file.originalname.match(/\.(jpeg|jpg|png)$/)){
      return callback(new Error('Please upload a picture!'))
    }
    callback(undefined, true)
  }
})
router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  req.user.avatar = buffer
  await req.user.save()
  res.send()
}, (error, req, res, next)=>{
  res.status(400).send({error: error.message})
})

router.get('/users/:id/avatar', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if(!user || !user.avatar){
      throw new Error
    }
    res.set('Content-Type','image/png')
    res.send(user.avatar)
  } catch (e) {
    res.status(404).send()
  }
})

module.exports = router;
