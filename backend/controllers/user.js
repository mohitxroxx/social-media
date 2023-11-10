const mongoose=require('mongoose')
const verification=require('../models/verification')
const user=require('../models/user')
const Users=require('../models/user')
const FriendRequest=require('../models/friendreq')

export const friendRequest = async (req, res, next) => {
    try {
      const { userId } = req.body.user
      const { requestTo } = req.body
      const requestExist = await FriendRequest.findOne({
        requestFrom: userId,
        requestTo,
      })
      if (requestExist) {
        next("Friend Request already sent.")
        return
      }
      const accountExist = await FriendRequest.findOne({
        requestFrom: requestTo,
        requestTo: userId,
      })
  
      if (accountExist) {
        next("Friend Request already sent.")
        return
      }
      const newRes = await FriendRequest.create({
        requestTo,
        requestFrom: userId,
      })
      res.status(201).json({
        success: true,
        message: "Friend Request sent successfully",
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "auth error",
        success: false,
        error: error.message,
      })
    }
  }
  
  export const getFriendRequest = async (req, res) => {
    try {
      const { userId } = req.body.user
      const request = await FriendRequest.find({
        requestTo: userId,
        requestStatus: "Pending",
      })
        .populate({
          path: "requestFrom",
          select: "firstName lastName profileUrl profession -password",
        })
        .limit(10)
        .sort({
          _id: -1,
        })
      res.status(200).json({
        success: true,
        data: request,
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "auth error",
        success: false,
        error: error.message,
      })
    }
  }
  
  export const acceptRequest = async (req, res, next) => {
    try {
      const id = req.body.user.userId
      const { rid, status } = req.body
  
      const requestExist = await FriendRequest.findById(rid)
      if (!requestExist) {
        next("No Friend Request Found.")
        return
      }
      const newRes = await FriendRequest.findByIdAndUpdate(
        { _id: rid },
        { requestStatus: status }
      )
      if (status === "Accepted") {
        const user = await Users.findById(id)
        user.friends.push(newRes?.requestFrom)
        await user.save()
        const friend = await Users.findById(newRes?.requestFrom)
        friend.friends.push(newRes?.requestTo)
        await friend.save()
      }
      res.status(201).json({
        success: true,
        message: "Friend Request " + status,
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "auth error",
        success: false,
        error: error.message,
      })
    }
  }