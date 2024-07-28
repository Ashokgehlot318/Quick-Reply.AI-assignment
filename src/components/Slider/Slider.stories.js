import React from 'react';
import Slider from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: { type: 'radio', options: ['Continuous', 'Discreet'] },
    },
    subtype: {
      control: { type: 'radio', options: ['Single', 'Range'] },
    },
    steps: {
      control: { type: 'number', min: 1, max: 10 },
    },
    handleSize: {
      control: { type: 'radio', options: ['Size_24', 'Size_32'] },
    },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Continuous',
  subtype: 'Single',
  handleSize: 'Size_24',
};

export const DiscreetSlider = Template.bind({});
DiscreetSlider.args = {
  type: 'Discreet',
  subtype: 'Range',
  steps: 5,
  handleSize: 'Size_32',
};
