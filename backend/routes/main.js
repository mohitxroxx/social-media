const express=require('express')
const auth=require('./auth')
const posts=require('./post')

const router=express.Router()

router.use('/auth',auth)
router.use('/posts',posts)

module.exports=router;