const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, '../public'), {
  setHeaders: (res, path, stat) => {
    res.set('cache-control', `must-revalidate, max-age=${20}`);
  }
}));

app.listen(port, () => {
  console.log(` server start in ${4000}`);
})

