import '../styles/globals.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }) {
  const queryClient = React.useRef(new QueryClient());
  return (
    (
      <QueryClientProvider client={queryClient.current}>
        <Component {...pageProps} />
      </QueryClientProvider>
    )
  );
}

export default MyApp;
