const router = require('express').Router()
const { Blogpost } = require('../../models')
const withAuth = require('../../utils/auth')


router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [targetRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (targetRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [targetRows] = Post.destroy({
      where: {
        id: req.params.id
      },
    })
    if (targetRows > 0) {
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router