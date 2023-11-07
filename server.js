const express=require('express')
const dotenv=require('dotenv')
const helmet=require('helmet')
const cors=require('cors')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const session=require('express-session')
const passport=require('passport')
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


// app.use(session({
//     secret:'secret',
//     resave:true,
//     saveUninitialized:true
// }))

const PORT=process.env.PORT||5100
app.listen(PORT,console.log("SERVER UP and running at",PORT))