const express = require('express'),
	router = express.Router();

// export router
module.exports = router;


// define routes
// main routes
router.get('/', function(req,res) {
	console.log(__dirname);
	res.render('pages/index');
	// res.sendFile(__dirname + '/index.html');
});