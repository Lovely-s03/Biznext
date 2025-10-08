import React, { useState } from "react";

const DateFormate = () => {
  const [status, setStatus] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
    const [search, setSearch] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-2 xl:gap-4 p-5">
    {/* Status */}
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 mb-1">Status</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>All</option>
        <option>Success</option>
        <option>Pending</option>
        <option>Failed</option>
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

    {/* Transaction ID / Mobile */}
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
  );
};

export default DateFormate;
