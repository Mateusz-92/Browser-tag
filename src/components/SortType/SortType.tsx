import React from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type SortableSelectProps = {
  label: string;

  onChange: (event: SelectChangeEvent<string>) => void;
  options: { label: string; value: string }[];
  value: string;
};

const SortType: React.FC<SortableSelectProps> = ({ label, onChange, options, value }) => {
  return (
    <Grid item>
      <FormControl sx={{ width: '200px' }}>
        <InputLabel sx={{ padding: '20px' }}>{label}</InputLabel>
        <Select value={value} onChange={onChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SortType;
