const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const env = require('./env');

const signUp = require('./views/signUp');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());



app.get('/', (req,res) => {
    res.send(signUp());
});

app.listen(process.env.PORT || env.port, () => {
  console.log(`Server listening at http://localhost:${env.port}`)
});