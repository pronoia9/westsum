import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Hero, Quotes, ThemeButton } from './components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';
import { isDarkTheme, systemThemeChangeHandler } from './utils/utils';

const App = () => {
  // STATE
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', () => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme(theme) ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <ThemeButton />
        <Hero />
        <Quotes />
      </>
    </ThemeProvider>
  );
};

export default App;
