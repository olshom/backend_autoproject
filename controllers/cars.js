const router = require('express').Router()

const {Car} = require('../models/index')
const {Worker} = require('../models/index')
const {State} = require('../models/index')

router.get('/', async (req, res)=>{
    const cars = await Car.findAll({
        attributes: { exclude: ['workerId', 'stateId'] },
        include:[ {
          model: Worker,
          attributes: ['name']
        },
{            model: State,
            attributes: ['state']}]

      })
    res.json(cars)
})

router.post('/', async (req, res) => {
    try {
        const worker = await Worker.findOne()
        const car = await Car.create({...req.body, workerId: worker.id, stateId: 1})
        res.json(car)
    } catch(error) {
        return res.status(400).json({ error })
    }
})

const carFinder = async (req, res, next) => {
    req.car = await Car.findByPk(req.params.id)
    next()
}

router.put('/:id', carFinder, async (req, res) => {
    if (req.car) {
        req.car.stateId = req.body.stateId
        await req.car.save()
        res.json(req.car)

    } else {
        res.status(404).end()
    }
})

router.delete('/:id', carFinder, async (req, res) => {
    if (req.car) {
      await req.car.destroy()
    }
    res.status(204).end()
  })

module.exports = router