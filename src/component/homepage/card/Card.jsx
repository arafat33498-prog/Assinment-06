import React, { use } from 'react';
import AvailableCard from '../../availavaleCard/AvailableCard';

const Card = ({cardPromise}) => {
    console.log(cardPromise);
    const Card = use(cardPromise);
    console.log(Card)
    return (
        <div className='container mx-auto'>
            <h2>player: {Card.length}</h2>
            <AvailableCard card ={Card}/>
        </div>
    );
};

export default Card;