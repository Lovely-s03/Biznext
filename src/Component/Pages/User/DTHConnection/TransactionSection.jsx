import React, { useState } from "react";

const transactions = []; // Replace with actual data

const TransactionSection = () => {
  const [status, setStatus] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className=" max-w-7xl mx-auto bg-gray-100 mt-5">
    
<div className="bg-gray-200 p-4 shadow rounded-md">
  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-2 xl:gap-4">
    {/* Status */}
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 mb-1">Status</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>All</option>
        <option>Successfull</option>
        <option>Pending</option>
        <option>Rejected</option>
         <option>Refunded</option>
      </select>
    </div>

    {/* From Date */}
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 mb-1">From Date</label>
      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* To Date */}
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 mb-1">To Date</label>
      <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="flex flex-col md:col-span-3">
      <label className="text-sm text-gray-500 mb-1">
        Transaction Id or Mobile Number
      </label>
      <input
        type="text"
        placeholder="Transaction Id or Mobile Number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>

    {/* Search Button */}
    <div className="flex items-center">
      <button className="bg-[#000080] mx-7 mt-5 rounded-3xl text-sm font-semibold text-white w-full md:w-auto px-8 py-3 hover:bg-blue-700 transition">
        SEARCH
      </button>
    </div>
  </div>
</div>

      <div className="bg-white overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              {[
                "Name",
                "Mobile",
                "Amount",
                "Transaction ID",
                "Operator",
                "Sell Date",
                "Status",
                "Subscriber ID",
                "Complain",
                "Receipt",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center py-6 text-md font-semibold text-[#000080] cursor-pointer hover:underline">
                  View Latest Transactions
                </td>
              </tr>
            ) : (
              transactions.map((tx, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2">{tx.name}</td>
                  <td className="px-4 py-2">{tx.mobile}</td>
                  <td className="px-4 py-2">{tx.amount}</td>
                  <td className="px-4 py-2">{tx.transactionId}</td>
                  <td className="px-4 py-2">{tx.operator}</td>
                  <td className="px-4 py-2">{tx.sellDate}</td>
                  <td className="px-4 py-2">{tx.status}</td>
                  <td className="px-4 py-2">{tx.subscriberId}</td>
                  <td className="px-4 py-2">{tx.complain}</td>
                  <td className="px-4 py-2">{tx.receipt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionSection;
