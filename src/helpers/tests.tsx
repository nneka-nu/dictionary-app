import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import store from '../store';

const queryClient = new QueryClient();

export const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </Provider>
);
