// --------------------------------------------------------------------------------------------------------------------
//
// dynamodb-config.js - config for Amazon DynamoDB
//
// Copyright (c) 2012 AppsAttic Ltd - http://www.appsattic.com/
// Written by Andrew Chilton <chilts@appsattic.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

var _ = require('underscore');

var required      = { required : true,  type : 'param'       };
var optional      = { required : false, type : 'param'       };
var requiredArray = { required : true,  type : 'param-array' };
var optionalArray = { required : false, type : 'param-array' };
var requiredData  = { required : true,  type : 'param-data'  };
var optionalData  = { required : false, type : 'param-data'  };

// --------------------------------------------------------------------------------------------------------------------

module.exports = {

    AuthorizeClusterSecurityGroupIngress : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html',
        defaults : {
            Action : 'AuthorizeClusterSecurityGroupIngress',
        },
        args : {
            Action                   : required,
            ClusterSecurityGroupName : required,
            CIDRIP                   : optional,
            EC2SecurityGroupName     : optional,
            EC2SecurityGroupOwnerId  : optional,
        },
    },

    CopyClusterSnapshot : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html',
        defaults : {
            Action : 'CopyClusterSnapshot',
        },
        args : {
            Action                   : required,
            SourceSnapshotIdentifier : required,
            TargetSnapshotIdentifier : required,
        },
    },

    CreateCluster : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCluster.html',
        defaults : {
            Action : 'CreateCluster',
        },
        args : {
            Action : required,
            ClusterIdentifier : required,
            MasterUserPassword : required,
            MasterUsername : required,
            NodeType : required,
            AllowVersionUpgrade : optional,
            AutomatedSnapshotRetentionPeriod : optional,
            AvailabilityZone : optional,
            ClusterParameterGroupName : optional,
            ClusterSecurityGroups : optionalArray,
            ClusterSubnetGroupName : optional,
            ClusterType : optional,
            ClusterVersion : optional,
            DBName : optional,
            Encrypted : optional,
            NumberOfNodes : optional,
            Port : optional,
            PreferredMaintenanceWindow : optional,
            PubliclyAccessible : optional,
            VpcSecurityGroupIds : optionalArray,
        },
    },

    CreateClusterParameterGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterParameterGroup.html',
        defaults : {
            Action : 'CreateClusterParameterGroup',
        },
        args : {
            Action : required,
            Description : required,
            ParameterGroupFamily : required,
            ParameterGroupName : required,
        },
    },

    CreateClusterSecurityGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSecurityGroup.html',
        defaults : {
            Action : 'CreateClusterSecurityGroup',
        },
        args : {
            Action : required,
            ClusterSecurityGroupName : required,
            Description : required,
        },
    },

    CreateClusterSnapshot : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html',
        defaults : {
            Action : 'CreateClusterSnapshot',
        },
        args : {
            Action : required,
            ClusterIdentifier : required,
            SnapshotIdentifier : required,
        },
    },

    CreateClusterSubnetGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSubnetGroup.html',
        defaults : {
            Action : 'CreateClusterSubnetGroup',
        },
        args : {
            Action : required,
            ClusterSubnetGroupName : required,
            Description : required,
            SubnetIds : requiredArray,
        },
    },

    DeleteCluster : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCluster.html',
        defaults : {
            Action : 'DeleteCluster',
        },
        args : {
            Action : required,
            ClusterIdentifier : required,
            FinalClusterSnapshotIdentifier : optional,
            SkipFinalClusterSnapshot : optional,
        },
    },

    DeleteClusterParameterGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterParameterGroup.html',
        defaults : {
            Action : 'DeleteClusterParameterGroup',
        },
        args : {
            Action : required,
            ParameterGroupName : required,
        },
    },

    DeleteClusterSecurityGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSecurityGroup.html',
        defaults : {
            Action : 'DeleteClusterSecurityGroup',
        },
        args : {
            Action : required,
            ClusterSecurityGroupName : required,
        },
    },

    DeleteClusterSnapshot : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSnapshot.html',
        defaults : {
            Action : 'DeleteClusterSnapshot',
        },
        args : {
            Action : required,
            SnapshotIdentifier : required,
        },
    },

    DeleteClusterSubnetGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSubnetGroup.html',
        defaults : {
            Action : 'DeleteClusterSubnetGroup',
        },
        args : {
            Action : required,
            ClusterSubnetGroupName : required,
        },
    },

    DescribeClusterParameterGroups : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameterGroups.html',
        defaults : {
            Action : 'DescribeClusterParameterGroups',
        },
        args : {
            Action : required,
            Marker : optional,
            MaxRecords : optional,
            ParameterGroupName : optional,
        },
    },

    DescribeClusterParameters : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameters.html',
        defaults : {
            Action : 'DescribeClusterParameters',
        },
        args : {
            Action : required,
            ParameterGroupName : required,
            Marker : optional,
            MaxRecords : optional,
            Source : optional,
        },
    },

    DescribeClusterSecurityGroups : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSecurityGroups.html',
        defaults : {
            Action : 'DescribeClusterSecurityGroups',
        },
        args : {
            Action : required,
            ClusterSecurityGroupName : optional,
            Marker : optional,
            MaxRecords : optional,
        },
    },

    DescribeClusterSnapshots : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSnapshots.html',
        defaults : {
            Action : 'DescribeClusterSnapshots',
        },
        args : {
            Action : required,
            ClusterIdentifier : optional,
            EndTime : optional,
            Marker : optional,
            MaxRecords : optional,
            SnapshotIdentifier : optional,
            SnapshotType : optional,
            StartTime : optional,
        },
    },

    DescribeClusterSubnetGroups : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSubnetGroups.html',
        defaults : {
            Action : 'DescribeClusterSubnetGroups',
        },
        args : {
            Action : required,
            ClusterSubnetGroupName : optional,
            Marker : optional,
            MaxRecords : optional,
        },
    },

    DescribeClusterVersions : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterVersions.html',
        defaults : {
            Action : 'DescribeClusterVersions',
        },
        args : {
            Action : required,
            ClusterParameterGroupFamily : optional,
            ClusterVersion : optional,
            Marker : optional,
            MaxRecords : optional,
        },
    },

    DescribeClusters : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusters.html',
        defaults : {
            Action : 'DescribeClusters'
        },
        args : {
            Action            : required,
            ClusterIdentifier : optional,
            Marker            : optional,
            MaxRecords        : optional,
        },
    },

    DescribeDefaultClusterParameters : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDefaultClusterParameters.html',
        defaults : {
            Action : 'DescribeDefaultClusterParameters',
        },
        args : {
            Action : required,
            ParameterGroupFamily : required,
            Marker : optional,
            MaxRecords : optional,
        },
    },

    DescribeEvents : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEvents.html',
        defaults : {
            Action : 'DescribeEvents',
        },
        args : {
            Action : required,
            Duration : optional,
            EndTime : optional,
            Marker : optional,
            MaxRecords : optional,
            SourceIdentifier : optional,
        },
    },

    DescribeOrderableClusterOptions : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeOrderableClusterOptions.html',
        defaults : {
            Action : 'DescribeOrderableClusterOptions',
        },
        args : {
            Action : required,
            ClusterVersion : optional,
            Marker : optional,
            MaxRecords : optional,
            NodeType : optional,
        },
    },

    DescribeReservedNodeOfferings : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeOfferings.html',
        defaults : {
            Action : 'DescribeReservedNodeOfferings',
        },
        args : {
            Action : required,
            Marker : optional,
            MaxRecords : optional,
            ReservedNodeOfferingId : optional,
        },
    },

    DescribeReservedNodes : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodes.html',
        defaults : {
            Action : 'DescribeReservedNodes',
        },
        args : {
            Action : required,
            Marker : optional,
            MaxRecords : optional,
            ReservedNodeId : optional,
        },
    },

    DescribeResize : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeResize.html',
        defaults : {
            Action : 'DescribeResize',
        },
        args : {
            Action : required,
            ClusterIdentifier : required,
        },
    },

    ModifyCluster : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCluster.html',
        defaults : {
            Action : 'ModifyCluster',
        },
        args : {
            Action : required,
            ClusterIdentifier : required,
            AllowVersionUpgrade : optional,
            AutomatedSnapshotRetentionPeriod : optional,
            ClusterParameterGroupName : optional,
            ClusterSecurityGroups : optionalArray,
            ClusterType : optional,
            ClusterVersion : optional,
            MasterUserPassword : optional,
            NodeType : optional,
            NumberOfNodes : optional,
            PreferredMaintenanceWindow : optional,
            VpcSecurityGroupIds : optionalArray,
        },
    },

    ModifyClusterParameterGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterParameterGroup.html',
        defaults : {
            Action : 'ModifyClusterParameterGroup',
        },
        args : {
            Action : required,
            ParameterGroupName : required,
            Parameters : requiredArray,
        },
    },

    ModifyClusterSubnetGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSubnetGroup.html',
        defaults : {
            Action : 'ModifyClusterSubnetGroup',
        },
        args : {
            Action : required,
            ClusterSubnetGroupName : required,
            SubnetIds : requiredArray,
            Description : optional,
        },
    },

    PurchaseReservedNodeOffering : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_PurchaseReservedNodeOffering.html',
        defaults : {
            Action : 'PurchaseReservedNodeOffering',
        },
        args : {
            Action : required,
            ReservedNodeOfferingId : required,
            NodeCount : optional,
        },
    },

    RebootCluster : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html',
        defaults : {
            Action : 'RebootCluster',
        },
        args : {
            Action : required,
            ClusterIdentifier : required,
        },
    },

    ResetClusterParameterGroup : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_ResetClusterParameterGroup.html',
        defaults : {
            Action : 'ResetClusterParameterGroup',
        },
        args : {
            Action : required,
            ParameterGroupName : required,
            Parameters : optionalArray,
            ResetAllParameters : optional,
        },
    },

    RestoreFromClusterSnapshot : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreFromClusterSnapshot.html',
        defaults : {
            Action : 'RestoreFromClusterSnapshot',
        },
        args : {
            Action : required,
            ClusterIdentifier : required,
            SnapshotIdentifier : required,
            AllowVersionUpgrade : optional,
            AvailabilityZone : optional,
            ClusterSubnetGroupName : optional,
            Port : optional,
            PubliclyAccessible : optional,
        },
    },

    RevokeClusterSecurityGroupIngress : {
        url : 'http://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html',
        defaults : {
            Action : 'RevokeClusterSecurityGroupIngress',
        },
        args : {
            Action : required,
            ClusterSecurityGroupName : required,
            CIDRIP : optional,
            EC2SecurityGroupName : optional,
            EC2SecurityGroupOwnerId : optional,
        },
    },

};

// --------------------------------------------------------------------------------------------------------------------
