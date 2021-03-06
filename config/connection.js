const Sequelize = require('sequelize');
require('dotenv').config();





// console.log("\x1b[43mCLEARDB_DATABASE_URL: " + process.env.CLEARDB_DATABASE_URL + "\x1b[0m");


// const sequelize = process.env.CLEARDB_DATABASE_URL
//   ? new Sequelize(process.env.CLEARDB_DATABASE_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: DB_HOST,
//     port: DB_HOSTPORT,
//     dialect: 'mysql',
//     dialectOptions: {
//       decimalNumbers: true,
//     },
//   });

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;