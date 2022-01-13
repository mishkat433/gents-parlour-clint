import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [makeAdmin, setMakeAdmin] = useState({email:""});
  const [allAdmin, setAllAdmn] = useState([]);
  const [spinner,setSpinner]= useState(true);

  const submitHandle = (e) => {
    if (makeAdmin.email!=="") {
        fetch("https://secret-journey-10093.herokuapp.com/makeAdmin",{
        method:"POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(makeAdmin)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert("Admin make successfully")
            }
        })
    }
    e.preventDefault();
  };
  const adminMake=(even)=>{
      const eml={...makeAdmin}
      eml.email= even.target.value
      setMakeAdmin(eml)
  }

  useEffect(()=>{
    fetch("https://secret-journey-10093.herokuapp.com/getAdmin")
      .then(res=>res.json())
      .then(data=>{
        setAllAdmn(data)
        setSpinner(false)
      })
  },[makeAdmin,allAdmin])

  const deleteHandle=(id)=>{
    const confirm= window.confirm("Do you want to delete this Admin?")
    if(confirm){
    fetch(`https://secret-journey-10093.herokuapp.com/delete/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(result=>{
        if(result){
            alert("Admin delete successfully")
        }
    })
    }
  }

  return (
    <div>
      <h5>MakeAdmin</h5>
      <form onSubmit={submitHandle}>
        <div className="form-row">
          <div className="col-lg-6 mt-2">
            <input  type="email" name="email" placeholder="Email" onChange={adminMake} className="form-control" />
          </div>
        </div>
        <div className="col-lg-12 mt-2">
          <input
            className="btn header-btn"
            type="submit"
            defaultValue="Make admin"
          />
        </div>
      </form>
      <hr  className="mt-5"/>
      <h5>Admin List</h5>
        {spinner && <p>Loading...</p>}
        {
            allAdmin.map((data,i)=> <p key={i}>{data.email} <span className="text-danger cursor" onClick={()=>deleteHandle(data._id)}> &nbsp; &nbsp; Delete</span></p>  )
        }
    </div>
  );
};

export default MakeAdmin;
