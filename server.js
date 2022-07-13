const express = require('express')
const session = require('express-session')
const routes = require('./controllers')
const sequelize = require('./config/connection');
const passport = require('passport')
const { User } = require('./models')

const { config } = require('dotenv');
const exphbs = require('express-handlebars');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});


// app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));
app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  user.findOne({ id })
    .then(user => done(null, user))
    .catch(err => done(err, null))
})
// Enable Routes
app.use(routes);


require('./db').sync()
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))



// async function startLocalServer() {

//   // Enable connection to Remote DB and Start Local server for API to connect

//   sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => {
//       console.log(`\n\x1b[42m  ~~~ Local Server Start Success! ~~~  \x1b[0m`);
//       console.log(`\x1b[45m    http://localhost:${PORT}   \x1b[0m`);

//     });
//   });
// }



startLocalServer();