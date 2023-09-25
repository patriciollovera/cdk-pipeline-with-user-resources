import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { userstack } from './stacks/user.resources';
import {CodeBuildStep, CodePipeline, CodePipelineSource} from "aws-cdk-lib/pipelines";

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

        // // The basic pipeline declaration. This sets the initial structure
        // of our pipeline
        const pipeline = new CodePipeline(this, 'Pipeline', {
          pipelineName: 'TrainingPipeline',
          synth: new CodeBuildStep('SynthStep', {
                  input: CodePipelineSource.codeCommit(repo, 'master'),
                  installCommands: [
                      'npm install -g aws-cdk'
                  ],
                  commands: [
                      'npm ci',
                      'npm run build',
                      'npx cdk synth'
                  ]
              }
          )
        });


    }
}