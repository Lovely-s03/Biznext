import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdOutlinePayments,
  MdOutlineLiveTv,
  MdOutlineAddCircleOutline,
} from "react-icons/md";
import { FaUsers, FaUniversity, FaRupeeSign, FaBus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsBroadcast, BsShieldCheck } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard className="text-xl" />, path: "dashboard" },
    { name: "AyushPay", icon: <FaRupeeSign className="text-xl" />, path: "ayushpay" },
    { name: "BankCSP", icon: <FaUsers className="text-xl" />, path: "bankcsp" },

    // ✅ Banking Services with dropdown
    {
      name: "Banking Services",
      icon: <AiOutlineBank className="text-xl" />,
      hasArrow: true,
      subMenu: [
        { name: "AEPS", path: "banking/aeps" },
        { name: "Money Transfer", path: "banking/money-transfer" },
        { name: "Aadhar Pay", path: "banking/aadhar-pay" },
      ],
    },

    { name: "DTH Connection", icon: <BsBroadcast className="text-xl" />, path: "dth" },
    { name: "Digi Gold", icon: <HiOutlineCurrencyRupee className="text-xl" />, path: "digigold" },
    { name: "Insurance", icon: <BsShieldCheck className="text-xl" />, path: "insurance" },
    { name: "Loan", icon: <FaUniversity className="text-xl" />, path: "loan" },
    { name: "OTT Subscriptions", icon: <MdOutlineLiveTv className="text-xl" />, path: "ottsubscription" },

    {
      name: "Recharge",
      icon: <MdOutlinePayments className="text-xl" />,
      hasArrow: true,
      subMenu: [
        { name: "Mobile", path: "recharge/mobile" },
        { name: "DTH", path: "recharge/dth" },
      ],
    },

    { name: "Sell & Earn", icon: <IoSettingsOutline className="text-xl" />, path: "sellearn" },
    { name: "TaxFiling", icon: <FaFileInvoiceDollar className="text-xl" />, path: "TaxFiling" },

    {
      name: "Travel",
      icon: <FaBus className="text-xl" />,
      hasArrow: true,
      subMenu: [{ name: "Bus", path: "travel" }],
    },

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
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:text-[#FFA500] transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <IoIosArrowForward
                        className={`transition-transform ${
                          openDropdown === item.name ? "rotate-90 text-[#FFA500]" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Content */}
                    {openDropdown === item.name && (
                      <ul className="pl-12 space-y-1 bg-gray-50">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-gray-600 hover:text-[#FFA500]"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:text-[#FFA500] transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    {item.hasArrow && <IoIosArrowForward />}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
