import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const tableHead = [{ name: 'Tags' }, { name: 'Amount' }];

const tableBody = [
  { name: 'React', count: 45345 },
  { name: 'JavaScript', count: 45345 },
  { name: 'TypeScript', count: 45345 }
];

const meta = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  argTypes: {},

  args: { head: tableHead, body: tableBody }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
