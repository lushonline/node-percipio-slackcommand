const express = require('express');
const bodyParser = require('body-parser');

const debugFactory = require('debug');

const slack = require('./routes/slackRouter');
const verifySlackSignature = require('./middleware/slack/verifySlackSignature');

const debug = debugFactory('app:app');

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;

if (!slackSigningSecret) {
  debug('SLACK_SIGNING_SECRET environment variable is not defined');
  const error = new Error('SLACK_SIGNING_SECRET environment variable is not defined');
  throw error;
}

const app = express();

// Static files served from public
app.use(express.static('public'));

// parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/slack', verifySlackSignature(slackSigningSecret), slack);

module.exports = app;
