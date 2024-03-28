import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Table from './Table';

const meta = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  argTypes: {},

  args: { onClick: fn() }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
