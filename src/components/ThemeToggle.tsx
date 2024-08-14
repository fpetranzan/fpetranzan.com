"use client";
import {useTheme} from 'next-themes'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='ml-auto'>
        toggle
    </button>
  );
};

export default DarkModeToggle;
