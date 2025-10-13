import React, { useState } from "react";
import { FaFingerprint, FaExchangeAlt, FaMobileAlt, FaHandHoldingHeart, FaFileInvoice, FaCreditCard, FaUniversity, FaPiggyBank, FaWallet, FaChevronDown, FaChevronUp, FaTv, FaGift, FaSatelliteDish, FaBusAlt, FaHandHoldingUsd, FaUndoAlt, FaMoneyCheckAlt, FaShieldAlt, FaIdCard, FaHeartbeat } from "react-icons/fa";
import { PiCashRegisterFill } from "react-icons/pi";
import { IoUmbrella } from "react-icons/io5";
import { BsBagHeart, BsBank2, BsFillCreditCardFill } from "react-icons/bs";
import { FaTrainSubway } from "react-icons/fa6";
import { AiFillGold } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const [showMore, setShowMore] = useState(false);
   const navigate = useNavigate();

   const handleClick = () => {
    navigate("/user/banking/money-transfer");
  };

   const handleClick1 = () => {
    navigate("/user/recharge/mobile"); 
  };

    const handleClick2 = () => {
    navigate("/user/banking/aadhar-pay"); 
  };
   const handleClick3 = () => {
    navigate("/user/dth"); // target new page route
  };
   const handleClick4 = () => {
    navigate("/user/ottsubscription"); // target new page route
  };
   const handleClick5 = () => {
    navigate("/user/insurance"); // target new page route
  };
   const handleClick6 = () => {
    navigate("/user/loan"); // target new page route
  };
  const handleClick7 = () => {
    navigate("/user/travel"); // target new page route
  };
  const handleClick8 = () => {
    navigate("/user/digigold"); // target new page route
  };
  const handleClick9 = () => {
    navigate("/user/sellearn"); // target new page route
  };
  const handleClick10 = () => {
    navigate("/user/bankcsp"); 
  };
  const handleClick11 = () => {
    navigate("/user/creditCard"); 
  };
  
  const services = [
    { id: 1, icon: <FaFingerprint size={40} className="text-[#000080]" /> , title: "AEPS" },
     { id: 20, icon: <BsFillCreditCardFill size={40} className="text-[#000080]" onClick={handleClick11}/>, title: "Credit Card" },
    { id: 2, icon: <FaExchangeAlt size={40} className="text-[#000080]" onClick={handleClick} />, title: "Money Transfer" },
    { id: 3, icon: <FaMobileAlt size={40} className="text-[#000080]" onClick={handleClick1} />, title: "Recharge" },
    { id: 5, icon: <FaCreditCard size={40} className="text-[#000080]" onClick={handleClick2} />, title: "Aadhaar Pay" },
    { id: 16, icon: <FaSatelliteDish size={40} className="text-[#000080]" onClick={handleClick3} />, title: "DTH Connection" },
    { id: 13, icon: <FaTv size={40} className="text-[#000080]" onClick={handleClick4} />, title: "OTT Subscription" },
    { id: 12, icon: <FaHeartbeat size={40} className="text-[#000080]" onClick={handleClick5} />, title: "Insurance" },
      { id: 23, icon: <FaHandHoldingUsd size={40} className="text-[#000080]" onClick={handleClick6} />, title: "Loan" },
    { id: 18, icon: <FaBusAlt size={40} className="text-[#000080]" onClick={handleClick7} />, title: "Bus" },
    { id: 19, icon: <AiFillGold size={40} className="text-[#000080]" onClick={handleClick8} />, title: "Digigold" },
    { id: 15, icon: <BsBagHeart size={40} className="text-[#000080]" onClick={handleClick9} />, title: "Sell & Earn" },
    { id: 22, icon: <BsBank2 size={40} className="text-[#000080]" onClick={handleClick10} />, title: "Bank CSP" },
    { id: 4, icon: <FaFileInvoice size={40} className="text-[#000080]" />, title: "Bill Payments" },
    { id: 6, icon: <FaUniversity size={40} className="text-[#000080]" />, title: "Bank Account" },
    { id: 7, icon: <FaPiggyBank size={40} className="text-[#000080]" />, title: "Deposit Money" },
    { id: 8, icon: <FaWallet size={40} className="text-[#000080]" />, title: "Wallet Settlement" },
    { id: 9, icon: <FaIdCard size={40} className="text-[#000080]" />, title: "Pan Card" },
    { id: 10, icon: <PiCashRegisterFill size={40} className="text-[#000080]"/>, title: "Cash Collection" },
    { id: 11, icon: <FaShieldAlt size={40} className="text-[#000080]" />, title: "LIC Premium" },
    // { id: 14, icon: <FaGift size={40} className="text-[#000080]" />, title: "E-Gift Card" },
    
    { id: 17,  icon: <FaTrainSubway size={40} className="text-[#000080]" />, title: "IRCTC" },
    { id: 21 , icon: <FaHandHoldingHeart size={40} className="text-[#000080]" />, title: "Ayushman Bharat" },
        { id: 24, icon: <FaMoneyCheckAlt size={40} className="text-[#000080]" />, title: "Loan Repay" },
  ];

  const visibleServices = showMore ? services : services.slice(0, 8);

  return (
    <div className="max-w-[1400px] mx-auto py-6">
      <motion.div 
        className="bg-white rounded-xl shadow-md p-6"
        layout
      >
        {/* Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8 gap-4" layout>
          <AnimatePresence>
            {visibleServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {service.icon}
                <p className="mt-2 text-gray-800 font-medium text-center">{service.title}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-6">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaChevronDown className="text-gray-600" size={22} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
