import React from 'react';
import ProductModal from './ProductModal';
import {useState} from 'react';

const ProductGrid = ({productList, selectedCategory, selectedSortBy, searchValue}) => {

    const [clickedProduct, setClickedProduct] = useState(null);
    const [show, setShow] = useState(false);

    let sorted_products = [...productList];
    
    if (selectedCategory !== 'All Products') {
        sorted_products = sorted_products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    
    if (searchValue) {
        sorted_products = sorted_products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
        console.log('after search value filtering: ', sorted_products);
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

    const handleClick = (event) => {
        const prod_index = event.currentTarget.getAttribute("data-index");
        setClickedProduct(sorted_products[prod_index]);
        setShow(true);
    }
    
    const closeModal = () => {
        console.log('close');
        setShow(false);        
    }

    return (
        <div>
            <ProductModal clickedProduct={clickedProduct} closeModal={closeModal} show={show}/>
            <section className="products">
            {sorted_products.map((product, index) => {
                if (selectedCategory === 'All Products' || product.category.toLowerCase() === selectedCategory.toLowerCase()) {
                    return (
                            <div className="product-card" data-index={index} onClick={handleClick}>
                                
                                <div className="product-image">
                                    <img src={product.image} alt='Error'/>
                                </div>
                                <div className="product-info">
                                    <h5>{product.title}</h5>
                                    <h6>{product.price}</h6>
                                    <h6>{product.rating.rate} &#9734; ({product.rating.count})</h6>
                                </div>
                            </div>
                        
                    )
                } return (null);
            })}
            </section>
        </div>
    )
};

export default ProductGrid;
