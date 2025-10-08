import React from "react";
import { Routes, Route } from "react-router-dom";


import PrivateRoute from "../PrivateRoute";
import UserDashboard from "../Pages/UserDashboard";
import Dashboard from "../Pages/User/Dashboard/Dashboard";
import AyushPay from "../Pages/User/AyushPay";
import BankCSP from "../Pages/User/BankCSP";
import DTHConnection from "../Pages/User/DTHConnection/DTHConnection";
import Dth from "../Pages/User/DTHConnection/Dth";
import DigiGold from "../Pages/User/DigiGold";
import Loan from "../Pages/User/Loan";

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
        <Route path="/bankcsp" element={<BankCSP/>}/>
        <Route path="/bankcsp" element={<BankCSP/>}/>
        <Route path="/digigold" element={<DigiGold/>} />
        <Route path="/loan" element={<Loan/>} />



       

<Route path="/dth" element={<Dth/>} />
       
      </Route>
    </Routes>
  );
};

export default UserRoutes;
