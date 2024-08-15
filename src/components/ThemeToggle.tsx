"use client";

import { useTheme } from 'next-themes'
import {useEffect, useState} from "react"
import { LuSun, LuMoon } from "react-icons/lu";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (<>
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='ml-auto text-lg'>
      {hasMounted && theme === 'dark' ? <LuSun /> : <LuMoon />}
    </button>
  </>);
};

export default DarkModeToggle;