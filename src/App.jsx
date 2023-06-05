import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Hero, InputBar, Quotes } from './components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';
import { heroAnimation, isDarkTheme, systemThemeChangeHandler } from './utils/utils';

const App = () => {
  // STATE
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [count, setCount] = useState(5), [quotes, setQuotes] = useState(), [avatars, setAvatars] = useState();
  // REFS
  const imageRefs = useRef([]),
    backgroundRefs = useRef([]),
    buttonRef = useRef();

  // GSAP ANIMATION OF HEADER BG + IMAGE
  useLayoutEffect(() => { heroAnimation(imageRefs, backgroundRefs, buttonRef); }, []);

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme(theme) ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Hero imageRefs={imageRefs} backgroundRefs={backgroundRefs} theme={theme} setTheme={setTheme} />
        <InputBar buttonRef={buttonRef} count={count} setCount={setCount} quotes={quotes} setQuotes={setQuotes} setAvatars={setAvatars} />
        <Quotes quotes={quotes} avatars={avatars} />
      </>
    </ThemeProvider>
  );
};

export default App;
