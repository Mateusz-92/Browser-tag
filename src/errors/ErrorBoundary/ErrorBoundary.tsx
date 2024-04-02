import { Component, ErrorInfo, ReactNode } from 'react';
import { Container, Typography } from '@mui/material';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line no-unused-vars
  public static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '50vh',
            justifyContent: 'center',
            width: '30%',
          }}
        >
          <Typography gutterBottom textAlign={'center'} variant='h5'>
            Sorry.. there was an error
          </Typography>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
