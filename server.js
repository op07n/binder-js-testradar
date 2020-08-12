const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;


// serve files from the public directory
app.use(express.static('public'));


//route
app.get('/test-cors', cors(), (req, res, next) => {
  res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' })
})


app.get('/', cors(), (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});


//start
const server = app.listen(port, () => {
  console.log('Listening on port %s', server.address().port)
})
