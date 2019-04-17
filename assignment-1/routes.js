const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Yo, hello.</title></head>');
    res.write(
      '<body><h1>Yo, hello.</h1><br /><h3>Add a user</h3><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add user</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log('Message: ', message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>User list</title><head>');
  res.write('<body>');
  res.write('<h1>User list</h1>');
  res.write('<ul>');
  res.write('<li>User one</li>');
  res.write('<li>User two</li>');
  res.write('<li>User three</li>');
  res.write('<li>Barack Obama</li>');
  res.write('<li>Trump of Trumpton!</li>');
  res.write('</ul>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';