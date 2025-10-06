import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Login from "./Component/Pages/Login";
import UserRoutes from "./Component/Routes/UserRoutes";
import AdminRoutes from "./Component/Routes/AdminRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* User Dashboard */}
          <Route path="/user/*" element={<UserRoutes />} />

          {/* Admin Dashboard */}
          <Route path="/admin/*" element={<AdminRoutes />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
