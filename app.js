const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const users = require('./routes/users')
const path = require('path')
const dbConfig = require('./config/db.config')

/**
 * db config
 */
dbConfig.connect()
  .then(() => {
    console.log('successfully connected to MongoDB')
  }).catch(error => {
    throw Error('database connection failed', error)
  })

/**
 * middleware
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static(path.join(__dirname, '/public')))

/**
 * routes middleware
 */
app.use('/users', users)

/**
 * error pages
 */
app.use(function (req, res, next) {
  res.status(404).render('NotFound', { title: 'Page Not Found' })
})

module.exports = app
