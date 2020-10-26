require('dotenv').config();
const express = require('express');
const axios = require('axios')
const layouts = require('express-ejs-layouts');
const disconnect = require('disconnect')
const session = require('express-session')
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const app = express();
var Discogs = require('disconnect').Client;




app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
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

app.get('/', (req, res) => {
  res.render('index');
});


//Testing API
app.get('/authorize', (req,res) => {
axios.get(`https://api.discogs.com/database/search?q=Nirvana&key=` + process.env.disKey + `&secret=` + process.env.disSecret).then(({
  data: {results}
}) => JSON.stringify(res)).catch(err => console.log("this is the error" + err));
console.log('this is the result' + JSON.stringify(res))
});

app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

app.use('/auth', require('./routes/auth'));

var server = app.listen(process.env.PORT || 3000, ()=> console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 3000}🎧`));

module.exports = server;
