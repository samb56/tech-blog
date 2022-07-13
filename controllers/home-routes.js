const router = require('express').Router();



//Home page render route

router.get('/', (req, res) => {
  console.log('home')

  // req.session.loggedIn = false;
  // let loggedIn = req.session.loggedIn
  // res.render('home', { loggedIn })
  res.render('home')
})

module.exports = router