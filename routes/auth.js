const express=require('express')
const router=express.Router()
const passport=require('passport')
const users=require('../models/user')
const bcrypt=require('bcryptjs')
const jwt = require("jsonwebtoken")
const {redirect}=require('../routes/validation')
const verification =require("../models/verification")
const sendmail=require('../util/verify')

router.get('/login', redirect, (req, res) => res.render('Login'))
router.get('/register', redirect, (req, res) => res.render('Register'))

router.post('/register',async(req,res)=>{
    const {firstName,lastName,email,password}=req.body
    if(password.length<8 || !firstName|| !lastName||!email||!password){
        res.json({ message: 'Make sure that all entries are filled and password is more than 7 characters' });
        // console.log('Make sure that all entries are filled and password is more than 7 characters')
    }
    else{
        users.findOne({email:email}).then(user=>{
          const newUser=new users({
              firstName,
              lastName,
              email,
              password
          })
            if(user){
                res.json({ message: 'Email already exists' });
                // console.log('Email already exists')
            }
            else{
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.password = hash;
                      newUser.save().then(user => {
                        // res.json({
                        //     message: 'You are now registered and can log in',
                        //     name: newUser.firstName
                        //   });
                          // res.redirect('/users/login')
                        })
                        .catch(err=>console.log(err));
                    })
                })
            }
        })
    const newUser=new users({
      firstName,
      lastName,
      email,
      password
  })
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SKEY, {
        expiresIn: "1h"
    });

    await sendmail.sendmail(newUser, res);
    const newVerification = new verification({
        userId: newUser._id,
        token: token,
        createdAt: Date.now(),
        expiresAt: Date.now() + 3600000,
        });
    await newVerification.save();
      }
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      req.logIn(user, err => {
        if (err) {
          return next(err);
        }
        return res.status(200).json({ message: 'Logged in successfully' });
      });
    })(req, res, next);
  });

  router.get('/logout',function(req,res,next){
    req.logout(function(err){
        if(err)
        return next(err)
        res.redirect('/')
    })
})

router.get('/confirm/:userId/:token', async (req, res) => {
  const { userId, token } = req.params;
  const verification = await verification.findOne({ userId, token });
  if (!verification) {
      return res.status(401).json({ message: "Invalid or expired confirmation link" });
  }
  await User.updateOne({ _id: userId }, { confirmed: true });
  await verification.deleteOne({ _id: verification._id });
  res.json({ message: "Account confirmed successfully" });
});


module.exports=router;