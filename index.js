var express = require('express');


app.get('/', function(req, res) {
  console.log("BBBBBBBBBBBBBHHHHH u serverin ;)");
});



app.get('/prova', function(req, res) {
  console.log("qualcuno si è connesso a prova");
});


let port = process.env.PORT;
if(port == null || port ==""){
	port = 3000;
}

app.listen(port);
