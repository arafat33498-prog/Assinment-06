import React, { useState } from 'react';


const SingleCard = ({ cards, handleAddToCart }) => {
    
    const [isSelected, setIsSelected] = useState(false);
    
    const onButtonClick = () => {
        if (!isSelected) {
            setIsSelected(true);
           
            handleAddToCart(cards); 
        }
    };

    return (
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative flex flex-col justify-between h-full">
           
            {cards.badge && (
                <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
                    {cards.badge}
                </div>
            )}
            
            <div>
               
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100 overflow-hidden">
                    <img 
                        src={`/${cards.icon}`} 
                        alt={cards.title} 
                     
                    />
                </div>

               
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{cards.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {cards.description}
                </p>

               
                <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-slate-900">${cards.price}</span>
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
            </div>

         
            <button 
                className={`w-full font-bold py-4 rounded-full transition-all duration-200 ${
                    isSelected 
                    ? 'bg-green-500 text-white cursor-default shadow-inner' 
                    : 'bg-[#8B2CFF] hover:bg-[#7a25e0] text-white shadow-lg shadow-purple-200'
                }`} 
                onClick={onButtonClick}
                disabled={isSelected}
            >
                {isSelected ? "Added to Cart ✓" : "Buy Now"}
            </button>
        </div>
    );
};


const AvailableCard = ({ card, handleAddToCart }) => {
    return (
        <div className="container mx-auto px-4">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {card.map((item, index) => (
                    <SingleCard 
                        key={item.id || index} 
                        cards={item} 
                        handleAddToCart={handleAddToCart} 
                    />
                ))}
            </div>
        </div>
    );
};

export default AvailableCard;