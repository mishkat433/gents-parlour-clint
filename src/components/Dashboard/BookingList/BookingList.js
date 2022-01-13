import React, { useContext, useEffect, useState } from 'react';
import { userContex } from '../../../App';

const BookingList = () => {
    const [getMyBooking, setMyBooking]= useState([])
    const [spinner,setSpinner]= useState(true);
    const [loginUser, setLoginUser]= useContext(userContex)

    useEffect(()=>{
        fetch(`https://secret-journey-10093.herokuapp.com/getMyBooking/${loginUser.userEmail}`)
        .then(res=>res.json())
        .then(result=>{
            setMyBooking(result)
            setSpinner(false)
        })
    },[])
    return (
        <div>
            <h5>My booking list</h5>
            <table className="table table-borderless bg-white">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">email ID</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Voluteer list</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                     
                    {
                    getMyBooking.map((items, index) =>
                        <tr ke={index}>
                            <td>{items.fName} {items.lName} </td>
                            <td>{items.address}</td>
                            <td>{items.bookingDate}</td>
                            <td>{items.services}</td>
                            <td>{items.Phone}</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            
            {
                spinner && <p className="text-center mt-4">loading...</p>
            }
        </div>
    );
};

export default BookingList;