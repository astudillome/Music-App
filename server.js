// Require
require('dotenv').config();
const express = require('express');
const axios = require('axios')
const morgan = require('morgan')
const layouts = require('express-ejs-layouts');
const session = require('express-session')
const flash = require('connect-flash');
const methodOverride = require('method-override');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const app = express();

// Middleware
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


app.use((req, res, next) => {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

app.get('/album-details', isLoggedIn, (req, res) => {
  res.render('album-details');
});

// Use routes
app.use('/auth', require('./routes/auth'));
app.use('/search', isLoggedIn, require('./routes/search'));
app.use('/comments', isLoggedIn, require('./routes/comments'))
app.use('/favorites', isLoggedIn, require('./routes/favorites'))

// Server
var server = app.listen(process.env.PORT || 3000, ()=> console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 3000}🎧`));

module.exports = server;
