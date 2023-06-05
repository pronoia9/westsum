import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { gsap } from 'gsap';

import { Hero, InputBar, Quotes, ThemeButton } from './components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';
import { isDarkTheme, systemThemeChangeHandler } from './utils/utils';

const App = () => {
  // STATE
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  // REFS
  const imageRefs = useRef([]),
    backgroundRefs = useRef([]),
    buttonRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete: function () {
        this.restart();
      },
    });

    // INIT
    tl.set(imageRefs.current[0], { scale: 1 }, 0);
    tl.set(imageRefs.current[1], { scale: 1.2, transformOrigin: '100% 100%' }, 0);
    tl.set(imageRefs.current[2], { scale: 1.2, transformOrigin: '100% 100%' }, 0);
    tl.set(backgroundRefs.current[0], { opacity: 1 }, 0);
    tl.set(backgroundRefs.current[1], { opacity: 0 }, 0);
    tl.set(backgroundRefs.current[2], { opacity: 0 }, 0);

    tl.delay(2);

    // #1 -> #2
    tl.to(imageRefs.current[0], 2, { opacity: 0 }, 0);
    tl.to(imageRefs.current[1], 5, { opacity: 1, scale: 1 }, 0);
    tl.to(buttonRef.current, 0.5, { backgroundColor: '#6C429B' }, 0);
    tl.to(backgroundRefs.current[1], 1, { opacity: 1 }, 0);

    tl.set(imageRefs.current[0], { scale: 1.2, transformOrigin: '100% 100%' }, 2);

    // #2 -> #3
    tl.to(imageRefs.current[1], 2, { opacity: 0 }, 5);
    tl.to(imageRefs.current[2], 5, { opacity: 1, scale: 1 }, 5);
    tl.to(buttonRef.current, 0.5, { backgroundColor: '#930560' }, 5);
    tl.to(backgroundRefs.current[2], 1, { opacity: 1 }, 5);
    tl.set(backgroundRefs.current[1], { opacity: 0 }, 7);

    // #3 -> #1
    tl.to(imageRefs.current[2], 2, { opacity: 0 }, 10);
    tl.to(imageRefs.current[0], 5, { opacity: 1, scale: 1 }, 10);
    tl.to(buttonRef.current, 0.5, { backgroundColor: '#0551B4' }, 10);
    tl.to(backgroundRefs.current[2], 1, { opacity: 0 }, 10);
  }, []);

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
        <ThemeButton />
        <Hero imageRefs={imageRefs} backgroundRefs={backgroundRefs} />
        <InputBar buttonRef={buttonRef} />
        <Quotes />
      </>
    </ThemeProvider>
  );
};

export default App;
