const jwt = require('jsonwebtoken')
const router = require('express').Router()

const { SECRET } = require('../util/config')
const Worker = require('../models/worker')

router.post('/', async (request, response) => {
  const body = request.body

  const worker = await Worker.findOne({
    where: {
      name: body.username.name
    }
  })

  const passwordCorrect = body.password === '1234'

  if (!(worker && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    name: worker.name,
    id: worker.id,
  }

  const token = jwt.sign(userForToken, SECRET)

  response
    .status(200)
    .send({ token, name: worker.name })
})

module.exports = router