import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { MantineProvider } from '@mantine/core';

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  );
}

export default appWithTranslation(App)