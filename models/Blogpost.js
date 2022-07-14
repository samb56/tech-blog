
const sequelize = require('../db')
const { DataTypes, Model } = require('sequelize')

class Blogpost extends Model { }

Blogpost.init(
  {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
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