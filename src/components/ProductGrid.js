import React from 'react';
//import {useState} from 'react';

const ProductGrid = ({productList, selectedCategory, selectedSortBy}) => {

    //const [currentSortBy, setCurrentSortBy] = useState(null);
    
    let sorted_products = [...productList];
    
    if (selectedCategory !== 'All Products') {
        sorted_products = sorted_products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    const sortProductList = () => {
        if (selectedSortBy === 'Highest Price') {
            console.log('Sorting By Highest Price');
            sorted_products.sort((a, b) => (a.price < b.price) ? 1 : -1);
        }
        else if (selectedSortBy === 'Lowest Price') {
            console.log('Sorting By Lowest Price');
            sorted_products.sort((a, b) => (a.price > b.price) ? 1 : -1);
        }
        else if (selectedSortBy === 'Best Rated') {
            console.log('Sorting By Best Rated');
            sorted_products.sort((a, b) => (a.rating.rate < b.rating.rate) ? 1 : -1);
        }
    }

    /*if (currentSortBy === null || currentSortBy !== selectedSortBy) {
        setCurrentSortBy(selectedSortBy);
        

    }*/

    sortProductList();
    //console.log(selectedCategory);
    //console.log(selectedSortBy);
    
    console.log(sorted_products);

    return (
        <section className="products">
        {sorted_products.map(product => {
            if (selectedCategory === 'All Products' || product.category.toLowerCase() === selectedCategory.toLowerCase()) {
                return (
                    <div className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt='Error'/>
                        </div>
                        <div className="product-info">
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
