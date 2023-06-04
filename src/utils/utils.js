export const isDarkTheme = (theme) => theme === 'dark';

export const toggleTheme = (setTheme) => setTheme(isDarkTheme() ? 'light' : 'dark');

export const systemThemeChangeHandler = (e, setTheme) => { setTheme(e.matches ? 'dark' : 'light'); };
