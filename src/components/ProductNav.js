import React from 'react';
import {useState} from 'react';
import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';

const ProductNav = ({productList}) => {
    
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSortBy, setSelectedSortBy] = useState(null);

    const categoryList = productList.map(category => {
        return category.category.charAt(0).toUpperCase() + category.category.slice(1)
    }).filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);

    categoryList.unshift('All Products')
    console.log(categoryList);
    
    const sortingList = ['----------','Highest Price', 'Lowest Price', 'Best Rated'];

    const handleCategorySelect = (event) => {
        setSelectedCategory(event.target.value)
    }

    const handleSortBySelect = (event) => {
        setSelectedSortBy(event.target.value)
    }

    return (
        <div>
            <nav className="product-filter">
    
                <h1>{selectedCategory ? selectedCategory : categoryList[0]}</h1>
    
                <div className="sort">
                    

                    <div className="collection-sort">
                        <label>Filter by:</label>
                        <select id='categorySelect' value={selectedCategory} onChange={handleCategorySelect}>
                            {categoryList.length > 0 && 
                                categoryList.map(category => (
                                    <option value={category}>{category}</option>
                                ))}
                        </select>
                    </div>
        
                    <div className="collection-sort">
                        <label>Sort by:</label>
                        <select id='sortSelect' value={selectedSortBy} onChange={handleSortBySelect}>
                            {sortingList.map(method => (
                                <option value={method}>{method}</option>
                            ))}
                        </select>
                    </div>

                    <div className='collection-sort'>
                        <label>Look For:</label>
                        <SearchBar />
                    </div>
                </div>
            </nav>
            <ProductGrid 
                productList={productList} 
                selectedCategory={selectedCategory ? selectedCategory : categoryList[0]}
                selectedSortBy={selectedSortBy ? selectedSortBy : sortingList[0]}
            />
        </div>
      )
};

export default ProductNav;
