var fetch = function (url, callback) {
	var request = require('request');
	request(url, function (err, res, body) {
		if (!err && res.statusCode == 200)
			callback(body);
		else callback(null);
	});
};
module.exports.fetch = fetch;

var parseLinks = function (body, callback) {
	var links = [];
	var checkedURLs = [];
	var reg = /href\s*=\s*[\'\"]?([+:%\/\?~=&;\\\(\),._a-zA-Z0-9-]*)(#[.a-zA-Z0-9-]*)?[\'\" ]?(\s*rel\s*=\s*[\'\"]?(nofollow)[\'\"]?)?/ig;
	reg = reg.exec(body);
	for (i in reg)
		if (checkedURLs[reg[i][1]] != 1 && reg[i][4] == null) {
			links.push(reg[i][1]);
			checkedURLs[reg[i][1]] = 1;
		}
	callback(links);
	
};
module.exports.parseLinks = parseLinks;