import React, { useContext, useEffect, useState } from 'react';
import { userContex } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import AddServices from '../AddServices/AddServices';
import Booking from '../Booking/Booking';
import BookingList from '../BookingList/BookingList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import SideBar from '../SideBar/SideBar';
import "./Dashboard.css"

const Dashboard = () => {
    const [isSelect, setIsSelect]= useState({change:"book"})
    // const [spinner,setSpinner]= useState(true)
    const [loginUser, setLoginUser]= useContext(userContex)
    const [findAdmin, setFindAdmn] = useState([]);

    useEffect(()=>{
      fetch(`https://secret-journey-10093.herokuapp.com/findAdmin/${loginUser.userEmail}`)
      .then(res=>res.json())
      .then(data=>{
        setFindAdmn(data)
      })
    },[])
    
    const sidebarHandle=(e)=>{
        if(e==="book"){changeDashboard(e)} 
        if(e==="bookingList"){changeDashboard(e)} 
        if(e==="order"){changeDashboard(e)}
        if(e==="addServices"){changeDashboard(e)}
        if(e==="makeAdmin"){changeDashboard(e)}  
        if(e==="review"){changeDashboard(e)}  
        if(e==="allBooking"){changeDashboard(e)}  
    }

    const changeDashboard=ss=>{
        const chang= {...isSelect}
        chang.change=ss
        setIsSelect(chang)
    }


    return (
        <div className="dashborad">
            <Navbar></Navbar>
            <div className="row">
                <div className="col-lg-2 bg-light mb-2">
                    <SideBar sidebar={sidebarHandle} colors={isSelect.change} admin={findAdmin.length}></SideBar>
                </div>
                <div className="col-lg-10">
                <div className="dashborad-right p-3 bg-light">
                    {
                        isSelect.change==="book" && <Booking></Booking>
                    }
                    {
                        isSelect.change==="bookingList" && <BookingList></BookingList>
                    }
                    {
                        isSelect.change==="review" && <Review></Review>
                    }
                    {
                        isSelect.change==="order" && <OrderList></OrderList>
                    }
                    {
                        isSelect.change==="addServices" && <AddServices></AddServices>
                    }
                    {
                        isSelect.change==="allBooking" && <OrderList></OrderList>
                    }
                    {
                        isSelect.change==="makeAdmin" && <MakeAdmin></MakeAdmin>
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;