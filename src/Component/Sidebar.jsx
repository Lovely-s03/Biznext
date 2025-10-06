import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdOutlinePayments,
  MdOutlineLiveTv,
  MdOutlineAddCircleOutline,
} from "react-icons/md";
import { FaUsers, FaUniversity, FaRupeeSign } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsBroadcast, BsShieldCheck } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";
import { BiSolidGift } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard className="text-xl" />, path: "dashboard" },
    { name: "AyushPay", icon: <FaRupeeSign className="text-xl" />, path: "/ayushpay" },
    { name: "Bank CSP", icon: <FaUsers className="text-xl" />, path: "/bank-csp" },
    { name: "Banking Services", icon: <AiOutlineBank className="text-xl" />, hasArrow: true, path: "/banking-services" },
    { name: "DTH Connection", icon: <BsBroadcast className="text-xl" />, path: "/dth" },
    { name: "Digi Gold", icon: <HiOutlineCurrencyRupee className="text-xl" />, path: "/digigold" },
    { name: "E-Gift Card", icon: <BiSolidGift className="text-xl" />, path: "/giftcard" },
    { name: "Insurance", icon: <BsShieldCheck className="text-xl" />, path: "/insurance" },
    { name: "Loan", icon: <FaUniversity className="text-xl" />, path: "/loan" },
    { name: "OTT Subscriptions", icon: <MdOutlineLiveTv className="text-xl" />, path: "/ott" },
    { name: "Recharge", icon: <MdOutlinePayments className="text-xl" />, hasArrow: true, path: "/recharge" },
    { name: "Sell & Earn", icon: <IoSettingsOutline className="text-xl" />, path: "/sell-earn" },
    { name: "Add Service", icon: <MdOutlineAddCircleOutline className="text-xl" />, path: "/add-service" },
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
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center justify-between px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer transition-all"
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  {item.hasArrow && <IoIosArrowForward />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
