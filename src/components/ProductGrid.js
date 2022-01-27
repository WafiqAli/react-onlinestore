import React from 'react';
import {useState} from 'react';

const ProductGrid = ({productList, selectedCategory, selectedSortBy}) => {

    const [currentSortBy, setCurrentSortBy] = useState(null);

    const sortProductList = () => {
        if (selectedSortBy === 'Highest Price') {
            console.log('Sorting By Highest Price');
            productList.sort((a, b) => (a.price < b.price) ? 1 : -1);
        }
        else if (selectedSortBy === 'Lowest Price') {
            console.log('Sorting By Lowest Price');
            productList.sort((a, b) => (a.price > b.price) ? 1 : -1);
        }
        else if (selectedSortBy === 'Best Rated') {
            console.log('Sorting By Best Rated');
            productList.sort((a, b) => (a.rating.rate < b.rating.rate) ? 1 : -1);
        }
    }

    if (currentSortBy === null || currentSortBy !== selectedSortBy) {
        setCurrentSortBy(selectedSortBy);
        sortProductList();

    }

    //console.log(selectedCategory);
    //console.log(selectedSortBy);

    return (
        <section class="products">
        {productList.map(product => {
            if (selectedCategory === 'All Products' || product.category.toLowerCase() === selectedCategory.toLowerCase()) {
                return (
                    <div class="product-card">
                        <div class="product-image">
                            <img src={product.image} alt='Error'/>
                        </div>
                        <div class="product-info">
                            <h5>{product.title}</h5>
                            <h6>{product.price}</h6>
                        </div>
                    </div>
                )
            } return (null);
        })}
        </section>
    )
};

export default ProductGrid;
