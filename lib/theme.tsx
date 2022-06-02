import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';
import { Localization } from '@mui/material/locale';

declare module '@mui/material/styles' {
  // typescript interfaces for the theme
  interface ThemeOptions {
    direction?: string;
    faIR?: Localization;
  }
}

const theme = createTheme({
  direction: 'rtl',
  faIR,
  typography: {
    fontFamily:
      'IRANSansXV, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IRANSansXV';
          font-weight: 100 900;
          font-display: auto;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: '#0e42a1',
    },
  },
});

export default theme;
