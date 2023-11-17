const Comments=require('../models/comment')
const Posts=require('../models/post')
const Users=require('../models/user')

export const createPost = async (req, res, next) => {
    try {
      const { userId } = req.body.user
      const { description, image } = req.body
  
      if (!description) {
        next("You must provide a description")
        return
      }
  
      const post = await Posts.create({
        userId,
        description,
        image,
      })
  
      res.status(200).json({
        sucess: true,
        message: "Post created successfully",
        data: post,
      })
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: error.message })
    }
  }

  export const likePost = async (req, res, next) => {
    try {
      const { userId } = req.body.user
      const { id } = req.params
      const post = await Posts.findById(id)
      const index = post.likes.findIndex((pid) => pid === String(userId))
      if (index === -1) {
        post.likes.push(userId)
      } else {
        post.likes = post.likes.filter((pid) => pid !== String(userId))
      }
      const newPost = await Posts.findByIdAndUpdate(id, post, {
        new: true,
      })
      const likeCount = newPost.likes.length
      res.status(200).json({
        success: true,
        message: "Liked successfully",
        data: {
          post: newPost,
          likeCount: likeCount,
        },
      })
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: error.message })
    }
  }
  

  export const commentPost = async (req, res, next) => {
    try {
      const { comment, from } = req.body
      const { userId } = req.body.user
      const { id } = req.params
      if (comment === null) {
        return res.status(404).json({ message:"Comment is required." })
      }
      const newComment = new Comments({ comment, from, userId, postId: id })
      await newComment.save()
      const post = await Posts.findById(id)
  
      post.comments.push(newComment._id)
      const updatedPost = await Posts.findByIdAndUpdate(id, post, {
        new: true,
      })
      res.status(201).json(newComment)
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: error.message })
    }
  }

  export const deletePost = async (req, res, next) => {
    try {
      const { id } = req.params
      await Posts.findByIdAndDelete(id)
      res.status(200).json({
        success: true,
        message: "Deleted successfully",
      })
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: error.message })
    }
  }
  // module.exports=createPost