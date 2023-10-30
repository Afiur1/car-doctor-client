import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {

    const service = useLoaderData()
    const { _id, title, price } = service
    const {user} = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
    
        console.log('user:', user);
        console.log('_id:', _id);
        console.log('price:', price);
    
        if (user) {
            const order = {
                customerName: name,
                customerEmail: email,
                amount: price,
                service: _id,
                time: date
            };
    
            console.log('order:', order);
        } else {
            console.error("User is not defined.");
        }
    };
    
    
    return (
        <div>
            <h1>Services: {title} </h1>

         <form onSubmit= {handleBookService} >
            <div  className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name"  defaultValue={user?.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email"  defaultValue={user?.email} className="input input-bordered" required />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" placeholder="date"  name="date"  className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Amount</span>
                    </label>
                    <input type="text" defaultValue={ '$'+ price} className="input input-bordered" required />
                    
                </div>
            </div>
                <div className="form-control mt-6">
                    
                    <input className="btn btn-primary btn-block" type="submit" value="booking confirme" />
                </div>
         </form>

            <div className="card-body">
                
            </div>
        </div>

    );
};

export default CheckOut;