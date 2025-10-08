// import React, { useState } from "react";

// const packagesData = [
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Ultimate Tamil 6M Indoor and Outdoor Unit + Free Standard Installation",
//     mrp: 3298,
//     offer: 2698,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Ultimate Bengali 6M Only Indoor Unit with Free Standard Installation",
//     mrp: 3402,
//     offer: 2802,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Ultimate Telugu 6M Indoor and Outdoor Unit + Free Standard Installation",
//     mrp: 3441,
//     offer: 2841,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Ultimate Telugu HD Pack 6M Indoor and Outdoor Unit + Free Standard Installation",
//     mrp: 3843,
//     offer: 3243,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Ultimate Tamil HD Pack 6M Indoor and Outdoor Unit + Free Standard Installation",
//     mrp: 3548,
//     offer: 2948,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Malayalam Entertainment 6M Pack, Indoor and Outdoor Unit with Free Standard Installation",
//     mrp: 3112,
//     offer: 2512,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Malayalam Entertainment HD 6M Pack, Indoor and Outdoor Unit with Free Standard Installation",
//     mrp: 3312,
//     offer: 2712,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Malayalam Entertainment HD 6M, Only Indoor Unit with Free Standard Installation",
//     mrp: 2712,
//     offer: 2112,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Ultimate Kannada HD 6M, Indoor and Outdoor Unit with Free Standard Installation",
//     mrp: 3501,
//     offer: 2901,
//   },
//   {
//     provider: "Airtel Digital TV",
//     box: "HD",
//     name: "Kannada Telugu Ultimate 6M, Indoor and Outdoor Unit with Free Standard Installation",
//     mrp: 3961,
//     offer: 3361,
//   },
// ];

// const SubscriptionTable = () => {
//   const [tab, setTab] = useState("Monthly");

//   return (
//     <div>
      
//       <div className=" bg-white flex border-b border-gray-300 mb-4">
//         {["Monthly", "Half Yearly"].map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`flex-1 text-center py-2 font-medium text-sm md:text-base transition-colors duration-200 border-r last:border-r-0 ${
//               tab === t
//                 ? "text-blue-600 border-b-2 border-blue-600"
//                 : "text-gray-500 hover:text-blue-600"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 shadow-sm rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="text-left py-3 px-5 whitespace-nowrap">Service Provider</th>
//               <th className="text-left py-3 px-5 whitespace-nowrap">Set Top Box</th>
//               <th className="text-left py-3 px-5 whitespace-nowrap">Package Name</th>
//               <th className="text-left py-3 px-5 whitespace-nowrap">MRP</th>
//               <th className="text-left py-3 px-5 whitespace-nowrap">Offer Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {packagesData.map((pkg, index) => (
//               <tr key={index} className="bg-white text-sm font-normal">
//                 <td className="py-3 px-5">{pkg.provider}</td>
//                 <td className="py-3 px-5">{pkg.box}</td>
//                 <td className="py-3 px-5">{pkg.name}</td>
//                 <td className="py-3 px-5">Rs. {pkg.mrp}</td>
//                 <td className="py-3 px-5 text-blue-600 font-medium">
//                   Rs. {pkg.offer}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionTable;



import React, { useState } from "react";

const monthlyData = [
  {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Monthly Tamil Pack - Indoor and Outdoor Unit + Free Installation",
    mrp: 549,
    offer: 449,
  },
  {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Monthly Bengali Pack - Indoor Unit Only + Free Installation",
    mrp: 572,
    offer: 472,
  },
  {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Monthly Telugu Pack - Indoor and Outdoor Unit + Free Installation",
    mrp: 599,
    offer: 499,
  },
   {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Ultimate Tamil 6M Indoor and Outdoor Unit + Free Standard Installation",
    mrp: 3298,
    offer: 2698,
  },
   {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Ultimate Tamil 6M Indoor and Outdoor Unit + Free Standard Installation",
    mrp: 3298,
    offer: 2698,
  },
];

const halfYearlyData = [
  {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Ultimate Tamil 6M Indoor and Outdoor Unit + Free Standard Installation",
    mrp: 3298,
    offer: 2698,
  },
  {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Ultimate Bengali 6M Only Indoor Unit with Free Standard Installation",
    mrp: 3402,
    offer: 2802,
  },
  {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Ultimate Telugu 6M Indoor and Outdoor Unit + Free Standard Installation",
    mrp: 3441,
    offer: 2841,
  },
   {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Ultimate Tamil 6M Indoor and Outdoor Unit + Free Standard Installation",
    mrp: 3298,
    offer: 2698,
  },
   {
    provider: "Airtel Digital TV",
    box: "HD",
    name: "Ultimate Bengali 6M Only Indoor Unit with Free Standard Installation",
    mrp: 3402,
    offer: 2802,
  },
];

const SubscriptionTable = () => {
  const [tab, setTab] = useState("Monthly");

  const data = tab === "Monthly" ? monthlyData : halfYearlyData;

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg p-4 shadow">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        {["Monthly", "Half Yearly"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 text-center py-2 font-medium text-sm md:text-base transition-colors duration-200 border-r last:border-r-0 ${
              tab === t
                ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-5 whitespace-nowrap">Service Provider</th>
              <th className="text-left py-3 px-5 whitespace-nowrap">Set Top Box</th>
              <th className="text-left py-3 px-5 whitespace-nowrap">Package Name</th>
              <th className="text-left py-3 px-5 whitespace-nowrap">MRP</th>
              <th className="text-left py-3 px-5 whitespace-nowrap">Offer Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pkg, index) => (
              <tr
                key={index}
                className="bg-white text-sm font-normal border-b hover:bg-blue-50 transition"
              >
                <td className="py-3 px-5 whitespace-nowrap">{pkg.provider}</td>
                <td className="py-3 px-5 whitespace-nowrap">{pkg.box}</td>
                <td className="py-3 px-5 whitespace-nowrap">{pkg.name}</td>
                <td className="py-3 px-5 whitespace-nowrap">Rs. {pkg.mrp}</td>
                <td className="py-3 px-5 whitespace-nowrap text-blue-600 font-medium">
                  Rs. {pkg.offer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionTable;
