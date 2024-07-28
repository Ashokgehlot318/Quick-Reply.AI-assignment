import React from 'react';
import MediaLibrary from './MediaLibrary';
import './MediaLibrary.css';

// Default media files for demonstration
const defaultMedia = [
  { name: 'Sample Image 1.jpg', type: 'image', url: 'https://via.placeholder.com/150' },
  { name: 'Sample Video 1.mp4', type: 'video', url: 'https://via.placeholder.com/150' },
];

// Storybook Template
const Template = (args) => <MediaLibrary {...args} />;

// Default state: with media
export const DefaultState = Template.bind({});
DefaultState.args = {
  media: defaultMedia,
};

// Empty state: no media
export const EmptyState = Template.bind({});
EmptyState.args = {
  media: [],
};

export default {
  title: 'Components/MediaLibrary',
  component: MediaLibrary,
};
