const Comments=require('../models/comment')
const Posts=require('../models/post')
const Users=require('../models/user')

exports.createPost = async (req, res, next) => {
    try {
      const { userId } = req.body.user;
      const { description, image } = req.body;
  
      if (!description) {
        next("You must provide a description");
        return;
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
      console.log(error);
      res.status(404).json({ message: error.message })
    }
  }

  // module.exports=createPost