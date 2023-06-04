import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Themes';

const App = () => {
  // Check if the user's system theme preference is dark
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set the initial theme based on the user's system theme preference
  const [theme, setTheme] = useState(prefersDarkTheme ? 'dark' : 'light');

  // Determine if the current theme is dark or light
  const isDarkTheme = theme === 'dark';

  // Toggle the theme between dark and light
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  useEffect(() => {
    // Function to handle changes in the system theme preference
    const systemThemeChangeHandler = (e) => {
      // Update the theme based on the new system theme preference
      setTheme(e.matches ? 'dark' : 'light');
    };

    // Add a listener to detect changes in the system theme preference
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addListener(systemThemeChangeHandler);

    // Clean up the listener when the component is unmounted
    return () => {
      systemThemeWatcher.removeListener(systemThemeChangeHandler);
    };
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <h1>Hello!</h1>
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label='Light mode' role='img'>
              🌞
            </span>
          ) : (
            <span aria-label='Dark mode' role='img'>
              🌜
            </span>
          )}
        </button>
      </>
    </ThemeProvider>
  );
};

export default App;
