const config = require('config');
const mongoose = require('./libs/mongoose');

const app = require('./app');

app.listen(config.get('port'));
