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
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard className="text-xl" />, path: "dashboard" },
    { name: "AyushPay", icon: <FaRupeeSign className="text-xl" />, path: "ayushpay" },
    { name: "BankCSP", icon: <FaUsers className="text-xl" />, path: "bankcsp" },
    // { name: "Banking Services", icon: <AiOutlineBank className="text-xl" />, hasArrow: true, path: "/banking-services" },
    { name: "DTH Connection", icon: <BsBroadcast className="text-xl" />, path: "dth" },
    { name: "Digi Gold", icon: <HiOutlineCurrencyRupee className="text-xl" />, path: "digigold" },
    // { name: "E-Gift Card", icon: <BiSolidGift className="text-xl" />, path: "/giftcard" },
    // { name: "Insurance", icon: <BsShieldCheck className="text-xl" />, path: "/insurance" },
    { name: "Loan", icon: <FaUniversity className="text-xl" />, path: "loan" },
    { name: "OTT Subscriptions", icon: <MdOutlineLiveTv className="text-xl" />, path: "/ott" },
    { name: "Recharge", icon: <MdOutlinePayments className="text-xl" />, hasArrow: true, path: "/recharge" },
    { name: "Sell & Earn", icon: <IoSettingsOutline className="text-xl" />, path: "/sell-earn" },
    { name: "Add Service", icon: <MdOutlineAddCircleOutline className="text-xl" />, path: "/add-service" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden p-4 bg-white shadow flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <h1 className="text-lg font-semibold">Menu</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r shadow-lg z-50 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static`}
      >
        <div className="flex flex-col py-6 pt-20 overflow-y-auto h-full">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)} // close sidebar on click (mobile)
                  className="flex items-center justify-between px-6 py-3 text-gray-700 hover:text-[#FFA500]  transition-all"
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


