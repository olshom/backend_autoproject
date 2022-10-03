const Car =require('./car')
const Worker = require('./worker')
const State = require('./state')

Worker.hasMany(Car)
Car.belongsTo(Worker)
State.hasMany(Car)
Car.belongsTo(State)
Car.sync({ alter: true })
Worker.sync({ alter: true })
State.sync()

module.exports = {
    Car, Worker, State
}