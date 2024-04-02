import { Home } from './components/Home/Home';
import AllTheProviders from './providers/AllTheProviders';

const App = () => {
  return (
    <>
      <AllTheProviders>
        <Home />
      </AllTheProviders>
    </>
  );
};

export default App;
