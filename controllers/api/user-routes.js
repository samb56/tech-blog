const router = require('express').Router()
const { User } = require('../../models')


router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.post('/users/register', (req, res) => {
//   const {
//     username
//   } = req.body

//   User.register(new User({
//     username

//   }), req.body.password, err => {
//     if (err) { console.log(err) }
//     res.sendStatus(200)
//   })
// })

// router.post('/users/login', (req, res) => {
//   User.authenticate()(req.body.username, req.body.password, (err, user) => {
//     if (err) { console.log(err) }
//     res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
//   })
// })

module.exports = router