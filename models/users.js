const mongoose = require('mongoose')

const userSchema = {
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    required: true,
    type: String
  }
}

const User = mongoose.model('User', userSchema)

const checkUser = async user => User.findOne({ email: user.email })

module.exports = {
  User,
  checkUser
}
