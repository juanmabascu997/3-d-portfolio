import React from 'react';
import { useLanguage } from '../hoc/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChangeLanguage = (event) => {
    if(language === 'en') changeLanguage('es');
    else changeLanguage('en');
  };

  return (
    <div
        key='button-lang'
        className='hover:text-white text-[18px] font-medium cursor-pointer'
        style={{
            color: 'white',
        }}
    >
        <button
            onClick={()=> {
                handleChangeLanguage();
            }}
            type='icon'
            className='text-secondary'
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
            </svg>
        </button>
    </div>
  );
};

export default LanguageSelector;
