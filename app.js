const express = require('express');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || process.env.PORT_NUMBER;
const connectDB = require('./server/models/database');

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());


app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

const start = async() => {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, ()=> console.log(`Listening to port ${port}`));
}

start();

