import React from 'react'
import { useState } from 'react';
import Logo from '../image/UiPath Student Developer_rgb_medium.png';
function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    //   const [darkMode, setDarkMode] = useState(false);

    //   const toggleDarkMode = () => {
    //     setDarkMode(prevMode => !prevMode);
    //     // Here, you can toggle the dark mode classes or apply different styles based on darkMode state
    //     // For example, you might toggle a CSS class on the body or a container element
    //     // document.body.classList.toggle('dark-mode');
    //   };
  return (
    <><header className="sticky top-0 z-50 bg-white shadow py-4 md:py-6">
<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a href="https://cecuipathstudentscommunity.netlify.app/" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <img className="w-auto h-14" src={Logo} alt="" />
                            </a>
                        </div>

                        <div className="flex lg:hidden">
                            <button onClick={toggleMobileMenu} type="button" className="text-gray-900">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>

                        <div className={`lg:hidden absolute top-16 inset-x-0 z-10 bg-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a href="/events" className="block px-3 py-2 text-base font-pj text-gray-900 rounded-md hover:bg-gray-50">Events</a>
                                {/* <a href="/forum" className="block px-3 py-2 text-base font-pj text-gray-900 rounded-md hover:bg-gray-50">Community Forum</a>
                                <a href="/ourteam" className="block px-3 py-2 text-base font-pj text-gray-900 rounded-md hover:bg-gray-50">Our Team</a>
                                <a href="/contact" className="block px-3 py-2 text-base font-pj text-gray-900 rounded-md hover:bg-gray-50">Contact</a> */}
                                {/* Add more menu items */}
                            </div>
                        </div>

                        <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
                             <a href="/events" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Events </a>
                            {/*<a href="/forum" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Community Forum </a>
                            <a href="/ourteam" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Our Team </a>
                            <a href="/contact" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact </a>
                            Other desktop menu items */}
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            {/* <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </a> */}

                            {/* <a href="/joincommunity" title="" className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white" role="button">
                                Join community
                            </a> */}
                            {/* <div className={darkMode ? 'dark' : 'light'}>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {/* Your other components and content */}
                            {/* </div>  */}
                        </div>
                    </div>
                </div>
  </header>
  
              
    </>
  )
}

export default Header