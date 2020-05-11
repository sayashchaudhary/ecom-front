import React from 'react';
import '../styles.css';
import { API } from '../backend';
import Base from "./Base";
import Card from "./Card";

const Home = () => {
    console.log('API Is', API);
    return (
        <Base title="Home Page" description="Welcome to t-shirt store">
            <div className="row text-center">
                <div className="col-4">
                    <Card/>
                </div>
            </div>
        </Base>
    )
};

export default Home;
