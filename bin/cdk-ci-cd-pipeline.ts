#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCiCdPipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new CdkCiCdPipelineStack(app, 'CdkCiCdPipelineStack', {});