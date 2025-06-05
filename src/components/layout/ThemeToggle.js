import React from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
        }
    };

    return (
        <button className='flex items-center gap-x-2 text-orange-300' onClick={toggleTheme}>
            {currentTheme === 'dark' ? (
                <svg className='size-5 md:size-7 md:text-orange-200'>
                    <use href="#sun"></use>
                </svg>
            ) : (
                <svg className='size-5 md:size-7 md:text-orange-200'>
                    <use href="#night-mode"></use>
                </svg>
            )}

            <span className="ml-2 md:hidden ">{currentTheme !== 'dark' ? 'تم تیره' : 'تم لایت'}</span>

        </button>
    );
};

export default ThemeToggle; 