import React, { useState } from 'react';
import "./Contact.css"

const Contact = () => {

    const [messages, setMessage] = useState({
        text: ""
    })

    const submitHandle = (ev) => {

        try {
            if (messages.text !== "") {
                fetch("https://journey20093.herokuapp.com/contactMessage", {
                    method: "POST",
                    headers: { "Content-Type": "Application/json" },
                    body: JSON.stringify(messages)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result) {
                            const res = { ...messages }
                            res.text = ""
                            setMessage(res)
                            alert("Message send successfully")
                        }
                    })
            }
        }
        catch (err) {
            alert(err.messages)
            console.log(err.messages)
        }
        ev.preventDefault()
    }


    const changeHandle = (e) => {
        if (e.target.name === "fName") {
            if (e.target.value !== "") {
                const msData = { ...messages }
                msData[e.target.name] = e.target.value
                setMessage(msData)
            }
        }
        if (e.target.name === "lName") {
            if (e.target.value !== "") {
                const msData = { ...messages }
                msData[e.target.name] = e.target.value
                setMessage(msData)
            }
        }
        if (e.target.name === "email") {
            if (e.target.value !== "") {
                const msData = { ...messages }
                msData[e.target.name] = e.target.value
                setMessage(msData)
            }
        }
        if (e.target.name === "phone") {
            if (e.target.value !== "") {
                const msData = { ...messages }
                msData[e.target.name] = e.target.value
                setMessage(msData)
            }
        }
        if (e.target.name === "text") {
            if (e.target.value !== "") {
                const msData = { ...messages }
                msData.text = e.target.value
                setMessage(msData)
            }
        }

    }

    return (
        <div className="contact" style={{ backgroundColor: "#f6f6ff" }}>
            <div className="container">
                <h1 className="section-head text-center pt-4 mb-5">contact <span className="text-danger   ">us</span></h1>
                <form onSubmit={submitHandle}>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 mb-2">
                            <input onChange={changeHandle} type="text" name="fName" className="form-control" placeholder="First name" required />
                        </div>
                        <div className="col-lg-5 mb-2">
                            <input onChange={changeHandle} type="text" name="lName" className="form-control" placeholder="Last name" />
                        </div><br />
                        <div className="col-lg-5 mb-2">
                            <input onChange={changeHandle} type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </div>
                        <div className="col-lg-5 mb-2">
                            <input onChange={changeHandle} type="text" name="phone" className="form-control" placeholder="Phone Number" required />
                        </div>
                        <div className="col-lg-10">
                            <textarea onChange={changeHandle} name="text" className="form-control text" cols="30" rows="5" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn header-btn mt-lg-4 send">send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;