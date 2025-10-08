  import React, { useEffect, useRef, useState } from "react";
  import { FiMail, FiPhone, FiSearch } from "react-icons/fi";
  import { IoNotificationsOutline } from "react-icons/io5";
  import { GiMoneyStack } from "react-icons/gi";
  import { FaWallet } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";
  import Profile from "../Component/Pages/User/Profile";
import logo from '../assets/hariflyicon.svg'
  const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const profileRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
          setShowProfile(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <>
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-white border-b shadow-sm px-4 md:px-8 py-3 flex justify-between items-center z-[60]">
          {/* Logo */}
        
        <div >
                <img src={logo} alt="" className="w-24"/>
              </div>
           
          <div className="flex items-center space-x-4">
            {/* Desktop Icons (Hidden on Mobile) */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <FiSearch className="text-gray-600 text-lg" />
              </div>

              <FiMail className="text-gray-700 text-lg cursor-pointer hover:text-blue-600" />
              <FiPhone className="text-gray-700 text-lg cursor-pointer hover:text-blue-600" />

              <div className="relative">
                <IoNotificationsOutline className="text-gray-700 text-xl cursor-pointer hover:text-blue-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full px-[4px]">
                  4
                </span>
              </div>

              <div className="flex items-center space-x-1 text-gray-700">
                <GiMoneyStack className="text-xl" />
                <span className="text-sm">0</span>
              </div>

              <div className="flex items-center space-x-1 text-gray-700">
                <FaWallet className="text-lg" />
                <span className="text-sm">62.2</span>
              </div>
            </div>

            {/* Profile Avatar */}
            {/* <div
              onClick={() => setShowProfile(!showProfile)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-sm cursor-pointer hover:scale-110 transition"
            >
              SH
            </div>

            {showProfile && (
              <div
                ref={profileRef}
                className="absolute right-28 top-0 z-50 bg-white border shadow-lg  w-56"
              >
                <Profile />
              </div>
            )} */}
            <div className="relative inline-block group">
  <div
    className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-sm cursor-pointer hover:scale-110 transition"
  >
    SH
  </div>

  <div
    className="absolute top-0 right-20 z-50 w-56 bg-white border shadow-lg rounded-md p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
  >
    <Profile />
  </div>
</div>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-700 text-2xl ml-2 focus:outline-none transition-transform"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
        
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-600 text-2xl"
            >
              ✖
            </button>
          </div>

          <ul className="p-4 space-y-4 text-gray-700">
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

        {/* Overlay (for Sidebar close) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </>
    );
  };

  export default Navbar;



