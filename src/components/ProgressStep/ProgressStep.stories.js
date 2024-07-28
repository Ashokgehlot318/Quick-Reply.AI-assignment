import React from 'react';
import ProgressStep from './ProgressStep';

export default {
  title: 'Components/ProgressStep',
  component: ProgressStep,
  argTypes: {
    layout: {
      control: { type: 'radio', options: ['horizontal', 'vertical'] },
    },
    controlType: {
      control: { type: 'radio', options: ['line', 'number'] },
    },
  },
};

const Template = (args) => <ProgressStep {...args} />;

export const HorizontalLine = Template.bind({});
HorizontalLine.args = {
  steps: [
    { name: 'Step 1', description: 'Description for step 1' },
    { name: 'Step 2', description: 'Description for step 2' },
    { name: 'Step 3', description: 'Description for step 3' },
  ],
  currentStep: 1,
  layout: 'horizontal',
  controlType: 'line',
};

export const HorizontalNumber = Template.bind({});
HorizontalNumber.args = {
  steps: [
    { name: 'Step 1', description: 'Description for step 1' },
    { name: 'Step 2', description: 'Description for step 2' },
    { name: 'Step 3', description: 'Description for step 3' },
  ],
  currentStep: 1,
  layout: 'horizontal',
  controlType: 'number',
};

export const VerticalLine = Template.bind({});
VerticalLine.args = {
  steps: [
    { name: 'Step 1', description: 'Description for step 1' },
    { name: 'Step 2', description: 'Description for step 2' },
    { name: 'Step 3', description: 'Description for step 3' },
  ],
  currentStep: 1,
  layout: 'vertical',
  controlType: 'line',
};

export const VerticalNumber = Template.bind({});
VerticalNumber.args = {
  steps: [
    { name: 'Step 1', description: 'Description for step 1' },
    { name: 'Step 2', description: 'Description for step 2' },
    { name: 'Step 3', description: 'Description for step 3' },
  ],
  currentStep: 1,
  layout: 'vertical',
  controlType: 'number',
};
