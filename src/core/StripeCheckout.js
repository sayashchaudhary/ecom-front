import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderHelper";

const StripeCheckout = ({ products, setReload = f => f, reload = undefined }) => {

    const [data, setData] = useState({
        loading: false,
        success: false,
        error: '',
        address: ''
    });

    const token = isAuthenticated() && isAuthenticated().token;
    const userId = isAuthenticated() && isAuthenticated().user._id;

    const getFinalPrice = () => {
        let amount = 0;
        products.map(p => {
            return amount = amount + p.price
        });
        return amount
    };

    const makePayment = (token) => {
        const body = {
            token,
            products
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        return fetch(`${API}/stripepayment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
            .then(res => {
                console.log(res);
                const { status } = res;
                console.log('STATUS', status);
                cartEmpty(() => {
                    console.log('Cart');
                });
                setReload(!reload)
            })
            .catch(err => console.log(err));
    };

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <StripeCheckoutButton token={makePayment}
                                  stripeKey="pk_test_EKGbt5ftzHUH6gBFhNaSAdsl00TMBxn4B6"
                                  amount={getFinalPrice() * 100}
                                  name="Buy T-Shirts"
                                  shippingAddress
                                  billingAddress
            >
                <button className="btn btn-success">Pay with strip</button>
            </StripeCheckoutButton>
        ) : (
            <Link to='/signin'>
                <button className="btn btn-warning">Signin</button>
            </Link>
        )
    };

    return (
        <div>
            <h2>Stripe Checkout {getFinalPrice()}</h2>
            {showStripeButton()}
        </div>
    )
};

export default StripeCheckout;
