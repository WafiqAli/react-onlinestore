import React from 'react';
import ProductNav from './ProductNav';

const ProductContent = ({productList}) => {

    console.log(productList);


    return (
        <ProductNav productList={productList}/>
  )
};

export default ProductContent;
