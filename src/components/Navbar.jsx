import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={()=> {
            setActive('');
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className='w-20 h-20 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Juan &nbsp;
          <span className='sm:block hidden'>| React & Vue Dev</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((item) => (
              <li
                key={item.id}
                className={
                  `${active === item.title ? 'text-white cursor-pointer' : 'text-secondary'}
                  hover:text-white text-[18px] font-medium cursor-pointer
                `}
                onClick={()=> {
                  setActive(item.title);
                }}
              >

                <a href={`#${item.id}`}>{item.title}</a>
              </li>)
            )
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={()=> setToggle(!toggle)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {
                navLinks.map((item) => (
                <li
                      key={item.id}
                      className={
                        `${active === item.title ? 'text-white cursor-pointer' : 'text-secondary'}
                        font-poppins font-medium cursor-pointer text-[16px]
                      `}
                      onClick={()=> {
                        setActive(item.title)
                        setToggle(!toggle)
                      }}
                    >
                      <a href={`#${item.id}`}>{item.title}</a>
                    </li>)
                  )
              }
            </ul>
          </div>  
        </div>
      </div>
    </nav>
  )
}

export default Navbar