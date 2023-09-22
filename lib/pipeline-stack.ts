import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { userstack } from './stacks/user.resources';

export class CdkCiCdPipelineStack extends cdk.Stack {

    userResources: userstack;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.userResources = new userstack(this, 'userResources');

        // Creates a CodeCommit repository called 'BasicStack'
        const repo = new codecommit.Repository(this, 'BasicStack', {
        repositoryName: "BasicStack"
        });
        
        new cdk.CfnOutput(this, 'repoHttpUrl', {value: repo.repositoryCloneUrlHttp});


    }
}