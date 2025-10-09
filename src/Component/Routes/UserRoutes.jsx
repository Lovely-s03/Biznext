import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "../PrivateRoute";
import UserDashboard from "../Pages/UserDashboard";
import Dashboard from "../Pages/User/Dashboard/Dashboard";
import AyushPay from "../Pages/User/AyushPay";
import BankCSP from "../Pages/User/BankCSP";
import DTHConnection from "../Pages/User/DTHConnection/DTHConnection";
import Dth from "../Pages/User/DTHConnection/Dth";
import Ott from "../Pages/User/OttSubscription/Ott";
import SellEarn from "../Pages/User/SellEarn/SellEarn";
import DigiGold from "../Pages/User/DigiGold";
import Loan from "../Pages/User/Loan";
import Mobile from "../Pages/User/Mobile";

import TaxFiling from "../Pages/User/TaxFiling";
import DthRecharge from "../Pages/User/DthRecharge";
import Insurance from "../Pages/User/Insurance";
import Travel from "../Pages/User/Travel/Travel";

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ayushpay" element={<AyushPay />} />
        <Route path="/bankcsp" element={<BankCSP />} />
        <Route path="/bankcsp" element={<BankCSP />} />
        <Route path="/digigold" element={<DigiGold />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/recharge/mobile" element={<Mobile />} />
        <Route path="/dth" element={<Dth />} />
        <Route path="/taxfiling" element={<TaxFiling />} />

        <Route path="/recharge/dth" element={<DthRecharge />} />

        <Route path="/dth" element={<Dth />} />
        <Route path="/ottsubscription" element={<Ott />} />
        <Route path="/sellearn" element={<SellEarn />} />
        <Route path="/insurance" element={<Insurance />} />

       

<Route path="/recharge/dth" element={<DthRecharge/>} />
  <Route path="/travel" element={<Travel/>} />     
<Route path="/dth" element={<Dth/>} />
  <Route path="/ottsubscription" element={<Ott/>} /> 
  <Route path="/sellearn" element={<SellEarn/>} />     
      </Route>
    </Routes>
  );
};

export default UserRoutes;
