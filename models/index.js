const { User } = require('./User')
const { Blogpost } = require('./Blogpost')


User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'id'
});

module.exports = { User, Blogpost }