// configure dependencies
const express = 		require('express'),
	app = 				express(),
	port = 				process.env.PORT || 8081,
	expressLayouts = 	require('express-ejs-layouts');
	
// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as our templating
app.set('view engine', 'ejs');
app.use(expressLayouts);

// set the routes
app.use(require('./app/route'));


// start our server
const server = app.listen(port, () => {
	console.log(`listening on http://localhost: ${port}`);
});

var sockets = require('./app/socket');
sockets.socketServer(app,server);