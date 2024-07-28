import React, { useState } from 'react';
import SegmentControl from './SegmentControl'; // Adjust the path as needed

export default {
  title: 'Components/SegmentControl',
  component: SegmentControl,
};

const Template = (args) => {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex);

  const handleChange = (index) => {
    setActiveIndex(index);
    if (args.onChange) args.onChange(index);
  };

  return <SegmentControl {...args} activeIndex={activeIndex} onChange={handleChange} />;
};


// Custom Number of Labels Visible
export const CustomVisibleLabels = Template.bind({});
CustomVisibleLabels.args = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
  activeIndex: 2,
  visibleLabelsCount: 4,
  activeState: true,
};
