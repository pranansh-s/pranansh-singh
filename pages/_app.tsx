import '@/styles/globals.css';

import { NextSeo } from 'next-seo';

import { SectionProvider } from '@/utils/SectionContext';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectionProvider>
      <NextSeo
        title="Pranansh Singh — Systems & Frontend Engineer"
        description="Systems & Frontend Engineer specialized in high-performance web applications, hardware virtualization, and custom engines. Explore my featured projects including rust game engines, GBA emulators, and real-time multiplayer systems."
        canonical="https://pranansh-singh.vercel.app"
        openGraph={{
          url: 'https://pranansh-singh.vercel.app',
          title: 'Pranansh Singh — Systems & Frontend Engineer',
          description:
            'Systems & Frontend Engineer specialized in high-performance web applications, hardware virtualization, and custom engines. Explore my featured projects including rust game engines, GBA emulators, and real-time multiplayer systems.',
          site_name: 'Pranansh Singh Portfolio',
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: 'https://pranansh-singh.vercel.app/favicon-96x96.png',
              width: 800,
              height: 800,
              alt: 'Pranansh Singh — Systems & Frontend Engineer Portfolio Logo',
            },
            {
              url: 'https://pranansh-singh.vercel.app/favicon-32x32.png',
              width: 400,
              height: 400,
              alt: 'Pranansh Singh — Systems & Frontend Engineer Portfolio Mini Logo',
            },
          ],
        }}
        twitter={{
          handle: '@pronounshu',
          site: '@pronounshu',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </SectionProvider>
  );
}

export default MyApp;
