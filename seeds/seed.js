const sequelize = require('../config/connection');
const { Blogpost, User } = require('../models')


const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await Blogpost.bulkCreate(blogpostData)

  process.exit(0);
};

seedAll();