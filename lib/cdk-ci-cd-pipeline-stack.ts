import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// import {CdkPipelineStage} from './pipeline-stage';

export class CdkCiCdPipelineStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    

    

    // const deploy = new CdkPipelineStage(this, 'Deploy');
    // const deployStage = pipeline.addStage(deploy);

    


  }
}
