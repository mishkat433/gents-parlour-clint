import React, { useContext, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import "./Login.css";
import google from "../../Icon/Group 573.png";
import { useForm } from 'react-hook-form';
import * as firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseConfnfig from "./firebase.config"
import { userContex } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Login = () => {
    const [loginUser, setLoginUser] = useContext(userContex)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [login, setLogin] = useState(true)
    const [faild, setFaild] = useState({ errors: "" })


    var navigat = useNavigate();
    var location = useLocation();

    firebase.initializeApp(firebaseConfnfig)
    const googleSignInHandle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                successfullyLogin(result)
                const destination = location?.state?.from || "/";
                navigat(destination)
                setFaild(faild.errors = "")

            }).catch((error) => {
                errorHandle(error)
            });
    }


    const loginHandle = (data) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                successfullyLogin(result)
                setFaild(faild.errors = "")
                const destination = location?.state?.from || "/";
                navigat(destination)
            })
            .catch((error) => {
                errorHandle(error)
            });
    }

    const createHandle = (info) => {
        const displayName = info.fName + " " + info.lName
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, info.email, info.password)
            .then((result) => {
                console.log(result)
                upDateUserName(displayName)
                setLogin(!login)
                setFaild(faild.errors = "")
            })
            .catch((error) => {
                errorHandle(error)
            });
    }


    const upDateUserName = name => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        }).catch((error) => {
            console.log(error.message)
        });
    }

    const errorHandle = type => {
        const erro = { ...faild }
        erro.errors = type.message
        setFaild(erro)
    }

    const successfullyLogin = result => {
        const success = { ...loginUser }
        success.userName = result.user.displayName
        success.userEmail = result.user.email
        success.userPhoto = result.user.photoURL
        setLoginUser(success)
    }

    // const [check, setCheck] = useState(false)
    // const showHandle=()=>{
    //     document.getElementById("Pass").type=
    // }





    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="card user">
                    {faild.errors && <p className="text-danger">{faild.errors}</p>}
                    {
                        login ? <form onSubmit={handleSubmit(loginHandle)}>
                            <input className="create mt-2" type="email" {...register("email", { required: true })} placeholder="Email" />
                            {errors.email && <span className="text-danger">email is not valid</span>}

                            <input className="create mt-2" id="pass" type="password" {...register("password", { required: true, minLength: 8 })} placeholder="Password" />
                            {errors.password && <span className="text-danger">Lessthen 8 charecters</span>}<br />
                            <input type="checkbox" name="check" id="check" /> show password

                            <input type="submit" value="Login" className="btn butt mt-2" />
                            <p className="mt-2">don't have an account? <span onClick={() => setLogin(!login)} className="text-success have">create an account</span></p>
                        </form>
                            :
                            <form onSubmit={handleSubmit(createHandle)}>
                                <input className="create mt-2" type="text" {...register("fName", { required: true })} placeholder="First name" />
                                {errors.fName && <span className="text-danger">Name is not valid</span>}

                                <input className="create mt-2" type="text" {...register("lName", { required: true })} placeholder="Last name" />
                                {errors.lName && <span className="text-danger">Name is not valid</span>}

                                <input className="create mt-2" type="Email" {...register("email", { required: true })} placeholder="Email" />
                                {errors.email && <span className="text-danger">Email is not valid</span>}

                                <input className="create mt-2" id="pass" type="password" {...register("password", { required: true, minLength: 8 })} placeholder="Password" />
                                {errors.password && <span className="text-danger">Lessthen 8 charecters</span>} <br />
                                <input type="checkbox" name="check" id="check" /> show password

                                <input type="submit" value="Create" className="btn butt mt-2" />

                                <p className="mt-2">already have an account? <span onClick={() => setLogin(!login)} className="text-success have">Login</span></p>
                            </form>
                    }
                    <hr className="hr" />
                    <button onClick={googleSignInHandle} className="butt btn mt-2"><img className="google" src={google} alt="" /> Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;