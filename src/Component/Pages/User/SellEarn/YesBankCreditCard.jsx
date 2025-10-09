    import React from "react";
    import yesBank from '../../../../assets/YES bank.png'
    import yes from '../../../../assets/YES Bank.svg'
    import au from '../../../../assets/AU Bank.svg'
import { FaPhone, FaUser, FaUserAlt } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
    const YesBankCreditCard = () => {
    return (
        <section className="w-full bg-gray-50 flex justify-center items-center mt-5">
        <div className="w-full max-w-7xl bg-white p-8">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Card Image */}
            <div className="flex flex-col items-center">
                <img
                src={yesBank}
                alt="Yes Bank Credit Card"
                className=" drop-shadow-lg"
                />
            
            </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-5"></div>

            {/* Form Section */}
            <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex gap-2">
                <img src={yes} alt="YES Bank" className="w-32" />
                <img src={au} alt="AU Bank" className="w-32" />
            </div>

            <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0 w-full max-w-4xl">
                
                 <div className="relative flex-1">
        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 text-sm rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
            
                <div className="relative flex-1">
        <BsFillPhoneFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border border-gray-300 text-sm rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
            </div>
             </div>
 <div className="flex items-center justify-center gap-3 mt-5">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow">
                SHARE LINK
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow">
                OPEN LINK
                </button>
            </div>
           
           
        </div>
        </section>
    );
    };

    export default YesBankCreditCard;
