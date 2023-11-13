const express=require('express')
const userAuth=require('../middleware/authmw.js')
const router=express.Router()
const posts=require('./post')
router.use('/posts',posts)

const {
  createPost,
  commentPost,
  deletePost,
  likePost
} =require ('../controllers/post.js')

router.post("/create-post", userAuth, createPost) 
router.delete("/:id", userAuth, deletePost) 
router.post("/comment-post", userAuth, commentPost) 
router.post("/like-post", userAuth, likePost) 


module.exports=router
