import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Home } from './components/Home/Home';
import { SortProvider } from './context/SortContext';
import ErrorBoundary from './errors/ErrorBoundery/ErrorBoundery';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 60_000,
    },
  },
  queryCache: new QueryCache(),
});

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <SortProvider>
            <Home />
          </SortProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
