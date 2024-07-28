// Toast.stories.jsx
import React from 'react';
import Toast from './Toast';
import { CheckCircle, Warning, Info } from 'phosphor-react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['information', 'warning', 'alert', 'success'],
      },
      defaultValue: 'information',
    },
    iconVisible: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    swapIcon: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    divider: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    action: {
      action: 'actionClicked',
    },
    closeAction: {
      action: 'closeClicked',
    },
    closeActionEnabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    position: {
      control: {
        type: 'select',
        options: ['mobile', 'desktop'],
      },
      defaultValue: 'desktop',
    },
    editText: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
  },
};

const Template = (args) => {
  const icons = {
    information: <Info />,
    warning: <Warning />,
    alert: <Warning />,
    success: <CheckCircle />,
  };

  return (
    <Toast
      {...args}
      icon={icons[args.type]}
    />
  );
};

// Custom Toast story with dynamic controls
export const CustomToast = Template.bind({});
CustomToast.args = {
  message: 'This is a Toast message.',
  type: 'information',
  iconVisible: true,
  swapIcon: false,
  divider: false,
  action: action('actionClicked'),
  closeAction: action('closeClicked'),
  closeActionEnabled: false,
  position: 'desktop',
  editText: '',
};
