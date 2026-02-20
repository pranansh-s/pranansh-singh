import '@/styles/globals.css';

import { NextSeo } from 'next-seo';

import { SectionProvider } from '@/utils/SectionContext';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectionProvider>
      <NextSeo
        title="Pranansh Singh"
        description="Portfolio of Pranansh Singh, a full-stack developer specializing in React, TypeScript, system design, and performance optimization. View my work in web development, open source, and side projects."
        canonical="https://pranansh-singh.vercel.app"
        openGraph={{
          url: 'https://pranansh-singh.vercel.app',
          title: 'Pranansh Singh',
          description: 'Portfolio of Pranansh Singh, a full-stack developer specializing in React, TypeScript, system design, and performance optimization. View my work in web development, open source, and side projects.',
          site_name: 'Pranansh Singh Portfolio',
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: 'https://pranansh-singh.vercel.app/logo192.png',
              width: 800,
              height: 800,
              alt: 'Pranansh Singh Portfolio',
            },
            {
              url: 'https://pranansh-singh.vercel.app/logo64.png',
              width: 400,
              height: 400,
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
