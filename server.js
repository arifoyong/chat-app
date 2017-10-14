// load environment variables
// require('dotenv').config();

// configure dependencies
const express = 		require('express'),
	app = 				express(),
	port = 				process.env.PORT || 8080,
	expressLayouts = 	require('express-ejs-layouts');
	
	// mongoose = 			require('mongoose'),
	// bodyParser = 		require('body-parser'),
	// session = 			require('express-session'),
	// cookieParser = 		require('cookie-parser'),
	// flash = 			require('connect-flash'),
	// expressValidator = require('express-validator') ;

// configure application =======================
// set session & cookie parser
// app.use(cookieParser());
// app.use(session({
// 	secret: process.env.SECRET,
// 	cookie: { maxAge: 60000 },
// 	resave: false,			//forces the session to be saved back to store	
// 	saveUninitialized: false	//dont save unmodified
// }))
// app.use(flash());


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