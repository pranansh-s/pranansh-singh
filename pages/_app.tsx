import '@/styles/globals.css';

import { NextSeo } from 'next-seo';

import { SectionProvider } from '@/utils/SectionContext';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectionProvider>
      <NextSeo
        title="Pranansh Singh"
        description="Pranansh Singh - Portfolio website"
        canonical="https://pranansh-singh.vercel.app"
        openGraph={{
          url: 'https://pranansh-singh.vercel.app',
          title: 'Pranansh Singh',
          description: 'Pranansh Singh - Portfolio website',
          site_name: 'Pranansh Singh',
          type: 'website',
          images: [
            {
              url: 'https://pranansh-singh.vercel.app/logo64.png',
              width: 800,
              height: 600,
              alt: 'Pranansh Singh Portfolio',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </SectionProvider>
  );
}

export default MyApp;
