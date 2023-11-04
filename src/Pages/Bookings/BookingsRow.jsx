import React from 'react';

const BookingsRow = ({ booking ,handleDelete}) => {
    const {_id, customerName, email, time, service, amount, img ,  } = booking;

   
    return (
        <div>
            <tr>
                <th>
                    <button  onClick={()=>handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>

                    <div className="avatar">
                        <div className="rounded w-20 h-20">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>


                </td>
                <td>
                    {service}

                </td>
                <td>{time}</td>
                <td> ${amount}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default BookingsRow;