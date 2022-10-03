const router = require('express').Router()

const {Car} = require('../models/index')
const {State}  = require('../models/index')

router.get('/', async (req, res)=>{
    const states = await State.findAll({
        include: {
            model: Car
        }
    })
    res.json(states)
})

module.exports = router