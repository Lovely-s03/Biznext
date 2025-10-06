import React, { useState } from "react";
import { FiMail, FiPhone, FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm px-4 md:px-8 py-3 flex justify-between items-center">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <div className="text-blue-600 text-3xl font-bold">B</div>
          <span className="font-semibold text-gray-800 text-xl">
            iz<span className="text-blue-600">next</span>
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <FiSearch className="text-gray-600 text-lg" />
        </div>

        {/* Mail */}
        <FiMail className="text-gray-700 text-lg cursor-pointer hover:text-blue-600" />

        {/* Phone */}
        <FiPhone className="text-gray-700 text-lg cursor-pointer hover:text-blue-600" />

        {/* Notification with Badge */}
        <div className="relative">
          <IoNotificationsOutline className="text-gray-700 text-xl cursor-pointer hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full px-[4px]">
            4
          </span>
        </div>

        {/* Money Bag */}
        <div className="flex items-center space-x-1 text-gray-700">
          <GiMoneyStack className="text-xl" />
          <span className="text-sm">0</span>
        </div>

        {/* Wallet */}
        <div className="flex items-center space-x-1 text-gray-700">
          <FaWallet className="text-lg" />
          <span className="text-sm">62.2</span>
        </div>

        {/* Profile Avatar */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-sm cursor-pointer">
          AK
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl ml-2 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Optional) */}
      {menuOpen && (
        <div className="absolute top-14 right-0 w-48 bg-white border rounded-md shadow-md md:hidden p-3">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FiMail /> Mail
            </li>
            <li className="flex items-center gap-2">
              <FiPhone /> Call
            </li>
            <li className="flex items-center gap-2">
              <IoNotificationsOutline /> Notifications
            </li>
            <li className="flex items-center gap-2">
              <GiMoneyStack /> Money: 0
            </li>
            <li className="flex items-center gap-2">
              <FaWallet /> Wallet: 62.2
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
