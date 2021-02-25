const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);

module.exports = app;
