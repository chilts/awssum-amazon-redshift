// --------------------------------------------------------------------------------------------------------------------
//
// redshift.js - class for AWS DynamoDB
//
// Copyright (c) 2012 AppsAttic Ltd - http://www.appsattic.com/
// Written by Andrew Chilton <chilts@appsattic.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------
// requires

// built-ins
var util = require('util');
var crypto = require('crypto');

// dependencies
var _ = require('underscore');

// our own
var awssum = require('awssum');
var amazon = require('awssum-amazon');
var operations = require('./config.js');

// --------------------------------------------------------------------------------------------------------------------
// package variables

var MARK = 'redshift: ';

// From: http://docs.amazonwebservices.com/general/latest/gr/rande.html
var endPoint = {};
endPoint[amazon.US_EAST_1]      = "redshift.us-east-1.amazonaws.com";
endPoint[amazon.US_WEST_1]      = "redshift.us-west-1.amazonaws.com";
endPoint[amazon.US_WEST_2]      = "redshift.us-west-2.amazonaws.com";
endPoint[amazon.EU_WEST_1]      = "redshift.eu-west-1.amazonaws.com";
endPoint[amazon.AP_SOUTHEAST_1] = "redshift.ap-southeast-1.amazonaws.com";
endPoint[amazon.AP_SOUTHEAST_2] = "redshift.ap-southeast-2.amazonaws.com";
endPoint[amazon.AP_NORTHEAST_1] = "redshift.ap-northeast-1.amazonaws.com";
endPoint[amazon.SA_EAST_1]      = "redshift.sa-east-1.amazonaws.com";

var version = '2012-12-01';

// --------------------------------------------------------------------------------------------------------------------
// constructor

var Redshift = function(opts) {
    var self = this;

    // call the superclass for initialisation
    Redshift.super_.call(this, opts);

    // check the region is valid
    if ( ! endPoint[opts.region] ) {
        throw MARK + "invalid region '" + opts.region + "'";
    }

    return self;
};

// inherit from Amazon
util.inherits(Redshift, amazon.AmazonSignatureV4);

// --------------------------------------------------------------------------------------------------------------------
// methods we need to implement from amazon.js

Redshift.prototype.method = function() {
    return 'POST';
};

Redshift.prototype.host = function(args) {
    return endPoint[this.region()];
};

Redshift.prototype.version = function() {
    return version;
};

Redshift.prototype.extractBody = function() {
    // Redshift always returns XML
    return 'xml';
};

// ----------------------------------------------------------------------------
// AWS Signature v4

Redshift.prototype.scope = function() {
    return 'redshift';
};

Redshift.prototype.serviceName = function() {
    return 'Redshift';
};

Redshift.prototype.needsTarget = function() {
    return false;
};

// --------------------------------------------------------------------------------------------------------------------
// operations on the service

_.each(operations, function(operation, operationName) {
    Redshift.prototype[operationName] = awssum.makeOperation(operation);
});

// --------------------------------------------------------------------------------------------------------------------
// exports

// endpoints
exports.US_EAST_1      = amazon.US_EAST_1;
exports.US_WEST_1      = amazon.US_WEST_1;
exports.US_WEST_2      = amazon.US_WEST_2;
exports.EU_WEST_1      = amazon.EU_WEST_1;
exports.AP_SOUTHEAST_1 = amazon.AP_SOUTHEAST_1;
exports.AP_SOUTHEAST_2 = amazon.AP_SOUTHEAST_2;
exports.AP_NORTHEAST_1 = amazon.AP_NORTHEAST_1;
exports.SA_EAST_1      = amazon.SA_EAST_1;
// exports.US_GOV_WEST    = amazon.US_GOV_WEST;

exports.Redshift = Redshift;

// --------------------------------------------------------------------------------------------------------------------
