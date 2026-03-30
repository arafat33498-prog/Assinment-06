import React from 'react';
import bannerImg from "../../assets/banner.png"
import playImg from "../../assets/Play.png"

const Banner = () => {
    return (
     <section className="bg-white py-16 px-6 lg:px-20 min-h-[80vh] flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
       
        <div className="flex-1 text-left space-y-6">
         
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full border border-purple-100 font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            New: AI-Powered Tools Available
          </div>

       
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1F2937] leading-[1.1]">
            Supercharge Your <br /> 
            <span className="text-[#1F2937]">Digital Workflow</span>
          </h1>

          
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <p className="text-gray-400 font-medium">Explore Products</p>

        
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full px-8 btn-md lg:btn-lg normal-case shadow-lg shadow-purple-200">
              Explore Products
            </button>
            
            <button className="btn btn-outline border-[#7C3AED] text-[#7C3AED] hover:bg-purple-50 hover:border-[#7C3AED] rounded-full px-8 btn-md lg:btn-lg normal-case gap-2">
              <img src={playImg} alt="" />
              Watch Demo
            </button>
          </div>
        </div>

    
        <div className="flex-1 flex lg:justify-end relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-full">
            <img 
              src={bannerImg}
              alt="Digital Workflow" 
              className="w-[500] h-[590] object-cover"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>

      </div>
      
    </section>
    
        

    );
};

export default Banner;