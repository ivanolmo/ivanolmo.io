import React from 'react';
import { useTheme } from 'next-themes';

function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setActive(!active);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    setMounted(true);

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <div className='relative'>
      <input
        type='checkbox'
        id='toggle'
        className='hidden checkbox'
        onClick={() => handleClick()}
        checked={theme === 'dark'}
        readOnly
      />
      <label
        htmlFor='toggle'
        className='relative flex w-16 h-8 bg-blue-400 border-2 border-blue-600 rounded-full cursor-pointer theme-label'
      >
        <span className='relative w-1.5 h-0.5 bg-white rounded-md top-3 left-10 theme-decoration'></span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
