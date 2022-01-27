import React from 'react';
import {useState, useEffect} from 'react';
import ProductContent from '../components/ProductContent'
const Products = () => {
  
  const API_PRODUCTS_URL = "https://fakestoreapi.com/products";
  const [fetchError, setFetchError] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
        try {
        const response = await fetch(API_PRODUCTS_URL);
        if (!response.ok) throw response;
        const data = await response.json();
        console.log(data[0].title);
        setProductList(data);
        setFetchError(null);
        } catch (err) {
        console.log("Error fetching data from API: ", err);
        setFetchError(err);
        }
    }

    fetchProducts();
  }, []);

  return (
    <div>
        <ProductContent productList={productList}/>
    </div>
  )
};

export default Products;

