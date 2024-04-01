import React from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';

import { Tag } from '../../api/api';
import { SortDirection, useSort } from '../../context/SortContext';
import SortType from '../SortType/SortType';

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
        value={field}
        options={[
          { label: 'Name (Alphabetical)', value: 'name' },
          { label: 'Post Count', value: 'count' },
        ]}
        onChange={handleFieldChange}
      />
      <SortType
        label='Sort Direction'
        value={direction}
        options={[
          { label: 'Ascending', value: 'asc' },
          { label: 'Descending', value: 'desc' },
        ]}
        onChange={handleDirectionChange}
      />
    </Grid>
  );
};

export default SortSelect;
