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
});

export default theme;
