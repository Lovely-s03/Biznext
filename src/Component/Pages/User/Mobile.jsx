import React from "react";
import { FiPhone, FiRadio, FiFlag } from "react-icons/fi";
import { FaRupeeSign, FaMobile, FaRedo, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import DateFormate from "./DateFormate";

// ✅ Transaction data
const transactions = [
  {
    id: 1,
    txnDate: "2024-01-15",
    transactionId: "TXN001234567",
    mobile: "+1234567890",
    amount: "299",
    operator: "Airtel",
    status: "Completed",
    rechargeDate: "2024-01-15",
  },
  {
    id: 2,
    txnDate: "2024-01-15",
    transactionId: "TXN001234568",
    mobile: "+1234567891",
    amount: "149",
    operator: "Jio",
    status: "Pending",
    rechargeDate: "2024-01-15",
  },
  {
    id: 3,
    txnDate: "2024-01-14",
    transactionId: "TXN001234569",
    mobile: "+1234567892",
    amount: "399",
    operator: "Vi",
    status: "Failed",
    rechargeDate: "2024-01-14",
  },
];

const statusClass = {
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Failed: "bg-red-100 text-red-800",
};

// ✅ Transaction Table Component
const TransactionTable = () => (
  <div className="overflow-x-auto bg-white rounded-lg shadow mt-8">
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Mobile Number</th>
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Amount</th>
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Transaction ID</th>
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Recharge Date</th>
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Operator</th>
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Status</th>
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Check Status</th>
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Complain</th>
          <th className="px-4 py-2 text-xs font-bold text-black uppercase whitespace-nowrap">Repeat</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {transactions.map((txn) => (
          <tr key={txn.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-gray-900">{txn.mobile}</td>
            <td className="px-4 py-3 text-gray-900">{txn.amount}</td>
            <td className="px-4 py-3 text-gray-900">{txn.transactionId}</td>
            <td className="px-4 py-3 text-gray-900">{txn.rechargeDate}</td>
            <td className="px-4 py-3 text-gray-900">{txn.operator}</td>
            <td className="px-4 py-3">
              <span
                className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${statusClass[txn.status]}`}
              >
                {txn.status}
              </span>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="text-blue-600 hover:text-blue-800" title="Check Status">
                <FaCheckCircle />
              </button>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="text-yellow-600 hover:text-yellow-800" title="Complain">
                <FaExclamationCircle />
              </button>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="text-cyan-600 hover:text-cyan-800" title="Repeat">
                <FaRedo />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ✅ Your Original Mobile Component (unchanged but responsive)
const Mobile = () => {
  return (
    <>
      <div className="w-full mx-auto mt-[45px] bg-white">
        <div className="flex items-center gap-3 p-4 border-gray-300">
          <FaMobile className="text-2xl text-gray-700" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Mobile Recharge</h2>
          <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
        </div>
      </div>

      <div className="w-full mx-auto mt-5 bg-white rounded-md shadow p-5">
        {/* ✅ Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Mobile Input */}
          <div className="flex items-center px-4  bg-gray-50 rounded shadow-sm">
            <FiPhone className="text-blue-600 mr-2" size={22} />
            <input
              type="text"
              placeholder="Mobile"
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
          </div>

          {/* Operator Input */}
          <div className="flex items-center px-4  bg-gray-50 rounded shadow-sm">
            <FiRadio className="text-gray-400 mr-2" size={22} />
            <input
              type="text"
              placeholder="Operator"
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
          </div>

          {/* Circle Input with View Plans */}
          <div className="flex items-center px-4  bg-gray-50 rounded shadow-sm">
            <FiFlag className="text-gray-400 mr-2" size={22} />
            <input
              type="text"
              placeholder="Circle"
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
            <button className="ml-3 px-4 sm:px-6 py-1 bg-cyan-400 text-white rounded-full text-sm font-semibold focus:outline-none transition">
              View Plans
            </button>
          </div>

          {/* Amount Input */}
          <div className="flex items-center px-4 py-3 bg-gray-50 rounded shadow-sm">
            <FaRupeeSign className="text-gray-400 mr-2" size={22} />
            <input
              type="number"
              placeholder="Amount"
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-700 hover:bg-blue-800 text-white text-lg sm:text-sm font-bold py-3 sm:py-4 px-10  rounded-full shadow-lg transition w-full sm:w-auto">
            RECHARGE
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg mt-8">
        <DateFormate />
      </div>

      {/* ✅ Added the new Transaction Table here */}
      <TransactionTable />
    </>
  );
};

export default Mobile;
