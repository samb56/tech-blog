const router = require('express').Router();
const withAuth = require('../utils/auth')


//Home page render route

router.get('/', (req, res) => {
  console.log('home')

  // req.session.loggedIn = false;
  // let loggedIn = req.session.loggedIn
  // res.render('home', { loggedIn })
  res.render('home')
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