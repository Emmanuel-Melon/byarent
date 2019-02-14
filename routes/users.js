const express = require('express')
const router = express.Router()
const registerUser = require('../controllers/registerUser')

/**
 * @access {public}
 * @param {route, callback}
 */
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register', message: 'Join ByArent' })
})

router.post('/register', async (req, res) => {
  let user = await registerUser(req.body)
  if (user) {
    res.status(403).send('user already exists')
  } else {
    res.status(301).json(user)
  }
})

module.exports = router
