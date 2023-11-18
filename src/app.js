const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, '../public'), {
  maxAge: 1000 * 60 * 60 * 24 * 3
}));

app.get('/about-me', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about-me/index.html'));
})

app.get('/blog/:id', (req, res) => {
  const { id } = req.params;
  res.sendFile(path.join(__dirname,`../public/blog/${id}/index.html`));
})

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/blog/index.html'));
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, () => {
  console.log(`blog-backend server start in ${4000}`);
})

