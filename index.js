const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
  // create (POST request, path and callback function)
  app.post('/', function(req, res) {
    res.send("Data can be created using this method (POST).");
    console.log("POST was called.");
  });
  // read (GET request, path and callback function)
  app.get('/', function(req, res) {
    res.setHeader('status', '200 (OK)');
    res.send("GET is used to read information.");
    console.log("GET was called.");
  });
  // update (PUT request, path and callback function)
  app.put('/', function(req, res) {
    res.send("Use this (PUT) to update information.");
    console.log("PUT was called.");
  });
  // delete (DELETE request, path and callback function)
  app.delete('/', function(req, res) {
    res.setHeader('error', 'This does not compute!');
    res.send("Only use DELETE to remove the specified target.");
    console.log("DELETE was called");
  });

  // create server
  app.listen(3000, () => {
    console.log('Server Started');
  });
//}
