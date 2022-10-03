const router = require('express').Router()

const {Car} = require('../models/index')
const {Worker}  = require('../models/index')

router.get('/', async (req, res) => {
   const workers = await Worker.findAll({
    include: {
      model: Car
    }
   })
   res.json(workers)
})

router.post('/', async (req, res) => {
    try {
      const worker = await Worker.create(req.body)
      res.json(worker)
      } catch(error) {
        return res.status(400).json({error})
      }
})

router.get('/:id', async (req, res) => {
    const worker = await Worker.findByPk(req.params.id)
    if (worker) {
      res.json(worker)
    } else {
      res.status(404).end()
    }
  })

router.delete('/:id', async (req, res) => {
    const worker = await Worker.findByPk(req.params.id)
    if (worker) {
      await worker.destroy()
    }
    res.status(204).end()
})

module.exports = router