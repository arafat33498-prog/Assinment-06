import React from 'react';
import { IoCartOutline } from 'react-icons/io5';



const Navbar = ({ count }) => {
    return (
        <div className="navbar bg-base-100 px-4 md:px-10 border-b border-gray-100 py-3 sticky top-0 z-50">

            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
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

                <div className="indicator cursor-pointer">

                    {count > 0 && (
                        <span className="indicator-item badge badge-secondary bg-red-500 border-none text-white text-[10px] h-5 w-5 p-0 flex items-center justify-center rounded-full">
                            {count}
                        </span>
                    )}
                    <div>
                        <span><IoCartOutline />
                        </span>
                    </div>
                </div>


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