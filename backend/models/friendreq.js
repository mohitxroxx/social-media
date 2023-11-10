const mongoose=require('mongoose')

const requestSchema = new mongoose.Schema(  {
    requestTo: { type: Schema.Types.ObjectId,ref:"Users" },
    requestFrom: { type: Schema.Types.ObjectId, ref: "Users" },
    requestStatus: { type: String, default:"Pending" },
  },
  {timestamps: true}
  )
const FriendRequest = mongoose.model("FriendRequest", requestSchema)

module.exports=FriendRequest
