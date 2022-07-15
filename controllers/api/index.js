const router = require('express').Router()
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes')
const blogRoutes = require('./blog-routes')

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes)
module.exports = router