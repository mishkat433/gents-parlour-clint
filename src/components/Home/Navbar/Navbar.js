import React, { useContext } from 'react';
import "./Navbar.css";
import navLogo from "../../../Image/NavLogo.PNG"
import { Link, NavLink } from 'react-router-dom';
import { userContex } from '../../../App';
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
    const [loginUser, setLoginUser] = useContext(userContex)

    const logoutHandle = () => {
        const auth = getAuth()
        signOut(auth).then(() => {
            const out = { ...loginUser }
            out.userName = ""
            out.userEmail = ""
            out.userPhoto = ""
            setLoginUser(out)
        }).catch((error) => {
            console.log(error.message)
        });


    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand" ><img className="NavLogo" src={navLogo} alt="logo not found" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto link text-danger">
                        <li className="nav-item ">
                            <NavLink to="/" className={nav => nav.isActive ? "nav-link mx-2 active" : "nav-link mx-2"} >Home</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/dd" className={nav => nav.isActive ? "nav-link mx-2 active" : "nav-link mx-2"}>Our Portfolio</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="ss" className={nav => nav.isActive ? "nav-link mx-2 active" : "nav-link mx-2"}>out team</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/contac" className={nav => nav.isActive ? "nav-link mx-2 active" : "nav-link mx-2"} >Contact Us</NavLink>
                        </li>
                        {
                            loginUser.userEmail !== "" ? <li className="nav-item dropdown mx-2">
                                <p className="nav-link text-dark cursor dropdown-toggle text-center" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="userImage mr-1" src={loginUser.userPhoto} alt="Nt-error" />{loginUser.userName}
                                </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <p className="dropdown-item cursor text-center" onClick={logoutHandle} >Logout</p>
                                    <Link to="/dashboard" className="dropdown-item cursor">Dashborad</Link>

                                </div>
                            </li>
                                :
                                <li className="nav-item mx-2">
                                    <Link to="/login" className=" radious text-white" href="#">Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;