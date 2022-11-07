import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import {AuthContext} from '../../contexts/Authprovider/AuthProvider'

const Checkout = () => {
    const {title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2 className='text-5xl'>You are about to order: {title}</h2>
            <h3 className="text-3xl">Total Price: $ {price}</h3>
            <form>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input type="text" placeholder="Fast Name" className="input input-bordered w-full" />
            <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
            <input type="text" placeholder="Your Number" className="input input-bordered w-full" />
            <input type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
            </div>
            <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
            </form>
        </div>
    );
};

export default Checkout;