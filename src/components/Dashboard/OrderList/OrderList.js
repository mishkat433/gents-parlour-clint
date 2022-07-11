import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const OrderList = () => {
    const [getBookingData, setBookingData] = useState([])
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch("https://journey20093.herokuapp.com/getBooking")
            .then(res => res.json())
            .then(result => {
                setBookingData(result)
                setSpinner(false)
            })
    }, [getBookingData])

    return (
        <div>
            <h5>All order list</h5>
            <table className="table table-borderless bg-white">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Services</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        getBookingData.map((items, index) =>
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
                spinner && <p className="justify-content-center"><CircularProgress /></p>
            }
        </div>
    );
};

export default OrderList;