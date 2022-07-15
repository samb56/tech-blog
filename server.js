

const express = require('express')
const session = require('express-session')
const routes = require('./controllers')
const sequelize = require('./config/connection');

const helpers = require('./utils/helpers')


const exphbs = require('express-handlebars');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({});



const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// Enable Routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});


// require('./db').sync()
//   .then(() => {
//     console.log(`\x1b[45m    http://localhost:${PORT}   \x1b[0m`)
//     app.listen(process.env.PORT || 3001)

//   })

//   .catch(err => console.log(err))






// // startLocalServer();