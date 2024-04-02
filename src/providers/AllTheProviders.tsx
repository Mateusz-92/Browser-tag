import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../config';
import { SortProvider } from '../context/SortContext';
import ErrorBoundary from '../errors/ErrorBoundary/ErrorBoundary';

type AllTheProvidersProps = {
  children: ReactNode;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SortProvider>{children}</SortProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default AllTheProviders;
