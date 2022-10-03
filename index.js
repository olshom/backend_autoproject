const express = require('express')
const cors = require('cors')
const app = express()


const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/database')

const carsRouter = require('./controllers/cars')
const loginRouter = require('./controllers/login')
const workersRouter = require('./controllers/workers')
const statesRouter = require('./controllers/states')

app.use(cors())
app.use(express.json())
app.use('/api/cars', carsRouter)
app.use('/api/workers', workersRouter)
app.use('/api/login', loginRouter)
app.use('/api/states', statesRouter)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()
