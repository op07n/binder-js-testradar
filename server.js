const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;


app.options('*', cors())


//app.use(cors(), express.static( __dirname + '/lib'));
//app.use(cors(), express.static( __dirname + '/assets'));

//app.use( express.static( 'lib'));
//app.use( express.static( 'assets'));


app.use("/lib", express.static("./lib"));
app.use("/assets", express.static("./assets"));

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
