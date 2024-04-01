import type { Meta, StoryObj } from '@storybook/react';

import SortSelect from '../components/SortSelect/SortSelect';

const meta: Meta<typeof SortSelect> = {
  component: SortSelect,
};

export default meta;
type Story = StoryObj<typeof SortSelect>;

export const Primary: Story = {
  render: () => <SortSelect />,
};
