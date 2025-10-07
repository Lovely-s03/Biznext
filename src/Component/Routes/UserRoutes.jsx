import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/User/Home";
import Profile from "../Pages/User/Profile";
import Settings from "../Pages/User/Setting";
import PrivateRoute from "../PrivateRoute";
import UserDashboard from "../Pages/UserDashboard";
import Dashboard from "../Pages/User/Dashboard/Dashboard";
import AyushPay from "../Pages/User/AyushPay";
import DTHConnection from "../Pages/User/DTHConnection/DTHConnection";
import Dth from "../Pages/User/DTHConnection/Dth";

const UserRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <PrivateRoute role="user">
            <UserDashboard />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/ayushpay" element={<AyushPay />} />


<Route path="/dth" element={<Dth/>} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
