import {  menu } from '../texts';
import Pdf from '../Documents/CV.pdf';

const Navbar = () => {
    return (
        <nav className="  top-0 z-50 pt-6 font-MyFont ">
        <div class="relative">
          <div class="absolute left-10 text-white text-lg font-bold ">
            <a href='#intro' className="px-3 py-4 flex items-center">
              KARIM
            </a>
          </div>
          <div class="absolute right-5 text-white ">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="nav-item">
                <a className="px-3 py-4 flex items-center text-sm font-bold leading-snug text-white opacity-75 hover:text-main_green" href="#about">
                  <span className="ml-2 text-main_green">01.</span>
                  <span className="ml-2">{menu.it1}</span>
                </a>

              </li>
              <li className="nav-item">
                <a className="px-3 py-4 flex items-center text-sm font-bold leading-snug text-white opacity-75 hover:text-main_green" href="#exp">
                  <span className="ml-2 text-main_green">02.</span>
                  <span className="ml-2">{menu.it2}</span>
                </a>

              </li>
              <li className="nav-item">
                <a className="px-3 py-4 flex items-center text-sm font-bold leading-snug text-white opacity-75 hover:text-main_green" href="#projects">
                  <span className="ml-2 text-main_green">03.</span>
                  <span className="ml-2">{menu.it3}</span>
                </a>

              </li >
              <li className="nav-item">
                <a className="px-3 py-4 flex items-center text-sm font-bold leading-snug text-white opacity-75 hover:text-main_green" href="#contact">
                  <span className="ml-2 text-main_green">04.</span>
                  <span className="ml-2">{menu.it4}</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white opacity-75 " href={Pdf} without rel="noopener noreferrer" target="_blank">
                  <button className=' border-2 border-main_green text-main_green rounded-md px-4 py-2 hover:bg-main_green hover:bg-opacity-20' trailingIcon="picture_as_pdf" label="Resume">
                    Resume
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

}

export default Navbar;