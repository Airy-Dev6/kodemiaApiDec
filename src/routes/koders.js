const { request } = require('express')
const express = require('express')
const koders = require('./../usecases/koders')

const router = express.Router()

router.get('/',async (request, response) => {
  const allKoders = await koders.getAll()

  response.json({
    seccess: true,
    data: allKoders
  })
})

router.get('/:id', async(request, response ) => {
  const koderById = await koders.getById(request.params.id)

  response.json({
    success: true,
    data: koderById
  })
})

router.post('/', async (request, response) => {
  const {name, age} = request.body
  const koderCreate = await koders.create(name, age)

  response.json({
    success: true,
    data:koderCreate
  })
})

router.delete('/:id', async(request, response) => {
  const koderDeleted = await koders.deleteById(request.params.id)
  response.json({
    success: true,
    data: koderDeleted  
  })
})

router.patch('/:id', async (request, response)=> {
  const id = request.params.id
  const {name, age} = request.body

  const koderUpdated = await koders.updateById(id, name, age)

  response.json({
    success: true,
    data: koderUpdated
  })
})

module.exports = router