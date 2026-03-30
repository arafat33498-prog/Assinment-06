import React from 'react';

const AvailableCard = ({ card }) => {
    console.log(card, 'card')
    return (
        
        <div className='grid grid-cols-3 gap-3'>
            {
                card.map((cards) => {
                    console.log(cards, "card")
                    return <div className=" bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative">
                       
                        <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
                           {cards.badge}
                        </div>

                        
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
                           <img src={`/${cards.icon}`} alt=""/>
                        </div>

                       
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">{cards.title}</h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            {cards.description}
                        </p>

                       
                        <div className="flex items-baseline mb-6">
                            <span className="text-3xl font-bold text-slate-900">{cards.price}</span>
                            <span className="text-slate-400 ml-1 text-sm">{cards.billing}</span>
                        </div>

                       
                        <div className="space-y-3 mb-8 text-left">
                            {cards.features.map((item, index) => (
                                <div key={index} className="flex items-center text-slate-600 text-sm gap-2">
                                    <span className="text-green-500 font-bold">✓</span>
                                  
                                    <span className="text-slate-600 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                       
                        <button className="w-full bg-[#8B2CFF] hover:bg-[#7a25e0] text-white font-bold py-4 rounded-full transition-colors duration-200">
                            Buy Now
                        </button>
                    </div>
                })
            }

        </div>
    );
};

export default AvailableCard;