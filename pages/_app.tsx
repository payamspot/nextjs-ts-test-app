import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../lib/theme';
import { StyleSheetManager } from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager stylisPlugins={[rtlPlugin]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default MyApp;
