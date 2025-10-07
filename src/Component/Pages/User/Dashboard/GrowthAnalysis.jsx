// import React, { useState } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { FaRupeeSign } from "react-icons/fa";

// const data = [
//   { month: "Nov-24", value: 0 },
//   { month: "Dec-24", value: 0 },
//   { month: "Jan-25", value: 0 },
//   { month: "Feb-25", value: 0 },
//   { month: "Mar-25", value: 0.2 },
//   { month: "Apr-25", value: 2 },
//   { month: "May-25", value: 0.1 },
//   { month: "Jun-25", value: 0 },
//   { month: "Jul-25", value: 0 },
//   { month: "Aug-25", value: 0 },
//   { month: "Sep-25", value: 0 },
//   { month: "Oct-25", value: 0 },
// ];

// const GrowthAnalysis = () => {
//   const [activeTab, setActiveTab] = useState("Income");

//   const tabs = ["Income", "Volume", "Count"];

//   return (
//     <div className="w-full bg-white rounded-2xl shadow-md mb-14 sm:p-8">
//       {/* Header Section */}
//       <div className="flex flex-wrap items-center justify-between gap-4">
//         <div className="flex items-center gap-3">
//           <div className="relative flex items-center justify-center">
//             <BsGraphUpArrow className="text-blue-700 text-4xl" />
//             <FaRupeeSign className="absolute -bottom-1 -right-2 text-blue-900 text-xl" />
//           </div>
//           <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
//             Growth Analysis
//           </h2>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-3 sm:gap-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-5 py-2 rounded-md font-medium transition-all ${
//                 activeTab === tab
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-blue-100 text-blue-800 hover:bg-blue-200"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Chart Section */}
//       <div className="mt-6 w-full h-64 sm:h-80">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
//             <YAxis tick={{ fill: "#6b7280" }} />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="value"
//               stroke="#0000FF"
//               fillOpacity={1}
//               fill="url(#colorValue)"
//               strokeWidth={3}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default GrowthAnalysis;

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

const data = [
  { month: "Nov-24", value: 0 },
  { month: "Dec-24", value: 0 },
  { month: "Jan-25", value: 0 },
  { month: "Feb-25", value: 0 },
  { month: "Mar-25", value: 0.2 },
  { month: "Apr-25", value: 2 },
  { month: "May-25", value: 0.1 },
  { month: "Jun-25", value: 0 },
  { month: "Jul-25", value: 0 },
  { month: "Aug-25", value: 0 },
  { month: "Sep-25", value: 0 },
  { month: "Oct-25", value: 0 },
];

const GrowthAnalysis = () => {
  const [activeTab, setActiveTab] = useState("Income");
  const tabs = ["Income", "Volume", "Count"];

  return (
    <div className="w-full bg-white rounded-2xl shadow-md mb-10 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <BsGraphUpArrow className="text-blue-700 text-3xl sm:text-4xl" />
            {/* <FaRupeeSign className="absolute -bottom-1 -right-2 text-blue-900 text-lg sm:text-xl" /> */}
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
            Growth Analysis
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-start sm:justify-end gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-md text-sm sm:text-base font-medium transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-6 w-full h-56 sm:h-64 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              interval={1}
              angle={-25}
              textAnchor="end"
              height={40}
            />
            <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowthAnalysis;
