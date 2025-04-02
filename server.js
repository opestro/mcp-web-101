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
  res.render('index', {
    title: 'Home',
    canonicalUrl: 'https://mcp.cscclub.space/',
    currentPath: req.path,
    description: 'Learn how to build MCP servers with our comprehensive guide to implementing the Model Context Protocol effectively.'
  });
});

app.get('/installation', (req, res) => {
  res.render('installation', {
    title: 'Installation Guide',
    canonicalUrl: 'https://mcp.cscclub.space/installation',
    currentPath: req.path,
    description: 'Step-by-step instructions for installing and setting up your MCP server environment.'
  });
});

app.get('/tutorial', (req, res) => {
  res.render('tutorial', {
    title: 'MCP Server Tutorial',
    canonicalUrl: 'https://mcp.cscclub.space/tutorial',
    currentPath: req.path,
    description: 'Comprehensive tutorial for building MCP servers and implementing the Model Context Protocol.'
  });
});

app.listen(port, () => {
  console.log(`MCP Tutorial website running at http://localhost:${port}`);
});