import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Login from "./Component/Pages/Login";
import UserRoutes from "./Component/Routes/UserRoutes";
import AdminRoutes from "./Component/Routes/AdminRoutes";
import Navbar from "./Component/Navbar";


function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar/>}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* User Dashboard */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* Admin Dashboard */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
