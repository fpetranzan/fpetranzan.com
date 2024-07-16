"use client";
import {useTheme} from 'next-themes'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        toggle
    </button>
  );
};

export default DarkModeToggle;
