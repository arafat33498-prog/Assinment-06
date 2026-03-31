import React, { use, useState } from 'react';
import AvailableCard from '../../availavaleCard/AvailableCard';
import SelectedCard from './selectedCard/SelectedCard';

const Card = ({cardPromise, handleAddToCart}) => {
    const CardData = use(cardPromise);
    const [selectedCard, setSelectedCard] = useState("available")

    return (
        <div className='container mx-auto my-[60px]'>
            <div className='flex justify-center gap-4 items-center mb-[20px]'>
                {selectedCard === "available" ? <h2></h2> : <h2>Your Cart</h2>}
                <div>
                    <button 
                        onClick={() => setSelectedCard("available")} 
                        className={`btn ${selectedCard === "available" ? "bg-[blue] text-white" : ""} rounded-r-none`}
                    >
                        Products
                    </button>
                    <button 
                        onClick={() => setSelectedCard("selected")} 
                        className={`btn ${selectedCard === "selected" ? "bg-[blue] text-white" : ""} rounded-l-none`}
                    >
                        Cart
                    </button>
                </div>
            </div>

            {/* handleAddToCart pathiye dilam AvailableCard-e */}
            {selectedCard === "available" 
                ? <AvailableCard card={CardData} handleAddToCart={handleAddToCart}/> 
                : <SelectedCard></SelectedCard>
            }
        </div>
    );
};

export default Card;