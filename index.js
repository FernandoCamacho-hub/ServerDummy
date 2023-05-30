const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/data.json') {

    //add cors
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Read the JSON file
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
