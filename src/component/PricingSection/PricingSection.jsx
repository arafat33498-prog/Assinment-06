import React from 'react';

const PricingSection = () => {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4 text-center">
               
                <h2 className="text-4xl font-extrabold  mb-4">Simple, Transparent Pricing</h2>
                <p className="text-slate-500 mb-16">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                    
                  
                    <div className="bg-[#F9FAFB] border border-gray-100 rounded-[2.5rem] p-10 text-left shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Starter</h3>
                        <p className="text-slate-500 text-sm mb-8">Perfect for getting started</p>
                        <div className="mb-8">
                            <span className="text-5xl font-black text-slate-900">$0</span>
                            <span className="text-slate-400 text-lg">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-slate-600 text-sm font-medium">
                            <li><span className="text-green-500 mr-2">✓</span> Access to 10 free tools</li>
                            <li><span className="text-green-500 mr-2">✓</span> Basic templates</li>
                            <li><span className="text-green-500 mr-2">✓</span> Community support</li>
                            <li><span className="text-green-500 mr-2">✓</span> 1 project per month</li>
                        </ul>
                        <button className="w-full bg-[#8318FF] hover:bg-[#7114e0] text-white font-bold py-4 rounded-full transition-all">
                            Get Started Free
                        </button>
                    </div>

                   
                    <div className="bg-[#8318FF] border border-[#8318FF] rounded-[2.5rem] p-10 text-left shadow-xl relative scale-105 z-10 text-white">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD666] text-slate-900 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                            Most Popular
                        </div>
                        <h3 className="text-2xl font-bold mb-1">Pro</h3>
                        <p className="text-purple-100 text-sm mb-8">Best for professionals</p>
                        <div className="mb-8">
                            <span className="text-5xl font-black">$29</span>
                            <span className="text-purple-100 text-lg">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-sm font-medium">
                            <li><span className="text-white mr-2">✓</span> Access to all premium tools</li>
                            <li><span className="text-white mr-2">✓</span> Unlimited templates</li>
                            <li><span className="text-white mr-2">✓</span> Priority support</li>
                            <li><span className="text-white mr-2">✓</span> Unlimited projects</li>
                            <li><span className="text-white mr-2">✓</span> Cloud sync</li>
                            <li><span className="text-white mr-2">✓</span> Advanced analytics</li>
                        </ul>
                        <button className="w-full bg-white text-[#8318FF] hover:bg-gray-100 font-bold py-4 rounded-full transition-all">
                            Start Pro Trial
                        </button>
                    </div>

                    
                    <div className="bg-[#F9FAFB] border border-gray-100 rounded-[2.5rem] p-10 text-left shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Enterprise</h3>
                        <p className="text-slate-500 text-sm mb-8">For teams and businesses</p>
                        <div className="mb-8">
                            <span className="text-5xl font-black text-slate-900">$99</span>
                            <span className="text-slate-400 text-lg">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-slate-600 text-sm font-medium">
                            <li><span className="text-green-500 mr-2">✓</span> Everything in Pro</li>
                            <li><span className="text-green-500 mr-2">✓</span> Team collaboration</li>
                            <li><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                            <li><span className="text-green-500 mr-2">✓</span> Dedicated support</li>
                            <li><span className="text-green-500 mr-2">✓</span> SLA guarantee</li>
                            <li><span className="text-green-500 mr-2">✓</span> Custom branding</li>
                        </ul>
                        <button className="w-full bg-[#8318FF] hover:bg-[#7114e0] text-white font-bold py-4 rounded-full transition-all">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PricingSection;