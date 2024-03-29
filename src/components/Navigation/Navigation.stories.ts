import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './Navigation';

const meta = {
  title: 'Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  argTypes: {},

  args: {}
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
