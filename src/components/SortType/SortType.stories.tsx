import { SelectChangeEvent } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import SortType from './SortType';

const meta: Meta<typeof SortType> = {
  component: SortType,
  title: 'SortType',
};

export default meta;

export const DefaultSortField: StoryFn = (args) => (
  <SortType
    label='Sort Field'
    value='name'
    options={[
      { label: 'Name (Alphabetical)', value: 'name' },
      { label: 'Post Count', value: 'count' },
    ]}
    // eslint-disable-next-line no-unused-vars
    onChange={function (_event: SelectChangeEvent<string> | unknown): void {}}
    {...args}
  />
);
DefaultSortField.args = {
  label: 'Sort Field',
  onChange: (event: SelectChangeEvent<string>) =>
    // eslint-disable-next-line no-console
    console.log(event.target.value),
  options: [
    { label: 'Name (Alphabetical)', value: 'name' },
    { label: 'Post Count', value: 'count' },
  ],
  value: 'name',
};

export const SortByNameAscending = () => (
  <SortType
    label='Sort by Name'
    value='name'
    options={[
      { label: 'Name (Alphabetical)', value: 'name' },
      { label: 'Post Count', value: 'count' },
    ]}
    onChange={(event: SelectChangeEvent<string>) => {
      // eslint-disable-next-line no-console
      console.log(event.target.value);
    }}
  />
);

export const SortByPostCountDescending = () => (
  <SortType
    label='Sort by Post Count'
    value='count'
    options={[
      { label: 'Name (Alphabetical)', value: 'name' },
      { label: 'Post Count', value: 'count' },
    ]}
    onChange={(event: SelectChangeEvent<string>) => {
      // eslint-disable-next-line no-console
      console.log(event.target.value);
    }}
  />
);

export const SortByCustomOption = () => (
  <SortType
    label='Sort by Custom Option'
    value='custom'
    options={[
      { label: 'Custom Option', value: 'custom' },
      { label: 'Name (Alphabetical)', value: 'name' },
      { label: 'Post Count', value: 'count' },
    ]}
    onChange={(event: SelectChangeEvent<string>) => {
      // eslint-disable-next-line no-console
      console.log(event.target.value);
    }}
  />
);
