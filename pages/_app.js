import { QueryClientProvider } from '../utils/queryClients';
import { queryClient } from '../utils/queryClients';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
