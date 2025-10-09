import React from "react";
import { Routes, Route } from "react-router-dom";


import PrivateRoute from "../PrivateRoute";
import UserDashboard from "../Pages/UserDashboard";
import Dashboard from "../Pages/User/Dashboard/Dashboard";
import AyushPay from "../Pages/User/AyushPay";
import BankCSP from "../Pages/User/BankCSP";
import DigiGold from "../Pages/User/DigiGold";
import Loan from "../Pages/User/Loan";
import Mobile from "../Pages/User/Mobile";
import Dth from "../Pages/User/DTHConnection/Dth";
import TaxFiling from "../Pages/User/TaxFiling";
import DthRecharge from "../Pages/User/DthRecharge";

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
        <Route path="/recharge/mobile" element={<Mobile/>} />
        <Route path="/dth" element={<Dth/>} />
        <Route path="/taxfiling" element={<TaxFiling />} />



       

<Route path="/recharge/dth" element={<DthRecharge/>} />
       
      </Route>
    </Routes>
  );
};

export default UserRoutes;
