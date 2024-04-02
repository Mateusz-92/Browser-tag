import React from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';

import { Tag } from '../../api/api';
import { SortDirection, useSort } from '../../context/SortContext';
import SortType from '../SortType/SortType';

type Option = {
  label: string;
  value: string;
};

const optionsName: Option[] = [
  { label: 'Name (Alphabetical)', value: 'name' },
  { label: 'Post Count', value: 'count' },
];
const optionsDirection: Option[] = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' },
];

const SortSelect: React.FC = () => {
  const { direction, field, setDirection, setField } = useSort();

  const handleFieldChange = (event: SelectChangeEvent<string>) => {
    setField(event.target.value as keyof Tag);
  };

  const handleDirectionChange = (event: SelectChangeEvent<string>) => {
    setDirection(event.target.value as SortDirection);
  };

  return (
    <Grid
      container
      alignItems='center'
      spacing={2}
      sx={{
        '@media (max-width: 600px)': { justifyContent: 'center' },
      }}
    >
      <SortType
        label='Sort Field'
        options={optionsName}
        value={field}
        onChange={handleFieldChange}
      />
      <SortType
        label='Sort Direction'
        options={optionsDirection}
        value={direction}
        onChange={handleDirectionChange}
      />
    </Grid>
  );
};

export default SortSelect;
