const router = require('express').Router();
const withAuth = require('../utils/auth')
const { Blogpost, User, Comment } = require('../models')

//Home page render route

router.get('/', async (req, res) => {
  console.log('home')

  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-blogposts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
  // req.session.loggedIn = false;
  // let loggedIn = req.session.loggedIn
  // res.render('home', { loggedIn })

  // res.render('home')
})


//Login page render route
router.get('/login', (req, res) => {
  console.log('login')

  // req.session.loggedIn = false;
  // let loggedIn = req.session.loggedIn
  // res.render('home', { loggedIn })
  res.render('login')
})

router.get('/dashboard', async (req, res) => {
  const blogData = await

    res.render('dashboard',)
})
module.exports = router