import React, { useState } from 'react';

const AddServices = () => {
  const [spinner, setSpinner] = useState(false);
  const [addServices, setAddServices] = useState({})
  const [file, setFile] = useState()

  const setHandle = (ev) => {
    const set = { ...addServices }
    set[ev.target.name] = ev.target.value
    setAddServices(set)
  }
  const fileUploadHandle = (fil) => {
    const newFile = fil.target.files[0]
    setFile(newFile)
  }

  const submitHandle = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('serviceName', addServices.serviceName);
    formData.append('price', addServices.price);
    formData.append('description', addServices.description);

    if (addServices.serviceName !== " " && addServices.description !== " ") {
      setSpinner(true)
      fetch("https://journey20093.herokuapp.com//addServices", {
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(result => {
          if (result) {
            setSpinner(false)
          }
        })
    }
    e.preventDefault()
  }

  return (
    <div>
      <h5>Add services</h5>
      <form onSubmit={submitHandle}>
        <div className="form-row">
          <div className="col-lg-12 mb-2">
            <input onChange={setHandle} type="text" name="serviceName" className="form-control" placeholder="Services name" />
          </div>
          <div className="col-lg-6 ">
            <input onChange={setHandle} type="number" name="price" className="form-control" placeholder="Price" />
          </div>
          <div className="col-lg-6 ">
            <input type="file" onChange={fileUploadHandle} className="form-control" name="file" />
          </div>
          <div className="col-lg-12 mt-2">
            <textarea className="form-control" onChange={setHandle} name="description" cols="30" rows="4" placeholder="Description"></textarea>
          </div>
        </div>
        {
          spinner && <p className="text-center text-success">Loading...</p>
        }
        <div className="col-lg-12 mt-2">
          <input className="btn header-btn sendbtn" type="submit" Value="add services" />
        </div>

      </form>
    </div>
  );
};

export default AddServices;