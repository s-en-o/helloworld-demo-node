const http = require('http');
const PORT = 7070;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`
          ##         .
    ## ## ##        ==
 ## ## ## ## ##    ===
/""""""""""""""""\\___/ ===
{                       /  ===-
\\______ O           __/
 \\    \\         __/
  \\____\\_______/


Hello from Docker!
`);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server started, running on port ${PORT}`);
});
