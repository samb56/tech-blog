const User = require('./User')
const Blogpost = require('./Blogpost')
const Comment = require('./Comment')

// User.hasMany(Blogpost, { as: 'blogposts', foreignKey: 'user_id' })

Blogpost.belongsTo(User, {
  foreignKey: 'userid',
  onDelete: 'CASCADE'
});

Blogpost.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = { User, Blogpost, Comment }