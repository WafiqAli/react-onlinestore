import React from 'react';

const QuantityCounter = () => {

    const decrementCount = () => {

    }

    const incrementCount = () => {

    }

    return (
        <div>
            <button className='decrement' onClick={decrementCount}></button>
            <p className='qtyCount'></p>
            <button className='increment' onClick={incrementCount}></button>
        </div>
    )
};

export default QuantityCounter;
