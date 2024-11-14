import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { ReactNode } from 'react';
import '@fontsource/inter';

const theme = createTheme({
  typography: {
    fontFamily: "Inter"
  },
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export function PhoenixUIThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
