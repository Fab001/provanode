const express = require('express');
const app = express();



app.get('/', function(req, res) {
  console.log("BBBBBBBBBBBBBHHHHH u serverin ;)");
  res.send('<html><body><h1>BBBBBBBBBBBBBHHHHH u serverin ;)</h1></body></html>');
});



app.get('/prova', function(req, res) {
  console.log("qualcuno si è connesso a prova");
  res.send('<html><body><h1>BBBBBBBBBBBBBHHHHH</h1></body></html>');
});


let port = process.env.PORT;
if(port == null || port ==""){
	port = 3000;
}

app.listen(port);
