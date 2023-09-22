import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import {CodeBuildStep, CodePipeline, CodePipelineSource} from "aws-cdk-lib/pipelines";
// import {CdkPipelineStage} from './pipeline-stage';

export class CdkCiCdPipelineStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    

    // // The basic pipeline declaration. This sets the initial structure
    // // of our pipeline
    // const pipeline = new CodePipeline(this, 'Pipeline', {
    //   pipelineName: 'TrainingPipeline',
    //   synth: new CodeBuildStep('SynthStep', {
    //           input: CodePipelineSource.codeCommit(repo, 'master'),
    //           installCommands: [
    //               'npm install -g aws-cdk'
    //           ],
    //           commands: [
    //               'npm ci',
    //               'npm run build',
    //               'npx cdk synth'
    //           ]
    //       }
    //   )
    // });

    // const deploy = new CdkPipelineStage(this, 'Deploy');
    // const deployStage = pipeline.addStage(deploy);

    


  }
}
