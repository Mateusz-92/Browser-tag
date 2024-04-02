import { Button } from '@mui/material';
import ErrorSnackbar from '../ErrorSnackBar/ErrorSnackBar';

type ErrorViewProps = {
  error: string;
  onClick: () => void;
};

export const ErrorView: React.FC<ErrorViewProps> = ({ error, onClick }) => {
  return (
    <>
      <ErrorSnackbar error={error} />
      <Button
        sx={{ left: '50%', position: 'absolute', top: '25%', transform: 'translate(-50%, -50%)' }}
        variant='contained'
        onClick={onClick}
      >
        Refresh Page
      </Button>
    </>
  );
};
