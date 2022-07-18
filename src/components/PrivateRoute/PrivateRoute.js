import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContex } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [loginUser, setLoginUser] = useContext(userContex)

    let location = useLocation()
    if (loginUser.userEmail) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} /> || setLoginUser;
};

export default PrivateRoute;