import axios from 'axios';
import { gsap } from 'gsap';

import { kanyemojis } from './data';

export const isDarkTheme = (theme) => theme === 'dark';

export const toggleTheme = (theme, setTheme) => setTheme(isDarkTheme(theme) ? 'light' : 'dark');

export const systemThemeChangeHandler = (e, setTheme) => {
  setTheme(e.matches ? 'dark' : 'light');
};

export const heroAnimation = (imageRefs, backgroundRefs, buttonRef) => {
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
};

export const fetchQuotes = async (setQuotes, count, setAvatars) => {
  try {
    const fetchedQuotes = [];
    while (fetchedQuotes.length < count) {
      const response = await axios.get('https://api.kanye.rest/text');
      const quote = response.data;
      if (!fetchedQuotes.includes(quote)) fetchedQuotes.push(quote);
    }
    setAvatars(randomizeArray(kanyemojis))
    setQuotes(fetchedQuotes);
  } catch (error) {
    console.error(error);
  }
};

export const randomizeArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}