import React from "react";
import { UpdatePassword } from "../../component/userProfile/UpdatePassword";
import UserProfile from "../../component/userProfile/UserProfile";
import AdminLayout from "../../layout/AdminLayout";

const AdminProfile = () => {
  return (
    <AdminLayout>
      <h3 className="p-4">Admin Profile</h3>

      {/* user profile form */}
      <UserProfile />
      <hr />
      <UpdatePassword />

      {/* user update profile form */}
    </AdminLayout>
  );
};

export default AdminProfile;
