import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingsRow from './BookingsRow';

const Bookings = () => {
    const {user}=  useContext(AuthContext)
    const [bookings, setBookings]= useState([])

    const url =`http://localhost:5000/bookings?email=${user.email}`
    useEffect ( () =>{
        fetch (url)
        .then(res=>res.json())
        .then(data=> setBookings(data))
    } , [])

    const handleDelete =id =>{
        const proceed= confirm('Confirm?')
        if (proceed){
         fetch(`http://localhost:5000/bookings/${id}`, {
             method: 'DELETE'
         })
         .then(res=> res.json())
         .then(data=>{
             console.log(data)
             if (data. deletedCount> 0){
                 alert('Deleted Successfully')

                 const remaining = bookings.filter(booking=>booking._id !== id)
                 setBookings(remaining)
             }
 
         })
 
        }
     }
    return (
        <div>
            <h2 className='text-5xl '>Your BBOKING: {bookings.length} </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
      {
        bookings.map(booking=><BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete} ></BookingsRow>)
      }
      
      
    </tbody>
    
   
    
  </table>
</div>
        </div>
    );
};

export default Bookings;