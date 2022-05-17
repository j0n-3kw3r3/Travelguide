import './App.css';
import Nav from './component/Nav';
import React from 'react'
import View from './component/View';
import Signin from './component/signin/Signin';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './component/page/profile/Profile';
import Registration from './component/Registration';
import BrandContext from './component/brand/BrandContext';
import Destination from './component/page/Destination';
import About  from './component/page/About';
import Service from './component/page/Service';
import Hotel from './component/page/Hotel';
import Reservation from './component/page/Reservation';
import { AuthProvider } from './firebase-config/Auth';
import ProtectedRoute from './firebase-config/ProtectedRoute';
import { ProfileContext } from './component/ProfileContext';

function App() {
  return (
    <BrandContext>
    <AuthProvider>
      <ProfileContext>


    <Router className="App">
      
         
          <div className=" text-xs md:text-sm " >
           <Routes>
            <Route   path="login"  element={<Signin/>}/>
            <Route   path="profile"  element={<ProtectedRoute><Profile/></ProtectedRoute> }/>
            <Route   path="about"  element={<About/>}/>
            <Route   path="services"  element={<Service/>}/>
            <Route   path="destination"  element={<Destination/>}/>
            <Route   path="reservations"  element={<Reservation/>}/>
            <Route   path="hotel"  element={<Hotel/>}/>x
            <Route   path="registration"  element={<Registration/>}/>
            <Route   path="/"  element={<View/>}/>
            
            </Routes>
          <Nav/>
          </div>
      
    </Router>
      </ProfileContext>
    </AuthProvider>
    </BrandContext>
  );
}

export default App;
