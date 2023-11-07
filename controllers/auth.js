const users=require('../models/user')
const hash=require('../util/auth')
const passport=require('passport')

module.exports = {
    register: async function (req, res, next) {
        const { firstName, lastName, email, password } = req.body
        console.log(req.body)
        if (!(firstName ||lastName || email || password)){
            next('Make sure that all entries are filled and password is more than 7 characters')
            return
        }
        else{
            res.json({
                message: 'You are now registered and can log in',
                name: req.body.firstName
              })
        }
        try {
            const check = await users.findOne({ email })
            if (check){
                next("This email is already registered" )
                return
            }

            const hashedpass = await hash(password)
            const user = await users.create({
                firstName,
                lastName,
                email, 
                password: hashedpass
            })
            // verification(user, res) 
        } 
        catch (error) {
            console.log(error)
            res.status(404).json({ message: error.message })
        }
    },

    login: async function (req, res, next) {
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
      }
}