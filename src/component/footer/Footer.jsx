import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
      <footer className="bg-[#0B1120] text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    
                    
                    <div className="lg:col-span-4">
                        <h2 className="text-4xl font-bold mb-6">DigiTools</h2>
                        <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                   
                    <div className="lg:col-span-2">
                        <h4 className="text-[17px] font-semibold mb-7">Product</h4>
                        <ul className="space-y-4 text-slate-400 text-[15px]">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-[17px] font-semibold mb-7">Company</h4>
                        <ul className="space-y-4 text-slate-400 text-[15px]">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-[17px] font-semibold mb-7">Resources</h4>
                        <ul className="space-y-4 text-slate-400 text-[15px]">
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                   
                    <div className="lg:col-span-2">
                        <h4 className="text-[17px] font-semibold mb-7">Social Links</h4>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all">
                                <span className="text-slate-900 text-lg"><FaInstagram /></span>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all">
                                <span className="text-slate-900 text-lg"><FaFacebookSquare /></span>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all">
                                <span className="text-slate-900 text-lg"><FaXTwitter /></span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="border-t border-slate-800/60 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[14px]">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;