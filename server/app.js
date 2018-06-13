const path = require('path');
const express = require('express');
const helmet = require('helmet');

const expressStaticGzip = require('express-static-gzip');

module.exports = ({ srcFolder }) => {
  const app = express();

  app.use(helmet());

  app.use('/', expressStaticGzip(path.join(__dirname, srcFolder)));

  return app;
};
