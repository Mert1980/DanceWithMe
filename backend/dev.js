const express = require('express');
const devServer = express();
const api = require('./src/index');
const path = require('path');
var cors = require('cors')

require('dotenv').config({path: path.resolve(process.cwd(), 'backend','config', '.env'), debug: true});

devServer.use((req, res, next) => {
  console.log(req.method + ': ' + req.path);
  next();
});
devServer.use(cors())
devServer.use('/api', api);


devServer.get('/', (req, res) => {
  res.send('react frontend');
});

const port = process.env.PORT

devServer.listen(port, () => console.log(`listening at http://localhost:${port}`));