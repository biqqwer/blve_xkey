const genId1 = require('fkrz_xid');
const genId2 = require('mwrd_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|tCDq1Qrg5m|' + genId2()).digest('base64');
}


module.exports = generateKey;
