// import React, { useState } from 'react'
// import { FaFingerprint} from 'react-icons/fa'
// import { FaMoneyBillWave, FaLandmark } from "react-icons/fa";
// import { MdAccountBalanceWallet } from "react-icons/md";
// import { RiFileList3Line } from "react-icons/ri";
// import { TbReportMoney } from "react-icons/tb";
// import { FaRegBuilding, FaRegIdCard, FaMobileAlt, FaRupeeSign, FaExclamationCircle } from "react-icons/fa";
// import TransactionSection from './DTHConnection/TransactionSection';

// const services = [
//   { id: 1, name: "Withdraw", icon: <FaMoneyBillWave size={26} /> },
//   { id: 2, name: "Balance Enquiry", icon: <TbReportMoney size={26} /> },
//   { id: 3, name: "Mini Statement", icon: <RiFileList3Line size={26} /> },
//   { id: 4, name: "Cash Deposit", icon: <FaLandmark size={26} /> },
//   { id: 5, name: "Aadhaar Pay", icon: <FaFingerprint size={26} /> },
//   { id: 6, name: "Wallet Settlement", icon: <MdAccountBalanceWallet size={26} /> },
// ];
// const Aeps = () => {
//    const [active, setActive] = useState(1);
//   return (
  
//      <>
//        <div className="flex items-center gap-3 p-4 bg-white border-gray-300 mt-16 ">
//               <FaFingerprint className="text-2xl text-gray-700" />
//               <h2 className="text-lg md:text-xl font-semibold text-gray-800">
//                 AEPS
//               </h2>
//               <div className="w-10 border-b-2 border-[#000080] ml-2"></div>
              
//             </div>
//              <div className="max-w-[1400px] mx-auto mt-5 bg-white  shadow-sm overflow-hidden">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border border-gray-200">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             onClick={() => setActive(service.id)}
//             className={`flex  items-center justify-center py-4 border-r border-b sm:border-b-0 last:border-r-0 cursor-pointer transition-all duration-300 ${
//               active === service.id
//                 ? "border-b-2  text-blue-600"
//                 : "text-gray-700 hover:text-blue-500"
//             }`}
//           >
//             <div className=" text-blue-600">{service.icon}</div>
//             <p className="text-sm font-semibold text-center px-2">
//               {service.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//       <div className=" mx-auto py-5 space-y-6">
//       {/* Top Channels */}
//       <div className="grid grid-cols-1 md:grid-cols-4 py-5 px-5 gap-4 bg-white">
//         {[1, 2, 3].map((channel) => (
//           <div
//             key={channel}
//             className="border rounded-lg bg-red-100 p-4 shadow-sm text-red-600 flex flex-col gap-2"
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="font-semibold text-gray-800">Channel {channel}</h3>
//               <span className="font-medium bg-white text-red text-sm px-2 py-1 rounded-full">
//                 Inactive
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-sm font-medium">
//               <FaExclamationCircle className="text-red-500" />
//               Registration Pending
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Form + Finger Section */}
//       <div className="grid md:grid-cols-3 gap-4">
//         {/* Left Form */}
//         <div className="md:col-span-2 bg-white border rounded-lg shadow-sm p-5">
//           <div className="grid sm:grid-cols-2 gap-4">
//             {/* Bank */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Select Bank
//               </label>
//               <div className="flex items-center border rounded-md p-2 text-gray-500">
//                 <FaRegBuilding className="mr-2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search Other Banks"
//                   className="outline-none flex-1"
//                 />
//               </div>
//             </div>

//             {/* Aadhaar */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Aadhaar Number / VID
//               </label>
//               <div className="flex items-center border rounded-md p-2 text-gray-500">
//                 <FaRegIdCard className="mr-2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Enter Aadhaar Number / VID"
//                   className="outline-none flex-1"
//                 />
//               </div>
//             </div>

//             {/* Mobile */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Mobile
//               </label>
//               <div className="flex items-center border rounded-md p-2 text-gray-500">
//                 <FaMobileAlt className="mr-2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Enter 10 Digit Mobile Number"
//                   className="outline-none flex-1"
//                 />
//               </div>
//             </div>

//             {/* Amount */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Amount
//               </label>
//               <div className="flex items-center border rounded-md p-2 text-gray-500">
//                 <FaRupeeSign className="mr-2 text-gray-400" />
//                 <input
//                   type="number"
//                   placeholder="Enter Amount"
//                   className="outline-none flex-1"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Quick Amount Buttons */}
//           <div className="flex flex-wrap gap-2 mt-4">
//             {[500, 1000, 2000, 3000, 5000].map((amt) => (
//               <button
//                 key={amt}
//                 className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
//               >
//                 ₹{amt}
//               </button>
//             ))}
//           </div>

//           {/* Aadhaar Consent */}
//           <div className="flex items-start gap-2 mt-4">
//             <input type="checkbox" className="mt-1" />
//             <p className="text-sm text-gray-600">
//               I Accept the{" "}
//               <a href="#" className="text-blue-600 underline">
//                 Aadhaar Consent
//               </a>{" "}
//               |{" "}
//               <a href="#" className="text-blue-600 underline">
//                 Advisory
//               </a>
//             </p>
//           </div>

//           {/* Subsidy Link */}
//           <div className="mt-4 bg-gray-100 text-center py-2 rounded-md">
//             <a href="#" className="text-blue-600 text-sm font-medium">
//               Find your customer's subsidy linked account
//             </a>
//           </div>
//         </div>

//         {/* Right Finger Scan */}
//         <div className="bg-white border rounded-lg shadow-sm flex flex-col justify-between p-6">
//           <div className="flex flex-col items-center justify-center flex-grow">
//             <FaExclamationCircle size={60} className="text-black mb-2" />
//             <p className="text-red-600 font-medium">Not Connected</p>
//             <p className="text-gray-500 text-sm mt-1">No drivers found</p>
//           </div>
//           <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-full transition">
//             SCAN FINGER
//           </button>
//         </div>
//       </div>
//     </div>
//      <TransactionSection/>
//      </>
  
//   )
// }

// export default Aeps



import React, { useState } from 'react'
import { FaFingerprint } from 'react-icons/fa'
import { FaMoneyBillWave, FaLandmark } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import { FaRegBuilding, FaRegIdCard, FaMobileAlt, FaRupeeSign, FaExclamationCircle } from "react-icons/fa";
import TransactionSection from './DTHConnection/TransactionSection';
import { useNavigate } from 'react-router-dom';
// import balanceImg from '../../assets/aeps-balance.png'






const Aeps = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

   const handleClick13 = () => {
    navigate("/user/banking/aadhar-pay"); 
  };

  const services = [
  { id: 1, name: "Withdraw", icon: <FaMoneyBillWave size={26} /> },
  { id: 2, name: "Balance Enquiry", icon: <TbReportMoney size={26} /> },
  { id: 3, name: "Mini Statement", icon: <RiFileList3Line size={26}  /> },
  { id: 4, name: "Cash Deposit", icon: <FaLandmark size={26} /> },
  { id: 5, name: "Aadhaar Pay" ,  icon: <FaFingerprint size={26} onClick={handleClick13}  /> },
  { id: 6, name: "Wallet Settlement", icon: <MdAccountBalanceWallet size={26} /> },
];

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white border-gray-300 mt-16">
        <FaFingerprint className="text-2xl text-gray-700" />
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">AEPS</h2>
        <div className="w-10 border-b-2 border-[#000080] ml-2"></div>
      </div>

      {/* Services Tabs */}
      <div className="max-w-[1400px] mx-auto mt-5 bg-white shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border border-gray-200">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActive(service.id)}
              className={`flex items-center justify-center py-4 border-r border-b sm:border-b-0 last:border-r-0 cursor-pointer transition-all duration-300 ${
                active === service.id
                  ? "border-b-2 text-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              <div className="text-blue-600">{service.icon}</div>
              <p className="text-sm font-semibold text-center px-2">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conditional Section */}
      <div className="mx-auto py-5 space-y-6">
        {/* If Withdraw selected */}
        {active === 1 && (
          <>
            {/* Top Channels */}
            <div className="grid grid-cols-1 md:grid-cols-4 py-5 px-5 gap-4 bg-white">
              {[1, 2, 3].map((channel) => (
                <div
                  key={channel}
                  className="border rounded-lg bg-red-100 p-4 shadow-sm text-red-600 flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">Channel {channel}</h3>
                    <span className="font-medium bg-white text-red text-sm px-2 py-1 rounded-full">
                      Inactive
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <FaExclamationCircle className="text-red-500" />
                    Registration Pending
                  </div>
                </div>
              ))}
            </div>

            {/* Form + Finger Section */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Left Form */}
              <div className="md:col-span-2 bg-white border rounded-lg shadow-sm p-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Bank */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Bank
                    </label>
                    <div className="flex items-center border rounded-md p-2 text-gray-500">
                      <FaRegBuilding className="mr-2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search Other Banks"
                        className="outline-none flex-1"
                      />
                    </div>
                  </div>

                  {/* Aadhaar */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Aadhaar Number / VID
                    </label>
                    <div className="flex items-center border rounded-md p-2 text-gray-500">
                      <FaRegIdCard className="mr-2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter Aadhaar Number / VID"
                        className="outline-none flex-1"
                      />
                    </div>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile
                    </label>
                    <div className="flex items-center border rounded-md p-2 text-gray-500">
                      <FaMobileAlt className="mr-2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter 10 Digit Mobile Number"
                        className="outline-none flex-1"
                      />
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount
                    </label>
                    <div className="flex items-center border rounded-md p-2 text-gray-500">
                      <FaRupeeSign className="mr-2 text-gray-400" />
                      <input
                        type="number"
                        placeholder="Enter Amount"
                        className="outline-none flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Amount Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[500, 1000, 2000, 3000, 5000].map((amt) => (
                    <button
                      key={amt}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                {/* Aadhaar Consent */}
                <div className="flex items-start gap-2 mt-4">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-sm text-gray-600">
                    I Accept the{" "}
                    <a href="#" className="text-blue-600 underline">
                      Aadhaar Consent
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-blue-600 underline">
                      Advisory
                    </a>
                  </p>
                </div>

                {/* Subsidy Link */}
                <div className="mt-4 bg-gray-100 text-center py-2 rounded-md">
                  <a href="#" className="text-blue-600 text-sm font-medium">
                    Find your customer's subsidy linked account
                  </a>
                </div>
              </div>

              {/* Right Finger Scan */}
              <div className="bg-white border rounded-lg shadow-sm flex flex-col justify-between p-6">
                <div className="flex flex-col items-center justify-center flex-grow">
                  <FaExclamationCircle size={60} className="text-black mb-2" />
                  <p className="text-red-600 font-medium">Not Connected</p>
                  <p className="text-gray-500 text-sm mt-1">No drivers found</p>
                </div>
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-full transition">
                  SCAN FINGER
                </button>
              </div>
            </div>
          </>
        )}

        {/* If Balance Enquiry selected */}
        {active === 2 && (
          <div className="flex justify-center items-center bg-white py-10 rounded-lg shadow-sm">
        
             <section className="w-full bg-gray-50 flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-7xl space-y-6">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((channel) => (
            <div
              key={channel}
              className="bg-red-100 text-red-600 border rounded-md shadow-sm p-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  Channel {channel}
                </h3>
                <span className="text-sm bg-white border border-red-300 text-red-600 rounded-full px-3 py-0.5">
                  Inactive
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <FaExclamationCircle className="text-red-500" />
                Registration Pending
              </div>
            </div>
          ))}
        </div>

        {/* ===== Main Form + Finger Section ===== */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* ==== Left Form ==== */}
          <div className="md:col-span-2 bg-white border rounded-lg shadow-sm p-6 space-y-4">
            {/* Bank */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Select Bank
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaRegBuilding className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search Other Banks"
                  className="outline-none flex-1 text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Aadhaar */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Aadhaar Number / VID
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaRegIdCard className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter Aadhaar Number / VID"
                  className="outline-none flex-1 text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mobile
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaMobileAlt className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter 10 Digit Mobile Number"
                  className="outline-none flex-1 text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                I Accept the{" "}
                <a href="#" className="text-blue-600 underline">
                  Aadhaar Consent
                </a>{" "}
                |{" "}
                <a href="#" className="text-blue-600 underline">
                  Advisory
                </a>
              </p>
            </div>

            {/* Subsidy Link */}
            <div className="bg-gray-100 rounded-md text-center py-2 mt-3">
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Find your customer's subsidy linked account
              </a>
            </div>
          </div>

          {/* ==== Right Finger Scan ==== */}
          <div className="bg-white border rounded-lg shadow-sm p-6 flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center flex-grow justify-center">
              <FaExclamationCircle size={60} className="text-black mb-2" />
              <p className="text-red-600 font-medium">Not Connected</p>
              <p className="text-gray-500 text-sm mt-1">No drivers found</p>
            </div>
            <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-full transition">
              SCAN FINGER
            </button>
          </div>
        </div>
      </div>
    </section>
          </div>
        )}
      </div>

      <TransactionSection />
    </>
  );
};

export default Aeps;
