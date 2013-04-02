var dump = require('./dump.js');
var amazonRedshift = require('../awssum-amazon-redshift');

var redshift = new amazonRedshift.Redshift({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonRedshift.US_EAST_1
});

redshift.DescribeClusters(function(err, data) {
    dump(err, 'err');
    dump(data, 'data');
});
