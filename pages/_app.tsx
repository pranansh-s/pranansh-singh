import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SectionProvider } from '../utils/SectionContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectionProvider>
      <Component {...pageProps} />
    </SectionProvider>
  );
}

export default MyApp
