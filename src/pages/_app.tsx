import React from 'react';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '../../styles/theme';
import { Global } from '../../styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDefault}>
      <Component {...pageProps} />
      <Global />
    </ThemeProvider>
  );
}
