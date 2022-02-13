const express = require('express'),
	router = express.Router();

router.get('/', (req, res, next) => {
	var data = {
		title: 'Hello!!!',
		content: '※何か書いて送信してください：'
	};
	res.render('hello', data);
});

router.post('/post', (req, res, next) => {
	var msg = req.body['message'];
	var data = {
		title: 'Hello!!!',
		content: 'You sended [ ' + msg + '] .'  
	};
	res.render('hello', data);
});


module.exports = router;
