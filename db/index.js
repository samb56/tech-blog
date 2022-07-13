const { Sequelize } = require('sequelize')

module.exports = new Sequelize('databse', 'username', 'password', {
  host: 'process.env.JAWSDB_URL || process.env.LOCALDB_URL',
  dialect: 'mysql'
})