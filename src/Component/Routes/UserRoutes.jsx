import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "../PrivateRoute";
import UserDashboard from "../Pages/UserDashboard";
import Dashboard from "../Pages/User/Dashboard/Dashboard";
import AyushPay from "../Pages/User/AyushPay";
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
       
      </Route>
    </Routes>
  );
};

export default UserRoutes;
