const { User } = require('./User')
const { Blogpost } = require('./Blogpost')


User.hasMany(Blogpost, { as: 'blogposts', foreignKey: 'user_id' })

// Blogpost.belongsTo(User, {
//   foreignKey: 'id'
// });

module.exports = { User, Blogpost }