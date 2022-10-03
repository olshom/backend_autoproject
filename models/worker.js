const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/database')

class Worker extends Model {}
Worker.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
        },
    }, {
        
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'worker'
  }
)

module.exports = Worker