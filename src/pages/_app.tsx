import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { Amplify } from 'aws-amplify';
import awsmobile from '../aws-exports';
import { theme } from 'src/styles/theme';
Amplify.configure(awsmobile);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
