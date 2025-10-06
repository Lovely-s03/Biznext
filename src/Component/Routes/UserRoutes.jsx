import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/User/Home";
import Profile from "../Pages/User/Profile";
import Settings from "../Pages/User/Setting";
import PrivateRoute from "../PrivateRoute";
import UserDashboard from "../Pages/UserDashboard";
import Dashboard from "../Pages/User/Dashboard/Dashboard";

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
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
