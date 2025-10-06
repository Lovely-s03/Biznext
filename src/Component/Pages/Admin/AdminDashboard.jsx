import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet /> {/* Nested admin pages */}
      </main>
    </div>
  );
};

export default AdminDashboard;
