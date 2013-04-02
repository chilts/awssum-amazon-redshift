// ----------------------------------------------------------------------------

var tap = require("tap");

var amazonRedshift = require('../../awssum-amazon-redshift');

// ----------------------------------------------------------------------------

var test = tap.test;
var plan = tap.plan;

redshift = new amazonRedshift.Redshift({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'awsAccountId'    : process.env.AWS_ACCOUNT_ID,
    'region'          : amazonRedshift.US_EAST_1,
});

// ----------------------------------------------------------------------------

test("pass a simple test", function (t) {
    t.ok(true, 'pass this test');
    t.end();
});

// ----------------------------------------------------------------------------
