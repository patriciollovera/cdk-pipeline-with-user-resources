import { CdkCiCdPipelineStack } from './cdk-ci-cd-pipeline-stack';
import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class TrainingPipelineStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        new CdkCiCdPipelineStack(this, 'WebService');
    }
}