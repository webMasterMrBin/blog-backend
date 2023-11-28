const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, '../public'), {
  setHeaders: (res, path, stat) => {
    res.set('cache-control', `must-revalidate, max-age=${60 * 60 * 24}`);
  }
}));

app.listen(port, () => {
  console.log('server is running on port 4000')
})