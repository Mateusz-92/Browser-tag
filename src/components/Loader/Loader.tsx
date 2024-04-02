import { CircularProgress, Container } from '@mui/material';

const Loader = () => {
  return (
    <Container>
      <CircularProgress
        sx={{ left: '50%', position: 'absolute', top: '25%', transform: 'translate(-50%, -50%)' }}
      />
    </Container>
  );
};
export default Loader;
