import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";

const UserDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet /> {/* Where nested routes render */}
      </main>
    </div>
  );
};

export default UserDashboard;
