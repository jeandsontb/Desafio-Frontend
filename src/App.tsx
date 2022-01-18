import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import FontStyles from './styles/fonts/FontStyles';
import GlobalStyle from './styles/globalStyles';
import { Home } from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <FontStyles>
        <GlobalStyle />
        <Home />
      </FontStyles>      
    </ThemeProvider>
  );
}

export default App;
