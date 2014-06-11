NOTE: AwsSum is now deprecated. Please use [aws-sdk](https://www.npmjs.org/package/aws-sdk) instead.

# awssum-amazon-redshift #

This is an ```AwsSum``` plugin!

You'll need to add [awssum-amazon-redshift](https://github.com/awssum/awssum-amazon-redshift/) to your package.json
dependencies. Both [awssum](https://github.com/awssum/awssum/) and
[awssum-amazon](https://github.com/awssum/awssum-amazon/) are pulled in as peer dependencies.

## Example ##

Describe Clusters:

```
var fmt = require('fmt');
var amazonRedshift = require('awssum-amazon-redshift');

var redshift = new amazonRedshift.RedShift({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonRedshift.US_EAST_1
});

redshift.DescribeClusters(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

## Other Examples ##

See here for more examples : https://github.com/awssum/awssum-amazon-redshift/tree/master/examples

Every file is of the format ``<operation>-<name>.js```` where ```<name>``` is related to what that example is showing.

# Author #

Written by [Andrew Chilton](http://chilts.org/) - [Blog](http://chilts.org/blog/) -
[Twitter](https://twitter.com/andychilton).

# License #

* [Copyright 2011-2013 Apps Attic Ltd.  All rights reserved.](http://appsattic.mit-license.org/2011/)
* [Copyright 2013 Andrew Chilton.  All rights reserved.](http://chilts.mit-license.org/2013/)

(Ends)

(Ends)
