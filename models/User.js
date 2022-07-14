// const sequelize = require('../config/connection')
const pls = require('passport-local-sequelize')
const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = pls.defineUser(sequelize, {

})

module.exports = { User }