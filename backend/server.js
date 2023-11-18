const express=require('express')
const dotenv=require('dotenv')
const helmet=require('helmet')
const cors=require('cors')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const session=require('express-session')
const passport=require('passport')
const User=require('../backend/models/user')
require('./controllers/verify')(passport);
const router=require('./routes/main')
const connectDB = require('./config/db')
dotenv.config({path:'./config/.env'})

connectDB()

const app=express()

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  )

app.use(passport.initialize())
app.use(passport.session())
app.use(helmet())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(router);


// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5100/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//       userProfile=profile;
//       return done(null, userProfile);
//   }
// ));
 
// app.get('/auth/google', 
//   passport.authenticate('google', { scope : ['profile', 'email'] }));
 
// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/error' }),
//   function(req, res) {
//     res.redirect('/');
//   });

const PORT=process.env.PORT||5100 
app.listen(PORT,console.log("SERVER UP and running at",PORT))