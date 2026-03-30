import React from 'react';

const Navbar = () => {
    return (
          <div className="navbar bg-base-100 px-4 md:px-10 border-b border-gray-100 py-3">
     
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <a className="text-3xl font-bold text-[#7C3AED] cursor-pointer tracking-tight">
          DigiTools
        </a>
      </div>

     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-[15px] font-medium text-gray-600">
          <li><a className="hover:text-[#7C3AED]">Products</a></li>
          <li><a className="hover:text-[#7C3AED]">Features</a></li>
          <li><a className="hover:text-[#7C3AED]">Pricing</a></li>
          <li><a className="hover:text-[#7C3AED]">Testimonials</a></li>
          <li><a className="hover:text-[#7C3AED]">FAQ</a></li>
        </ul>
      </div>

     
      <div className="navbar-end gap-3 md:gap-6">
        
        <button className="btn btn-ghost btn-circle btn-sm">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </button>

       
        <a className="hidden sm:inline-block font-semibold text-gray-700 hover:text-[#7C3AED] cursor-pointer">
          Login
        </a>
        <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full px-6 normal-case font-bold">
          Get Started
        </button>
      </div>
    </div>
    );
};

export default Navbar;