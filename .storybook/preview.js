import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/components/particles/GlobalStyles'
import defaultTheme from '../src/components/particles/theme/defaultTheme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
),];
