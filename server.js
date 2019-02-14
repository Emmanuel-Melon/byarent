const app = require('./app')

/**
 * init port
 */
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server is now running at ${PORT}`)
})
