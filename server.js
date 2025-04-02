const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/installation', (req, res) => {
  res.render('installation');
});

app.get('/tutorial', (req, res) => {
  res.render('tutorial');
});

app.listen(port, () => {
  console.log(`MCP Tutorial website running at http://localhost:${port}`);
});