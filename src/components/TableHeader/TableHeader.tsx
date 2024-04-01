import React from 'react';
import { Container, TextField } from '@mui/material';
import SortSelect from '../SortSelect/SortSelect';

type TableHeaderProps = {
  onChangeProp: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  valueProp: number;
};

const TableHeader: React.FC<TableHeaderProps> = ({ onChangeProp, valueProp }) => {
  return (
    <>
      <Container
        sx={{
          '@media (min-width: 600px)': {
            flexDirection: 'row',
            justifyContent: 'center',
          },
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '100px',
        }}
      >
        <SortSelect />
        <TextField
          InputProps={{ inputProps: { max: 100, min: 1 } }}
          label='Rows per page'
          sx={{ margin: '20px', width: '200px' }}
          type='number'
          value={valueProp}
          onChange={onChangeProp}
        />
      </Container>
    </>
  );
};

export default TableHeader;
