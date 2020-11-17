#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkEcsWorkshopJavascriptStack } = require('../lib/cdk-ecs-workshop-javascript-stack');

const app = new cdk.App();
new CdkEcsWorkshopJavascriptStack(app, 'CdkEcsWorkshopJavascriptStack');
