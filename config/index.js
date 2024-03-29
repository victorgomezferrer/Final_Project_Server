const express = require('express');

const logger = require('morgan');

const cookieParser = require('cookie-parser');

const cors = require('cors');

const FRONTEND_URL = process.env.ORIGIN || 'http://localhost:3000';

module.exports = (app) => {
  app.set('trust proxy', 1);

  app.use(
    cors({
      origin: ['*'],
      credentials: true,
    })
  );

  app.use(logger('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  require('../passport')(app);

};
