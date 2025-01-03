'use client';

import { useTheme } from 'next-themes'
import { LuSun, LuMoon } from "react-icons/lu";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (<>
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='ml-auto text-lg'>
      {theme === 'dark' ? <LuSun /> : <LuMoon />}
    </button>
  </>);
};