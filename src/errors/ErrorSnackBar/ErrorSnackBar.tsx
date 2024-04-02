import React, { useEffect, useState } from 'react';
import { Snackbar } from '@mui/material';

type ErrorSnackbarProps = {
  error: string;
};

const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({ error }) => {
  const [open, setOpen] = useState(true);
  const durationTime: number = 4000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpen(false);
    }, durationTime);
    return () => clearTimeout(timeoutId);
  }, []);

  return <Snackbar autoHideDuration={durationTime} message={error} open={open} />;
};

export default ErrorSnackbar;
