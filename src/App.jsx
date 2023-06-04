import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Hero, Quotes, ThemeButton } from './components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';

const App = () => {
  // THEME RELATED STUFF
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const isDarkTheme = () => theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme() ? 'light' : 'dark');
  useEffect(() => {
    const systemThemeChangeHandler = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', systemThemeChangeHandler);
    return () => {
      systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler);
    };
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme() ? darkTheme : lightTheme}>
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
