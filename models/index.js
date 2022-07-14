const { User } = require('./User')
const Blogpost = require('./Blogpost')


// User.hasMany(Blogpost, { as: 'blogposts', foreignKey: 'user_id' })

// Blogpost.belongsTo(User, {
//   foreignKey: 'id'
// });

User.hasMany(Blogpost, { foreignKey: 'uid' })
Blogpost.belongsTo(User, { foreignKey: 'uid' })
module.exports = { User, Blogpost }