import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';
import Hero from './components/Hero';

const App = () => {
  // THEME RELATED STUFF
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const isDarkTheme = () => theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme() ? 'light' : 'dark');
  useEffect(() => {
    const systemThemeChangeHandler = (e) => { setTheme(e.matches ? 'dark' : 'light'); };
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener(systemThemeChangeHandler);
    return () => { systemThemeWatcher.removeEventListener(systemThemeChangeHandler); };
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme() ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <h1>Hello!</h1>
        {/* <button onClick={toggleTheme}>
          {isDarkTheme ? (<span aria-label='Light mode' role='img'>🌞</span>) : (<span aria-label='Dark mode' role='img'>🌜</span>
          )}
        </button> */}
        <Hero />
      </>
    </ThemeProvider>
  );
};

export default App;
