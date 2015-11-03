var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function (req, res) {
	res.render('index', {title: 'Crawler', result: ''});
});

router.get('/crawl', function (req, res) {
	// var URLFrontier = [];
	// URLFrontier.push({urL: req.query.url, level: 0});
	var crawlModule = require('../modules/crawler');
	crawlModule.fetch(req.query.url, function (body) {
		crawlModule.parseLinks(req.query.url, body, function (urls) {
			console.log(urls);
			return res.json(urls);
		});
	});
});

module.exports = router;