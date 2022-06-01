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
          font-style: normal;
          font-display: swap;
          font-weight: 500;
        }
      `,
    },
  },
});

export default theme;
