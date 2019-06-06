const express = require('express');
const bodyParser = require('body-parser');

const slack = require('./routes/slackRouter');
const verifySlackSignature = require('./middleware/slack/verifySlackSignature');

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;

if (!slackSigningSecret) {
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
