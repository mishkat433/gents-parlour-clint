import React from "react";
import "./SideBar.css";

const SideBar = ({sidebar,colors,admin}) => {

  return (
    <div className="sidebar">
      <ul className="list">
        <li>
          <p onClick={()=>sidebar("book")} className={ colors==="book" ? "active-option" : "menu"}>
            <i className="fas fa-shopping-cart"></i> Book
          </p>
        </li>
        <li>
          <p onClick={()=>sidebar("bookingList")} className={ colors==="bookingList" ? "active-option" : "menu"}>
            <i className="fas fa-shopping-bag"></i> My Booking List
          </p>
        </li>
        <li>
          <p onClick={()=>sidebar("review")} className={ colors==="review" ? "active-option" : "menu"}>
            <i className="fas fa-comment-dots"></i> Review
          </p>
        </li>
        {admin > 0 && <li>
          <p onClick={()=>sidebar("addServices")} className={ colors==="addServices" ? "active-option" : "menu"}>
            <i className="fas fa-plus"></i> Add Services
          </p>
        </li>}
        
        {admin > 0 &&<li>
          <p onClick={()=>sidebar("allBooking")} className={ colors==="allBooking" ? "active-option" : "menu"}>
            <i className="fas fa-comment-dots"></i> All booking list
          </p>
        </li>
        }
        {admin > 0 &&<li>
          <p onClick={()=>sidebar("makeAdmin")} className={ colors==="makeAdmin" ? "active-option" : "menu"}>
            <i className="fas fa-comment-dots"></i> Make Admin
          </p>
        </li>
        }
      </ul>
    </div>
  );
};

export default SideBar;
