import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaMobileAlt, FaReceipt, FaUndo } from "react-icons/fa";
import DateFormate from "./DateFormate";
import { PiBankFill } from "react-icons/pi";
import {  useNavigate } from "react-router-dom";

const MoneyTransfer = () => {
  const [activeTab, setActiveTab] = useState("Yes Bank");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const tabs = ["Yes Bank", "Channel 2", "Claim Refund"];


  const transactions = [
  {
    id: 1,
    date: "2024-04-21",
    senderMobile: "9876543210",
    transactionId: "TXN0011223344",
    amount: "1500",
    accountNumber: "123456789012",
    bankRRN: "RRN12345678",
    status: "Completed",
    // actions/fields for buttons can remain as properties or handled directly in UI logic:
    // checkStatus, receipt, complain, refund handled in UI, not as fields
  },
  {
    id: 2,
    date: "2024-05-10",
    senderMobile: "9123456789",
    transactionId: "TXN0011223345",
    amount: "2500",
    accountNumber: "098765432109",
    bankRRN: "RRN87654321",
    status: "Pending",
  },
  {
    id: 3,
    date: "2024-05-18",
    senderMobile: "9988776655",
    transactionId: "TXN0011223346",
    amount: "1800",
    accountNumber: "564738291012",
    bankRRN: "RRN56473829",
    status: "Failed",
  },
];
const statusClass = {
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Failed: "bg-red-100 text-red-800",
  // Add more status styles as needed
};

  const handleClick = () => {
    navigate("/banking/aadhar-pay"); // 👈 your target route
  };


  return (
    <>
    <div className="w-full  mx-auto  mt-[45px] bg-white ">
            <div className="flex items-center gap-3 p-4 border-gray-300 ">
              <PiBankFill className="text-2xl text-gray-700" />
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Domestic Money Transfer
              </h2>
              <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
            </div>
          </div>
    
    <div className="w-full px-2 py-6">
      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-t-lg overflow-hidden border border-gray-200 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center py-3 text-sm md:text-base font-medium transition-all duration-200 ${
              activeTab === tab
                ? "border-b-2 border-blue-600 bg-white text-gray-900"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white shadow-md border border-t-0 border-gray-200 rounded-b-lg p-8 text-center">
        {/* Yes Bank Tab */}
        {activeTab === "Yes Bank" && (
          <div>
            <p className="text-gray-800 mb-6">
              To activate <span className="font-semibold">Yes Bank DMT</span>,
              kindly complete your eKYC.
            </p>
            <button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all">
              E-KYC
            </button>
          </div>
        )}

        {/* Channel 2 Tab */}
        {activeTab === "Channel 2" && (
          <div className="flex flex-col items-center justify-center space-y-6 w-full">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              {/* Label */}
              <label className="text-gray-800 font-medium w-full md:w-1/4 text-center md:text-left">
                Enter Sender's Mobile Number
              </label>

              {/* Input Field */}
              <div className="flex w-full md:w-1/2 items-center bg-white border border-gray-300 rounded-md shadow-sm px-3">
                <FaMobileAlt className="text-gray-400 text-lg mr-2" />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full outline-none py-2 text-gray-700"
                />
              </div>

              {/* Proceed Button */}
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all w-full md:w-auto"
                onClick={() => alert(`Proceeding with ${mobile}`)}
              >
                PROCEED
              </button>
            </div>
          </div>
        )}

        {/* Claim Refund Tab */}
        {activeTab === "Claim Refund" && (
          <div>
            <p className="text-gray-800 mb-6">
              Claim refunds for failed transactions here.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all">
              Claim Now
            </button>
          </div>
        )}
      </div>
    </div>
    <div className="bg-white rounded-lg  mt-8 ">
        <DateFormate />
    </div>


    <div className="overflow-x-auto bg-white rounded-lg shadow mt-6">
  <table className="min-w-full divide-y divide-gray-200 text-sm">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-2 py-3 text-left font-semibold text-black ">Date</th>
        <th className="px-2 py-3 text-left font-semibold text-black ">Sender Mobile</th>
        <th className="px-2 py-3 text-left font-semibold text-black ">Transaction ID</th>
        <th className="px-2 py-3 text-left font-semibold text-black ">Amount</th>
        <th className="px-2 py-3 text-left font-semibold text-black ">Account Number</th>
        <th className="px-2 py-3 text-left font-semibold text-black ">Bank RRN</th>
        <th className="px-2 py-3 text-left font-semibold text-black ">Status</th>
        <th className="px-2 py-3 text-center font-semibold text-black ">Check Status</th>
        <th className="px-2 py-3 text-center font-semibold text-black ">Receipt</th>
        <th className="px-2 py-3 text-center font-semibold text-black ">Complain</th>
        <th className="px-2 py-3 text-center font-semibold text-black ">Refund</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
      {transactions.map((txn) => (
        <tr key={txn.id} className="hover:bg-gray-50">
          <td className="px-2 py-1 text-gray-900">{txn.date}</td>
          <td className="px-4 py-3 text-gray-900">{txn.senderMobile}</td>
          <td className="px-4 py-3 text-gray-900">{txn.transactionId}</td>
          <td className="px-4 py-3 text-gray-900">₹{txn.amount}</td>
          <td className="px-4 py-3 text-gray-900">{txn.accountNumber}</td>
          <td className="px-4 py-3 text-gray-900">{txn.bankRRN}</td>
          <td className="px-4 py-3">
            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${statusClass[txn.status]}`}>
              {txn.status}
            </span>
          </td>
          <td className="px-4 py-3 text-center">
            <button className="text-blue-600 hover:text-blue-800" title="Check Status">
              <FaCheckCircle />
            </button>
          </td>
          <td className="px-4 py-3 text-center">
            <button className="text-green-600 hover:text-green-800" title="Receipt">
              <FaReceipt />
            </button>
          </td>
          <td className="px-4 py-3 text-center">
            <button className="text-yellow-600 hover:text-yellow-800" title="Complain">
              <FaExclamationCircle />
            </button>
          </td>
          <td className="px-4 py-3 text-center">
            <button className="text-red-600 hover:text-red-800" title="Refund">
              {/* Example: Use an appropriate icon */}
              <FaUndo />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  {/* Empty State */}
  {transactions.length === 0 && (
    <div className="text-center py-8 text-gray-500">No transactions found</div>
  )}
</div>

    </>
  );
};

export default MoneyTransfer;
