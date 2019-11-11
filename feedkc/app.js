var express = require('express');
var app = express();
var path = require('path');
var cors=require('cors');
app.use(cors());
const port = 3000;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FeedKc')
    .then(() => console.log('connection successful@27017'))
    .catch((err) => console.error(err));
var loginRouter = require('./routes/login');
var demoRouter = require('./routes/demographics');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/books', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/login', loginRouter);
app.use('/demo', demoRouter);

app.listen(port, () => console.log(`FeedKc app listening on port ${port}!`));
module.exports = app;


