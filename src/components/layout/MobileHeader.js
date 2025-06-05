import React from 'react';

import MobileMenu from './MobileMenu';

const MobileHeader = ({ mobileMenu, setMobileMenu, dropDownMenu, setDropDownMenu, currentTheme, darkMode }) => {
    return (
        <div className='flex md:hidden justify-between items-center w-full px-4 bg-white dark:bg-zinc-700 h-16 relative'>
            <div>
                <svg className='size-6 text-zinc-700 dark:text-white cursor-pointer' onClick={() => setMobileMenu(mobileMenu => !mobileMenu)}>
                    <use href='#bars-3'></use>
                </svg>
            </div>
            <div>
                <svg className='text-orange-300 h-16 w-28'>
                    <use href='#logo-type'></use>
                </svg>
            </div>
            <div className='relative'>
                <svg className='size-6 text-zinc-700 dark:text-white cursor-pointer'>
                    <use href='#shopping'></use>
                </svg>
            </div>
            {mobileMenu && (
                <MobileMenu
                    mobileMenu={mobileMenu}
                    setMobileMenu={setMobileMenu}
                    dropDownMenu={dropDownMenu}
                    setDropDownMenu={setDropDownMenu}
                    currentTheme={currentTheme}
                    darkMode={darkMode}
                />
            )}
        </div>
    );
};

export default MobileHeader;
