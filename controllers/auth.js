const users=require('../models/user')
const express=require('express')
const router=express.Router()
const passport=require('passport')
const users=require('../models/users')
const bcrypt=require('bcryptjs')
const {redirect}=require('../routes/validation')

router.get('/login', redirect, (req, res) => res.render('Login'))
router.get('/register', redirect, (req, res) => res.render('Register'))

router.post('/register',(req,res)=>{
    const {firstName,lastName,email,password}=req.body
    if(password.length<8 || !firstName|| !lastName||!email||!password){
        res.json({ message: 'Make sure that all entries are filled and password is more than 7 characters' });
        // console.log('Make sure that all entries are filled and password is more than 7 characters')
    }
    else{
        users.findOne({email:email}).then(user=>{
            if(user){
                res.json({ message: 'Email already exists' });
                // console.log('Email already exists')
            }
            else{
                const newUser=new users({
                    firstName,
                    lastName,
                    email,
                    password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.password = hash;
                      newUser.save().then(user => {
                        return res.status(200).json({ message: 'Registered successfully',
                            name: newUser.firstName
                          })
                        })
                        .catch(err=>console.log(err))
                    })
                })
            }
        })
    }
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.status(401).json({ message: info.message })
      }
      req.logIn(user, err => {
        if (err) {
          return next(err)
        }
        res.json({ message: 'Logged in successfully' })
        return
      })
    })
  })



module.exports=router;