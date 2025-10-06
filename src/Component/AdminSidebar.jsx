import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const AdminSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-purple-800 to-pink-900 text-white flex flex-col shadow-xl">
      <h2 className="text-2xl font-bold p-6 border-b border-white/20">
        Admin Panel
      </h2>
      <nav className="flex-1 p-4 space-y-3">
        <NavLink
          to="/admin/manage-users"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg hover:bg-white/20 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          👥 Manage Users
        </NavLink>
        <NavLink
          to="/admin/reports"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg hover:bg-white/20 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          📊 Reports
        </NavLink>
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg hover:bg-white/20 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          ⚙️ Settings
        </NavLink>
      </nav>
      <button
        onClick={handleLogout}
        className="m-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
