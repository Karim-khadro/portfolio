import React, { useState, useEffect, useCallback } from 'react';
import { menu } from '../texts';
import Pdf from '../Documents/CV.pdf';
import logo from "../images/logo.png";
export default function Navbar() {
  const [stickyClass, setStickyClass] = useState('relative');

  // TODO: make it work => drop navbar when scrolling up without interfering wiht the content
  //  
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        if (window !== undefined) {
           setStickyClass('flex sticky justify inset-x-0 top-0') ;
        }
      } else if (y < window.scrollY) {
        if (window !== undefined) {
          setStickyClass('relative');
        }
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    // <nav className={`bg-background  w-full x-5 font-MyFont ${stickyClass}`}>
    //   <div class="">
    <nav className={` flex flex-wrap items-center justify-between px-5 py-8  mb-3 ${stickyClass}`}>
        <div class="absolute left-10  ">
          <a href='#intro' className="px-3 py-4 flex items-center">
          <img src={logo} className="object-cover h-8 w-8" alt="" />
          </a>
        </div>
        <div class="absolute right-5 text-white ">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
            <li className="nav-item">
              <a className="px-3 py-4 flex items-center text-sm font-bold leading-snug text-white  hover:text-main_green" href="#about">
                <span className="ml-2 text-main_green">01.</span>
                <span className="ml-2">{menu.it1}</span>
              </a>

            </li>
            <li className="nav-item">
              <a className="px-3 py-4 flex items-center text-sm font-bold leading-snug text-white  hover:text-main_green" href="#exp">
                <span className="ml-2 text-main_green">02.</span>
                <span className="ml-2">{menu.it2}</span>
              </a>

            </li>
            <li className="nav-item">
              <a className="px-3 py-4 flex items-center text-sm font-bold leading-snug text-white  hover:text-main_green" href="#projects">
                <span className="ml-2 text-main_green">03.</span>
                <span className="ml-2">{menu.it3}</span>
              </a>

            </li >
            <li className="nav-item">
              <a className="px-3 py-4 flex items-center text-sm font-bold leading-snug text-white  hover:text-main_green" href="#contact">
                <span className="ml-2 text-main_green">04.</span>
                <span className="ml-2">{menu.it4}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white  " href={Pdf} without rel="noopener noreferrer" target="_blank">
                <button className=' border-2 border-main_green text-main_green rounded-md px-4 py-2 hover:bg-main_green hover:bg-opacity-20' trailingIcon="picture_as_pdf" label="Resume">
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
        </nav>
    
  );


}
