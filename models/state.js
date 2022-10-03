const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/database')

class State extends Model {}
State.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    state: {
        type: DataTypes.TEXT,
        allowNull: false
        },
    }, {
        
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'state'
  }
)

module.exports = State