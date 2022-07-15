
const sequelize = require('../config/connection')
const { DataTypes, Model, Sequelize } = require('sequelize')

class Blogpost extends Model { }

Blogpost.init(
  {

    title: {
      type: DataTypes.STRING,

    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize,
    modelName: 'blogpost',
  }
)

module.exports = Blogpost