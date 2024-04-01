import { Container, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Container>
      <CircularProgress
        sx={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </Container>
  );
};
export default Loader;
