const express=require('express')
const userAuth=require('../middleware/authmw.js')

const {
  commentPost,
  createPost,
  deletePost,
  getComments,
  getPost,
  getPosts,
  getUserPost,
  likePost,
  likePostComment,
  replyPostComment,
} =require ('../controllers/post.js')

const router = express.Router()

router.post("/create-post", userAuth, createPost)


module.exports=router
