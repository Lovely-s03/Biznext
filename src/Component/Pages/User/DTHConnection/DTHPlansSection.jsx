// import React, { useState } from "react";
// import hdBox from "../../../../assets/AirtelDigitalTV_HD.png"; 
// import SubscriptionTable from "./SubscriptionTable";

// const plans = [
//   {
//     title: "Airtel HD Box",
//     features: ["Free Standard Installation", "Free Delivery", "1 Month Pack"],
//     image: hdBox,
//     bestSeller: true,
//   },
//   {
//     title: "Airtel Xstream Box",
//     features: ["Free Standard Installation", "Free Delivery", "1 Month Pack"],
//     image: hdBox,
//     bestSeller: true,
//   },
// ];

// const DTHPlansSection = () => {
//     const [showPlans, setShowPlans] = useState(false);
//   return (
//     <div className="bg-gray-100 py-5">
//       <div className="max-w-7xl mx-auto bg-white">
//         <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 pt-8">
//           {plans.map((plan, index) => (
//             <div
//               key={index}  >
//            <img src={plan.image} alt={plan.title} className="mt-auto w-full object-contain" />
//             </div>
//           ))}
//         </div>

//         {/* <div className="flex justify-center mt-8">
//           <button className="bg-blue-600 text-white px-6 py-3 mb-6 rounded-full hover:bg-blue-700 transition">
//             VIEW ALL PLANS
//           </button>
//         </div> */}

//          <div className="p-6 max-w-7xl mx-auto flex flex-col items-center">
//       {/* VIEW ALL PLANS Button */}
//       <button
//         onClick={() => setShowPlans(!showPlans)}
//         className="bg-blue-600 text-white px-6 py-3 mb-6 rounded-full hover:bg-blue-700 transition"
//       >
//         {showPlans ? "VIEW ALL PLANS" : "VIEW ALL PLANS"}
//       </button>

//       {/* Table Section */}
//       <div
//         className={`transition-all duration-500 ease-in-out overflow-hidden ${
//           showPlans ? " opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         {showPlans && <SubscriptionTable/>}
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default DTHPlansSection;


import React, { useState } from "react";
import hdBox from "../../../../assets/AirtelDigitalTV_HD.png";
import SubscriptionTable from "./SubscriptionTable";

const plans = [
  {
   
    image: hdBox,
   
  },
  {
    
    image: hdBox,
 
  },
];

const DTHPlansSection = () => {
  const [showPlans, setShowPlans] = useState(false);

  return (
    <div className="bg-gray-100 py-5">
      {/* White section with DTH plans */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 pt-8">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={plan.image}
                alt={plan.title}
                className="mt-auto w-full object-contain"
              />
           
            </div>
          ))}
        </div>

        {/* VIEW ALL PLANS button */}
        <div className="flex justify-center mt-8 pb-8">
          <button
            onClick={() => setShowPlans(!showPlans)}
            className="bg-[#000080] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            VIEW ALL PLANS
          </button>
        </div>
      </div>

      {/* Table Section Outside White Box */}
      {showPlans && (
        <div className="w-full  mt-5">
          <div className="max-w-7xl mx-auto">
            
            <SubscriptionTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default DTHPlansSection;
