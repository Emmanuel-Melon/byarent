const { validateRegistration } = require('../middleware/validation')
const { hashPassword } = require('../middleware/auth')
const { checkUser, User } = require('../models/users')

const registerUser = async user => {
  /**
   * check for existing accounts
   */
  let userExists = await checkUser(user)
  if (!userExists) {
    /**
     * validate user
     */
    const { error } = validateRegistration(user)
    if (error) throw Error('Invalid user details', error)
    const validatedUser = validateRegistration(user).value

    /**
     * hash password
     */
    const secureUser = Object.assign({}, validatedUser, { password: hashPassword(validatedUser) })

    /**
     * save user
     */
    const newUser = new User(secureUser)
    newUser.save()

    return secureUser
  } else {
    return userExists
  }
}

module.exports = registerUser
