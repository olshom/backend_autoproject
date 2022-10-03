const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/database')

class Car extends Model {}
Car.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.TEXT,
      allowNull: false
    }, 
    date: {
      type: DataTypes.DATE
    },
    stateId: {type: DataTypes.INTEGER},
    workerId: {type: DataTypes.INTEGER}
  }, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'car'
  })

module.exports = Car