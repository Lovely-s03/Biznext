import React from "react";
import { FaWallet, FaBell, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdHeadset, MdHelpCenter, MdOutlineSettings } from "react-icons/md";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { useAuth } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/img.JPG"

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-end py-6 px-6">
      {/* Header */}
      <div className="w-[350px] bg-white rounded-xl shadow-md p-5">
        {/* Logo + Welcome */}
        <div className="flex items-center space-x-3 border-b pb-4">
          <img
            src={img}
            alt="Biznext"
            className="w-14 h-14 rounded-full border"
          />
          <div>
            <h2 className="text-blue-600 font-bold text-lg">Welcome</h2>
            <p className="text-gray-800 font-semibold text-lg">
              Shivam singh 
            </p>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="mt-4 text-center">
          <div className="flex justify-center items-center space-x-2">
            <FaWallet className="text-3xl text-gray-700" />
            <div>
              <p className="text-sm font-medium text-gray-700">Wallet Balance</p>
              <h3 className="text-xl font-bold text-gray-900">₹ 62.2</h3>
            </div>
          </div>
        </div>

        {/* Coins Section */}
        <div className="mt-5 grid grid-cols-2 border rounded-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center p-4 border-r">
            <GiMoneyStack className="text-3xl text-yellow-500" />
            <p className="text-gray-700 font-medium">Coins</p>
            <span className="text-lg font-bold text-gray-900">0</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <GiMoneyStack className="text-3xl text-red-500" />
            <p className="text-red-500 font-medium">Coin Expiring</p>
            <span className="text-lg font-bold text-gray-900">0</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
    <div className="w-[350px] h-[400px] mt-6 bg-white rounded-xl shadow-md divide-y overflow-y-auto">
  {[
    { label: "Profile", icon: <FaWallet /> },
    { label: "My Wallet", icon: <FaWallet /> },
    { label: "Reports - Accounts", icon: <GiMoneyStack /> },
    { label: "Reports - Services", icon: <GiMoneyStack /> },
    { label: "Deal Sheet", icon: <FaWallet /> },
    { label: "Help Center", icon: <MdHelpCenter /> },
    { label: "Notifications", icon: <FaBell /> },
    { label: "My Team", icon: <FaUsers /> },
    { label: "GST Reimbursement", icon: <HiOutlineReceiptTax /> },
    { label: "Custom Settings", icon: <MdOutlineSettings /> },
    { label: "Suvidha DMT Txn", icon: <GiMoneyStack /> },
    { label: "Logout", icon: <FaSignOutAlt />, onClick: handleLogout },
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center space-x-3 p-4 hover:bg-gray-50 cursor-pointer"
      onClick={item.onClick}
    >
      <span className="text-gray-600 text-xl">{item.icon}</span>
      <span className="text-gray-800 text-sm font-medium">{item.label}</span>
    </div>
  ))}
</div>


      {/* Floating Support Button (bottom-right screen) */}
      <button className="fixed bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-2xl hover:bg-blue-700">
  <MdHeadset />
</button>
    </div>
  );
};

export default Profile;
