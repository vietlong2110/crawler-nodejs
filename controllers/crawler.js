var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function (req, res) {
	// var URLFrontier = [];
	// URLFrontier.push({urL: req.query.url, level: 0});
	var crawlModule = require('../modules/crawler');
	crawlModule.fetch(req.query.url, function (body) {
		crawlerModule.parse(body, function (urls) {
			res.render('index', {title: 'Crawler', result: 'urls'});
		});
	});
});

module.exports = router;