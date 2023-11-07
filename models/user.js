const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "Enter First Name"],
    },
    lastName: {
      type: String,
      required: [true, "Enter Last Name"],
    },
    email: {
      type: String,
      required: [true, " Email is Required!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter Password!!"],
      minlength: [8, "Password cannot be less than 8 characters"],
    }
})
const users = mongoose.model("users", userSchema);

module.exports=users
