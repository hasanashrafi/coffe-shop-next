import React from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = ({ className = '', label = true }) => {
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
        <button className={className} onClick={toggleTheme}>
            {currentTheme === 'dark' ? (
                <svg className="size-7">
                    <use href="#sun"></use>
                </svg>
            ) : (
                <svg className="size-7">
                    <use href="#night-mode"></use>
                </svg>
            )}
            {label && (
                <span className="ml-2">{currentTheme !== 'dark' ? 'تم تیره' : 'تم لایت'}</span>
            )}
        </button>
    );
};

export default ThemeToggle; 