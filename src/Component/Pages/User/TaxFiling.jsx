import React from "react";
import { FaFileInvoiceDollar, FaRedo, FaExclamationCircle, FaCheckCircle, FaReceipt } from "react-icons/fa";
import DateFormate from "./DateFormate"; 
import tax from "../../../assets/TaxTwoWin.jpg"
const transactions = [
  {
    id: 1,
    amount: "1500",
    transactionId: "TXN0011223344",
    planName: "ITR Filing (Basic)",
    date: "2024-04-21",
    status: "Completed",
  },
  {
    id: 2,
    amount: "2500",
    transactionId: "TXN0011223345",
    planName: "GST Filing (Quarterly)",
    date: "2024-05-10",
    status: "Pending",
  },
  {
    id: 3,
    amount: "1800",
    transactionId: "TXN0011223346",
    planName: "TDS Return Filing",
    date: "2024-05-18",
    status: "Failed",
  },
];

const statusClass = {
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Failed: "bg-red-100 text-red-800",
};

const TaxFiling = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full mx-auto mt-[45px] bg-white shadow-sm">
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <FaFileInvoiceDollar className="text-2xl text-gray-700" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Tax Filing
          </h2>
          <div className="w-10 border-b-2 border-blue-500 ml-2"></div>
        </div>
      </div>

      {/* Tax Filing Form Section */}
      <div className="w-full mx-auto mt-5 bg-white rounded-md shadow p-5">
        <div className="mt-1 w-full  pt-3  p-2 bg-white">
                <img
                  src={tax}
                  alt="AyushPay"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
        
                <div className="flex flex-col md:flex-row gap-0 items-center md:gap-4 w-full lg:max-w-md pb-2">
                 
                  
                </div>
              </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-10 rounded-full shadow-lg transition w-full sm:w-auto">
            PROCEED
          </button>
        </div>
      </div>

      {/* Date Filter */}
      <div className="bg-white rounded-lg mt-8 shadow">
        <DateFormate />
      </div>

      {/* ✅ Transaction Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow mt-6">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-black uppercase">Amount</th>
              <th className="px-4 py-3 text-left font-semibold text-black uppercase">Transaction ID</th>
              <th className="px-4 py-3 text-left font-semibold text-black uppercase">Plan Name</th>
              <th className="px-4 py-3 text-left font-semibold text-black uppercase">Date</th>
              <th className="px-4 py-3 text-left font-semibold text-black uppercase">Status</th>
              <th className="px-4 py-3 text-center font-semibold text-black uppercase">Check Status</th>
              <th className="px-4 py-3 text-center font-semibold text-black uppercase">Complain</th>
              <th className="px-4 py-3 text-center font-semibold text-black uppercase">Receipt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900">₹{txn.amount}</td>
                <td className="px-4 py-3 text-gray-900">{txn.transactionId}</td>
                <td className="px-4 py-3 text-gray-900">{txn.planName}</td>
                <td className="px-4 py-3 text-gray-900">{txn.date}</td>
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
                  <button className="text-green-600 hover:text-green-800" title="Receipt">
                    <FaReceipt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {transactions.length === 0 && (
        <div className="text-center py-8 text-gray-500">No transactions found</div>
      )}
    </div>
  );
};

export default TaxFiling;
