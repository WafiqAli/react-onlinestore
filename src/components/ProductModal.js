import React from 'react';

const ProductModal = ({clickedProduct, closeModal, show}) => {


    if (show) {
        console.log(clickedProduct);
        return (
            <div className='modal'>
                <div className='modal-content'>
                    <span className='close'  onClick={closeModal}>&times;</span>
                    <img src={clickedProduct.image} alt='Error'/>
                    <h3>{clickedProduct.title}</h3>
                    <h5>{clickedProduct.description}</h5>
                    <h2>${clickedProduct.price}</h2>
                </div>
            </div>
        )
    }
    
    return null;
};

export default ProductModal;
