import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';

const meta = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'padded'
  },

  tags: ['autodocs'],

  argTypes: {},

  args: {}
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: 'Failed to get data'
  }
};
