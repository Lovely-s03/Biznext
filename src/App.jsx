import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Login from "./Component/Pages/Login";
import UserRoutes from "./Component/Routes/UserRoutes";
import AdminRoutes from "./Component/Routes/AdminRoutes";
import Navbar from "./Component/Navbar";
import { MdHeadset } from "react-icons/md";


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

      {!hideNavbar && (
        <button className="fixed bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-2xl hover:bg-blue-700">
          <MdHeadset />
        </button>
      )}
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
