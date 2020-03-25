// this file allows you to develop/test your api without the frontend

const express = require('express');
const devServer = express();
const api = require('./server.js');

devServer.use((req, res, next) => {
  console.log(req.method + ': ' + req.path);
  next();
});

devServer.use('/api', api);

devServer.get('/', (req, res) => {
  res.send('react frontend');
});


const port = 5000;
devServer.listen(port, () => console.log(`listening at http://localhost:${port}`));
