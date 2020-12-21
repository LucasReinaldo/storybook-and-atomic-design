import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/particles/GlobalStyles';
import defaultTheme from './components/particles/theme/defaultTheme';

import Routes from './routes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
