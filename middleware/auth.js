const bcrypt = require('bcrypt')
const saltRounds = 12

const hashPassword = user => bcrypt.hashSync(user.password, saltRounds)

module.exports = {
  hashPassword
}
