import '../styles/globals.css';
import type { AppContext, AppInitialProps } from 'next/app';
import Navbar from '../components/Navbar';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <Navbar />
    </ApolloProvider>
  );
}

export default MyApp;
