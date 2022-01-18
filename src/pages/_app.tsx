import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { theme } from 'src/styles/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
