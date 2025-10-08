import React from "react";
import {
  FaBell,
  FaUsers,
  FaSignOutAlt,
  FaUserAlt,
  FaWallet,
} from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import {
  MdAccountBox,
  MdHeadset,
  MdOutlineSettings,
} from "react-icons/md";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { IoWallet } from "react-icons/io5";
import { TbHelpSquareFilled } from "react-icons/tb";
import { useAuth } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/img.JPG";

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
     
      localStorage.removeItem("auth");

      logout();

      document.body.style.opacity = "0.7";

      setTimeout(() => {
        document.body.style.opacity = "1";
        navigate("/login");
      }, 400);
    }
  };

  const menuItems = [
    { label: "Profile", icon: <FaUserAlt /> },
    { label: "My Wallet", icon: <IoWallet /> },
    { label: "Reports Account", icon: <MdAccountBox /> },
    { label: "Deal Sheet", icon: <FaWallet /> },
    { label: "Help Center", icon: <TbHelpSquareFilled /> },
    { label: "Notifications", icon: <FaBell /> },
    { label: "My Team", icon: <FaUsers /> },
    { label: "GST Reimbursement", icon: <HiOutlineReceiptTax /> },
    { label: "Custom Settings", icon: <MdOutlineSettings /> },
    { label: "Suvidha DMT Txn", icon: <GiMoneyStack /> },
    { label: "Logout", icon: <FaSignOutAlt />, onClick: handleLogout },
  ];

  return (
    <div className="min-h-screen w-[310px] flex justify-center items-start bg-gray-100 py-5 px-4">
      <div className="w-full bg-white shadow-xl relative overflow-hidden rounded-xl">

        {/* 🔹 Header Section */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-center relative">
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img
                src={img}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-3 text-lg font-semibold text-white">
              Shivam Singh
            </h2>
            <p className="text-blue-100 text-sm">Welcome Back 👋</p>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-38px] w-[90%] bg-white rounded-xl shadow-lg flex justify-between px-5 py-3">
            <div className="text-center flex-1 border-r">
              <p className="text-gray-600 text-sm">Wallet Balance</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">₹ 62.20</h3>
            </div>
            <div className="text-center flex-1">
              <p className="text-gray-600 text-sm">Coins</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">0</h3>
            </div>
          </div>
        </div>

        <div className="mt-16 pb-16 px-4 h-[420px] overflow-y-auto custom-scrollbar">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
            >
              <div className="text-[#000080] text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-gray-800 text-[15px] font-medium group-hover:text-blue-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <button className="fixed bottom-6 right-6 bg-[#000080] hover:bg-blue-700 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white text-3xl transition-transform duration-300 hover:scale-110">
          <MdHeadset />
        </button>
      </div>
    </div>
  );
};

export default Profile;
