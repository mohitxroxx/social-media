const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const passport = require('passport')
const users = require('../models/user')

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});


module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      users.findOne({ email: email }).then(user => {
        if (!user) {
          console.log('User not registered');
          return done(null, false, { message: 'User not registered' });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            // const token = createJWT(user?._id);
            console.log('Logged in successfully', user.firstName);
            return done(null, user);
          } else {
            console.log('Wrong password');
            return done(null, false, { message: 'Wrong password' });
          }
        });
      });
    })
  ); 
}
