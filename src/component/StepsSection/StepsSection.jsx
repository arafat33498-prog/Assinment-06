import React from 'react';
import packgeImg from "../../assets/package.png"
import rocketImg from "../../assets/rocket.png"
import userImg from "../../assets/user.png"
const StepsSection = () => {
    return (
        <div>
            <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              
                <h2 className="text-4xl font-bold text-slate-900 mb-2">Get Started In 3 Steps</h2>
                <p className="text-slate-500 mb-16 text-sm">Start using premium digital tools in minutes, not hours.</p>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    
                   
                    <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm relative text-center">
                        <div className="absolute top-5 right-5 bg-[#8318FF] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                            01
                        </div>
                        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 text-[#8318FF]">
                          
                            <img src={userImg} alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Create Account</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    
                    <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm relative text-center">
                        <div className="absolute top-5 right-5 bg-[#8318FF] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                            02
                        </div>
                        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 text-[#8318FF]">
                            <img src={packgeImg} alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Choose Products</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    
                    <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm relative text-center">
                        <div className="absolute top-5 right-5 bg-[#8318FF] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                            03
                        </div>
                        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 text-[#8318FF]">
                            <img src={rocketImg} alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Start Creating</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
};

export default StepsSection;