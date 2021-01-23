const express = require('express')
const auth = require('../usecases/auth')

const router = express.Router()

router.post('/signup', async(request, response) => {
  const  {email, password} = request.body
  const userCreated = await auth.signup(email, password)

  response.json({
    success: true, 
     data: userCreated
  })
})

router.post('/login', async (request, response) => {
  const {email, password} = request .body
  const isLoggedIn = await auth.login(email, password)

  if (!isLoggedIn) {
    response.status(401) // unauthorized
    response.json({
      success: false,
      message: 'Invalid data'
    })
  } else {
    response.json({
      success: true,
      message: 'User logged in'
    })
  }
})

module.exports = router