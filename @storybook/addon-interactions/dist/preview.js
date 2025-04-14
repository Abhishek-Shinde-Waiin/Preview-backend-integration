'use strict';

var instrumenter = require('@storybook/instrumenter');
require('@storybook/test');

var {step:runStep}=instrumenter.instrument({step:(label,play,context)=>play(context)},{intercept:!0}),parameters={throwPlayFunctionExceptions:!1};

exports.parameters = parameters;
exports.runStep = runStep;
