import React from "react";
import { Routes, Route } from "react-router-dom";

import ManageUsers from "../Pages/Admin/ManageUsers";
import Reports from "../Pages/Admin/Reports";
import Settings from "../Pages/Admin/Settings";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import PrivateRoute from "../PrivateRoute";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute role="admin">
            <AdminDashboard />
          </PrivateRoute>
        }
      >
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
