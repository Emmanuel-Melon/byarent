const mongoose = require('mongoose')
const user = {
  name: 'byarent',
  password: 'byarent1'
}
const url = `mongodb://${user.name}:${user.password}@ds063919.mlab.com:63919/byarent_db`

const connect = () => mongoose.connect(url, { useNewUrlParser: true })

module.exports = {
  connect
}
