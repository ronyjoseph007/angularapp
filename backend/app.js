var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/login');
var usersRouter = require('./routes/register');
var getUserRouter = require('./routes/getUser');
var updateUserRouter = require('./routes/updateUser');
var url = 'mongodb://localhost/task';
mongoose.connect(url);
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept,authorization'
    );
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    if (req.method === 'OPTIONS') {
        res.send('ok');
    } else {
        next();
    }
});

app.use('/login', indexRouter);
app.use('/register', usersRouter);
app.use('/getUser', getUserRouter);
app.use('/update', updateUserRouter);

module.exports = app;
