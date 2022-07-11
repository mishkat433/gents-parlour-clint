import React, { useContext, useEffect, useState } from "react";
import { userContex } from "../../../App";
import PaymentProcess from "../PaymentPrecess/PaymentProcess";

const Booking = () => {
  const [loginUser, setLoginUser] = useContext(userContex)
  const [loadServices, setLoadServices] = useState([])
  const [disp, setDisp] = useState(null)
  const [bookingData, setFormData] = useState({
    email: loginUser.userEmail,
    appointmentDate: new Date(),
  })

  const paymentHandleSuccess = (payId) => {
    if (payId !== "") {
      const sendDB = { ...bookingData, paymentID: payId }
      fetch("https://journey20093.herokuapp.com/booking", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(sendDB)
      })
        .then(res => res.json())
        .then(result => {
          if (result) {
            timing()
            document.getElementById("resetForm").reset()
          }
        })
    }
  }

  const timing = () => {
    setTimeout(() => setDisp(null), 5000);
  }

  const backHandle = () => {
    setDisp(null)
  }

  const bookingHandle = (e) => {

    if (bookingData.phone !== "" && bookingData.services !== "") {
      setDisp(bookingData.services)
    }
    e.preventDefault()
  }
  const setHandle = (ev) => {
    const set = { ...bookingData }
    set[ev.target.name] = ev.target.value
    setFormData(set)
  }

  useEffect(() => {
    fetch("https://journey20093.herokuapp.com/getservices")
      .then(res => res.json())
      .then(result => setLoadServices(result))
  }, [])


  return (
    <div className="Appointment">
      <h5>Book</h5>
      <form id="resetForm" onSubmit={bookingHandle} style={{ display: disp ? "none" : "block" }}>
        <div className="form-row">
          <div className="col-lg-6">
            <input onChange={setHandle} type="text" name="fName" className="form-control" placeholder="First name" />
          </div>
          <div className="col-lg-6 ">
            <input onChange={setHandle} type="text" name="lName" className="form-control" placeholder="Last name" />
          </div>
          <div className="col-lg-6 mt-2">
            <input type="email" className="form-control" value={loginUser.userEmail} readOnly />
          </div>
          <div className="col-lg-6 mt-2">
            <input onChange={setHandle} type="number" name="Phone" className="form-control" placeholder="Phone" required />
          </div>
          <div className="col-lg-6 mt-2">
            <input onChange={setHandle} type="text" name="address" className="form-control" placeholder="Address" />
          </div>
          <div className="col-lg-6 mt-2">
            <input onChange={setHandle} type="date" name="bookingDate" className="form-control" />
          </div>
          <div className="col-lg-12 mt-2">
            <select onChange={setHandle} name="services" className="custom-select mr-sm-2" required>
              <option selected value="" >Choose your services</option>
              {
                loadServices.map((data, index) => <option value={data.name} key={index}>{data.name}, Price = ${data.price}</option>)
              }
            </select>
          </div>
        </div>
        <div className="col-lg-12 mt-2">
          <input className="btn header-btn sendbtn" type="submit" defaultValue="Booking" />
        </div>
      </form>
      <div className="col-lg-6 mt-2" style={{ display: disp ? "block" : "none" }}>
        <PaymentProcess payHandle={paymentHandleSuccess} backHandles={backHandle}></PaymentProcess>
      </div>

    </div>
  );
};

export default Booking;
