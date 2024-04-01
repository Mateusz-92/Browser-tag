import React, { useEffect, useState } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material';

import { Tag } from '../../api/api';
import { useSort } from '../../context/SortContext';
import SortSelect from '../SortSelect/SortSelect';

type Props = {
  tags: Tag[];
};
const defaultRowsPerPage: number = 5;
const maxValue = 100;
const numZero: number = 0;
const TagTable: React.FC<Props> = ({ tags }) => {
  const [sortedTags, setSortedTags] = useState(tags);
  const [page, setPage] = useState(numZero);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const { direction, field, sortTag } = useSort();

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberBase: number = 10;
    let value = parseInt(event.target.value, numberBase);
    if (value > maxValue) {
      value = maxValue;
    }

    setRowsPerPage(value);
    setPage(numZero);
  };

  useEffect(() => {
    setPage(numZero);
    const sorted = sortTag(direction, field, tags);
    setSortedTags(sorted);
  }, [direction, field, numZero, sortTag, tags]);

  return (
    <>
      <TableContainer component={Paper}>
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
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
          />
        </Container>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Tag Name</TableCell>
              <TableCell align='right' sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                Post Count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedTags.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((tag) => (
              <TableRow key={tag.name}>
                <TableCell>{tag.name}</TableCell>
                <TableCell align='right'>{tag.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component='div'
          count={sortedTags.length}
          page={page}
          rowsPerPageOptions={[]}
          rowsPerPage={isNaN(rowsPerPage) ? numZero : rowsPerPage}
          sx={{
            '@media (max-width: 600px)': {
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            },
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default TagTable;
