import React from 'react';

const Counter = () => {
    return (
        <section className="bg-[#8B2CF5] py-16 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around text-white font-sans">
                
             
                <div className="text-center group">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
                    <p className="text-sm md:text-base opacity-80 uppercase tracking-wide">Active Users</p>
                </div>

                <div className="hidden md:block w-px h-16 bg-white/20"></div>

              
                <div className="text-center py-8 md:py-0">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
                    <p className="text-sm md:text-base opacity-80 uppercase tracking-wide">Premium Tools</p>
                </div>

              
                <div className="hidden md:block w-px h-16 bg-white/20"></div>

                
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
                    <p className="text-sm md:text-base opacity-80 uppercase tracking-wide">Rating</p>
                </div>

            </div>
        </section>
    );
};

export default Counter;