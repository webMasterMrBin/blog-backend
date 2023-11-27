const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, '../public'), {
  setHeaders: (res, path, stat) => {
    res.set('cache-control', `must-revalidate, max-age=${20}`);
  }
}));

const server = https
  .createServer(
    {
      key: fs.readFileSync(path.join(__dirname, '../ca/www.songlibin.xyz.key')),
      cert: fs.readFileSync(path.join(__dirname, '../ca/www.songlibin.xyz.pem')),
    },
    app,
  )

server.listen(port, () => {
  console.log('server is running on port 4000')
})