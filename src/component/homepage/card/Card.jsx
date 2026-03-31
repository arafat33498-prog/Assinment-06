import React, { use, useState } from 'react';
import AvailableCard from '../../availavaleCard/AvailableCard';
import SelectedCard from './selectedCard/SelectedCard';

const Card = ({ cardPromise, handleAddToCart, selectedCards }) => {
    const CardData = use(cardPromise);
    const [view, setView] = useState("available")

    return (
        <div className='container mx-auto my-[60px] px-4'>
            <div className='flex justify-center gap-4 items-center mb-[40px]'>
                <div className="inline-flex p-1 bg-gray-100 rounded-xl">
                    <button 
                        onClick={() => setView("available")} 
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${view === "available" ? "bg-blue-600 text-white shadow-lg" : "text-gray-500 hover:bg-gray-200"}`}
                    >
                        Products
                    </button>
                    <button 
                        onClick={() => setView("selected")} 
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${view === "selected" ? "bg-blue-600 text-white shadow-lg" : "text-gray-500 hover:bg-gray-200"}`}
                    >
                        Cart ({selectedCards.length})
                    </button>
                </div>
            </div>

            {view === "available" 
                ? <AvailableCard card={CardData} handleAddToCart={handleAddToCart} /> 
                : <SelectedCard selectedCards={selectedCards} />
            }
        </div>
    );
};

export default Card;