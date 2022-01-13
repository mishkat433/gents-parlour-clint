import React, { useContext, useState } from "react";
import { userContex } from "../../../App";

const Review = () => {
  const [loginUser, setLoginUser] = useContext(userContex);
  const [spinner,setSpinner]= useState(false);
  const [bookingData, setFormData] = useState({
    emal: loginUser.userEmail,
    photo: loginUser.userPhoto,
  });

  const submitHandle = (e) => {
    if (bookingData.text !== "" && bookingData.fName) {
      setSpinner(true)
      fetch("https://secret-journey-10093.herokuapp.com/sendReview",{
        method: "POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(bookingData)
      })
      .then(res=>res.json())
      .then(result=>{
        if(result){
          setSpinner(false)
        }
      })
    }
    e.preventDefault();
  };
  const setHandle = (ev) => {
    const set = { ...bookingData };
    set[ev.target.name] = ev.target.value;
    setFormData(set);
  };

  return (
    <div>
      <h5>Review</h5>
      <form onSubmit={submitHandle}>
        <div className="form-row">
          <div className="col-lg-6">
            <input
              onChange={setHandle}
              type="text"
              name="fName"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-lg-6 mb-2">
            <input
              onChange={setHandle}
              type="text"
              name="title"
              className="form-control"
              placeholder="company name/designation"
            />
          </div>
          <div className="col-lg-12 mb-2">
            <textarea
              onChange={setHandle}
              name="text"
              className="form-control text"
              cols="30"
              rows="5"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        {
          spinner && <p className="text-center text-success">sending...</p>
        }
        
        <div className="col-lg-12 mt-2">
          <input
            className="btn header-btn sendbtn"
            type="submit"
            defaultValue="Booking"
          />
        </div>
      </form>
    </div>
  );
};

export default Review;
