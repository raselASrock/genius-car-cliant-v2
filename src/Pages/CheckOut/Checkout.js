import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import {AuthContext} from '../../contexts/Authprovider/AuthProvider'

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert('Phone Numbers should be 10 characters or longer')
        // }
        // else{

        // }
        fetch('https://genius-car-server-swart-three.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)  
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledge){
                    alert('Order Placed Successfully')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h2 className='text-5xl'>You are about to order: {title}</h2>
            <h3 className="text-3xl">Total Price: $ {price}</h3>
            <form onSubmit={handlePlaceOrder}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name='firstName' type="text" placeholder="Fast Name" className="input input-bordered w-full" />
            <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
            <input name='phone' type="text" placeholder="Your Number" className="input input-bordered w-full" required />
            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
            <input className='btn btn-error' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;