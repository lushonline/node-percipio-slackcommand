const debugFactory = require('debug');

const app = require('./app');

const debug = debugFactory('app:start');

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  debug(`Express is running on port ${server.address().port}`);
});
