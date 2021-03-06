import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './components/App';
import './index.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
