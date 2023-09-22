import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodeBuildStep, CodePipeline, CodePipelineSource} from "aws-cdk-lib/pipelines";
import { userstack } from './stacks/user.resources';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import {CdkPipelineStage} from './pipeline-stage';

export class CdkCiCdPipelineStack extends cdk.Stack {
  
  userResources: userstack;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.userResources = new userstack(this, 'userResources');

    // Creates a CodeCommit repository called 'BasicStack'
    const repo = new codecommit.Repository(this, 'BasicStack', {
      repositoryName: "BasicStack"
    });

    // The basic pipeline declaration. This sets the initial structure
    // of our pipeline
    const pipeline = new CodePipeline(this, 'sPipeline', {
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

    const deploy = new CdkPipelineStage(this, 'Deploy');
    const deployStage = pipeline.addStage(deploy);

    new cdk.CfnOutput(this, 'repoHttpUrl', {value: repo.repositoryCloneUrlHttp});


  }
}
