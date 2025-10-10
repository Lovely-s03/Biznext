import React, { useState } from "react";
import { FaHandHoldingUsd, FaChartLine, FaCalculator, FaComments } from "react-icons/fa";

const DashboardStats = () => {
  const [active, setActive] = useState("Today");

  const timeFilters = ["Today", "Yesterday", "Week", "Month", "Last Month"];

  const stats = [
    {
      title: "Total Income",
      value: 0,
      icon: <FaHandHoldingUsd className="text-5xl text-[#000080]" />,
    },
    {
      title: "Transaction Volume",
      value: 0,
      icon: <FaChartLine className="text-5xl text-[#000080]" />,
    },
    {
      title: "Count",
      value: 0,
      icon: <FaCalculator className="text-5xl text-[#000080]" />,
    },
    {
      title: "Complaints",
      value: 0,
      icon: <FaComments className="text-5xl text-[#000080]" />,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-6 mt-5">
      {/* Time Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {timeFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              active === filter
                ? "bg-[#000080] text-white"
                : "bg-orange-500 text-white  hover:bg-[#029909]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border rounded-lg overflow-hidden">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 bg-gray-50 ${
              index !== stats.length - 1 ? "border-r" : ""
            }`}
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-xl font-bold text-black">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
