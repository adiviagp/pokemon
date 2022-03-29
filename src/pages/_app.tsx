import '../styles/globals.css';
import type { AppContext, AppInitialProps } from 'next/app';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

export default MyApp;
