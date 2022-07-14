const router = require('express').Router()
const { Blogpost, User } = require('../models')
// const withAuth = require('../../utils/auth')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/blog', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Blogpost.findAll({ include: [User] })
  res.json(posts)
})

router.post('/blog', passport.authenticate('jwt'), async function (req, res) {

  const newBlogpost = await Blogpost.create(req.body)



  res.json(newBlogpost)


})

module.exports = router