import React, { useEffect, useState } from 'react';
import '../styles.css';
import Base from "./Base";
import { loadCart } from "./helper/cartHelper";
import Card from "./Card";

const Cart = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(loadCart)
    }, []);

    const loadAllProducts = () => {
        return (
            <div>
                <h2>Section to load products</h2>
                {products.map((product, index) => {
                    return (
                        <Card key={index}
                              product={product}
                              removeFromCart={true}
                              addToCart={false}
                        />
                    )
                })}
            </div>
        )
    };

    const loadCheckout = () => {
        return (
            <div>
                <h2>Section of checkout</h2>
            </div>
        )
    };

    return (
        <Base title="Cart Page" description="Ready to checkout">
            <div className="row text-center">
                <div className="col-6">{loadAllProducts()}</div>
                <div className="col-6">{loadCheckout()}</div>
            </div>
        </Base>
    )
};

export default Cart;
