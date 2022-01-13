import React, { createContext, useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import ContacUs from './components/Home/ContacUs/ContacUs';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContex= createContext()

const App = () => {
  const [loginUser, setLoginUser]= useState({
     userEmail: "",
  })

  return (
    <div>
      <userContex.Provider value={[loginUser, setLoginUser]}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard/>
              </PrivateRoute>}>
            </Route>
            <Route path="/contac" element={<ContacUs/> }></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </userContex.Provider>
    </div>
  );
};

export default App;