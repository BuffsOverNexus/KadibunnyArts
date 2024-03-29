// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/kadibunnyarts'));
// Start the app by listening on the default
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/kadibunnyarts/'}
);
});
// Heroku port
app.listen(process.env.PORT || 8080);
