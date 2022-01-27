import React from 'react';

const ProductNav = ({productList}) => {
  
    const categoryList = productList.map(category => {
        return category.category
    }).filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);

    console.log(categoryList);

    const sortingList = ['Highest Price', 'Lowest Price', 'Best Rated'];
  
    return (
        <div>
            <nav class="product-filter">
    
                <h1>Jackets</h1>
    
                <div class="sort">
    
                <div class="collection-sort">
                    <label>Filter by:</label>
                    <select id='categorySelect'>
                        {categoryList.length > 0 && 
                            categoryList.map(category => (
                                <option value={category}>{category}</option>
                            ))}
                    </select>
                </div>
    
                <div class="collection-sort">
                    <label>Sort by:</label>
                    <select>
                        <option value="/">Featured</option>
                    </select>
                </div>
                </div>
            </nav>
        </div>
      )
};

export default ProductNav;
