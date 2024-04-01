import { AppBar, CircularProgress, Container } from '@mui/material';

import { useGetTags } from '../../api/queries';
import ErrorSnackbar from '../../errors/ErrorSnackBar/ErrorSnackBar';
import TagTable from '../TagTable/TagTable';

export const Home = () => {
  const { data, error, isError, isLoading } = useGetTags();
  if (isLoading)
    return (
      <Container
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '50vh',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <CircularProgress sx={{}} />
      </Container>
    );

  if (isError) return <ErrorSnackbar error={error.message} />;
  return (
    <>
      <AppBar sx={{ fontSize: '28px', height: '50px', padding: '10px', textAlign: 'center' }}>
        Browser-tag app
      </AppBar>
      <TagTable tags={data || []} />
    </>
  );
};
