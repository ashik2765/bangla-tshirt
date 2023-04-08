import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { useLoaderData } from "react-router-dom";
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
            toast('You have already added this t-shirt');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveToCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id)

        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                    handleRemoveToCart={handleRemoveToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;