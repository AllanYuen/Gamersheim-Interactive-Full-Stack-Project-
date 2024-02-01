const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;



//user session and cookie
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


// Inform Express.js on which template engine to use and which file use to be a layout

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'handlebars',
  defaultLayout: 'main'
}));


app.get('/',(req,res) => {res.render('homepage',)});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));
app.use("/", express.static(path.join(__dirname, "/public/images")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
