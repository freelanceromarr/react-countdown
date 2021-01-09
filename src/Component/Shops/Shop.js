import React from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const products = [
        {productId: 100, productName: 'Banana', price: 10},
        {productId: 100, productName: 'Banana', price: 10},
        {productId: 100, productName: 'Banana', price: 10},
        {productId: 100, productName: 'Banana', price: 10},
        {productId: 100, productName: 'Banana', price: 10},
        {productId: 100, productName: 'Banana', price: 10}
    ]


    return (
        <div>
            {
                products.map(product => <Products product={product}></Products>)
            }
        </div>
    );
};

export default Shop;