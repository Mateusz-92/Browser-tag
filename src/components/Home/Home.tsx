import { AppBar, Container } from '@mui/material';

import { useGetTags } from '../../api/queries';
import { ErrorView } from '../../errors/ErrorView/ErrorView';
import Loader from '../Loader/Loader';
import TagTable from '../TagTable/TagTable';

export const Home = () => {
  const { data, error, isError, isLoading } = useGetTags();

  
  const refreshPage = () => {
    window.location.reload();
  };

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (isError)
    return (
      <>
        <ErrorView error={error.message} onClick={refreshPage} />;
      </>
    );
  return (
    <>
      <AppBar sx={{ fontSize: '28px', height: '50px', padding: '10px', textAlign: 'center' }}>
        Browser-tag app
      </AppBar>
      <TagTable tags={data || []} />
    </>
  );
};
