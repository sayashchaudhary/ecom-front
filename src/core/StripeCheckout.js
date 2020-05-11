import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";

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

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <button className="btn btn-success">Pay with strip</button>
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
