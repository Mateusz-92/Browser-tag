import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../config';
import ErrorBoundary from '../errors/ErrorBoundary/ErrorBoundary';
import { SortProvider } from '../context/SortContext';
import { ReactNode } from 'react';

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
