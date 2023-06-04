import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { Hero, InputBar, Quotes, ThemeButton } from './components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';
import { isDarkTheme, systemThemeChangeHandler } from './utils/utils';

const App = () => {
  // STATE
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  // REFS
  const imageRefs = useRef([]), backgroundRefs = useRef([]);
  useEffect(() => { console.log(imageRefs) }, [imageRefs]);
  useEffect(() => { console.log(backgroundRefs) }, [backgroundRefs]);

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
        <Hero imageRefs={imageRefs} backgroundRefs={backgroundRefs} />
        <InputBar />
        <Quotes />
      </>
    </ThemeProvider>
  );
};

export default App;
