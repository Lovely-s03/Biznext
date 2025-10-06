import React, { useState } from "react";
import {
  MdDashboard,
  MdOutlinePayments,
  MdOutlineLiveTv,
  MdOutlineAddCircleOutline,
} from "react-icons/md";
import { FaUsers, FaUniversity, FaRupeeSign, FaGift } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsBroadcast, BsShieldCheck } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSolidGift } from "react-icons/bi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard className="text-xl" /> },
    { name: "AyushPay", icon: <FaRupeeSign className="text-xl" /> },
    { name: "Bank CSP", icon: <FaUsers className="text-xl" /> },
    { name: "Banking Services", icon: <AiOutlineBank className="text-xl" />, hasArrow: true },
    { name: "DTH Connection", icon: <BsBroadcast className="text-xl" /> },
    { name: "Digi Gold", icon: <HiOutlineCurrencyRupee className="text-xl" /> },
    { name: "E-Gift Card", icon: <BiSolidGift className="text-xl" /> },
    { name: "Insurance", icon: <BsShieldCheck className="text-xl" /> },
    { name: "Loan", icon: <FaUniversity className="text-xl" /> },
    { name: "OTT Subscriptions", icon: <MdOutlineLiveTv className="text-xl" /> },
    { name: "Recharge", icon: <MdOutlinePayments className="text-xl" />, hasArrow: true },
    { name: "Sell & Earn", icon: <IoSettingsOutline className="text-xl" /> },
    { name: "Add Service", icon: <MdOutlineAddCircleOutline className="text-xl" /> },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden p-4 bg-white shadow flex justify-between items-center">
        <h1 className="text-lg font-semibold">Menu</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static top-0 left-0 h-screen w-64 bg-white border-r shadow-lg transform transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col py-6">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer transition-all"
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                {item.hasArrow && <IoIosArrowForward />}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
