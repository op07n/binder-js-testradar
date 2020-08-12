const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;

//route
app.get('/', cors(), (req, res, next) => {
  res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' })
})

//start
const server = app.listen(port, () => {
  console.log('Listening on port %s', server.address().port)
})
